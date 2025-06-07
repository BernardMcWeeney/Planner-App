import { fail, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const idea = await platform.env.DB.prepare("SELECT * FROM ideas WHERE id = ?").bind(params.id).first();
  if (!idea) throw error(404, 'Idea not found');
  
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { idea, projects };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, platform }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const starred = data.starred ? 1 : 0;

    try {
      await platform.env.DB.prepare(
        `UPDATE ideas SET project_id = ?, title = ?, description = ?, starred = ? 
         WHERE id = ?`
      ).bind(data.project_id, data.title, data.description, starred, params.id).run();
      
      throw redirect(303, `/ideas`);
    } catch (err) {
      if (err.status === 303) throw err;
      return fail(500, { message: 'Could not update idea.' });
    }
  }
};