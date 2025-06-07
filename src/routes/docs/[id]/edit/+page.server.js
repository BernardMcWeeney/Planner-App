import { fail, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const doc = await platform.env.DB.prepare("SELECT * FROM docs WHERE id = ?").bind(params.id).first();
  if (!doc) throw error(404, 'Doc not found');
  
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { doc, projects };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, platform }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await platform.env.DB.prepare(
        `UPDATE docs SET project_id = ?, title = ?, content = ?, type = ? WHERE id = ?`
      ).bind(data.project_id, data.title, data.content, data.type, params.id).run();
      
      throw redirect(303, `/docs`);
    } catch (err) {
      if (err.status === 303) throw err;
      return fail(500, { message: 'Could not update doc.' });
    }
  }
};