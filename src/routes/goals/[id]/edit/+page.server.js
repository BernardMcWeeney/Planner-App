import { fail, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const goal = await platform.env.DB.prepare("SELECT * FROM goals WHERE id = ?").bind(params.id).first();
  if (!goal) throw error(404, 'Goal not found');
  
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { goal, projects };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, platform }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await platform.env.DB.prepare(
        `UPDATE goals SET project_id = ?, title = ?, description = ?, status = ?, target_date = ? 
         WHERE id = ?`
      ).bind(data.project_id, data.title, data.description, data.status, data.target_date || null, params.id).run();
      
      throw redirect(303, `/goals`);
    } catch (err) {
      if (err.status === 303) throw err;
      return fail(500, { message: 'Could not update goal.' });
    }
  }
};