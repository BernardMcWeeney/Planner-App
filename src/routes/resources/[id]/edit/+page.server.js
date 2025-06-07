import { fail, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const resource = await platform.env.DB.prepare("SELECT * FROM resources WHERE id = ?").bind(params.id).first();
  if (!resource) throw error(404, 'Resource not found');
  
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { resource, projects };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, platform }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await platform.env.DB.prepare(
        `UPDATE resources SET project_id = ?, label = ?, url = ?, description = ? WHERE id = ?`
      ).bind(data.project_id, data.label, data.url, data.description, params.id).run();
      
      throw redirect(303, `/resources`);
    } catch (err) {
      if (err.status === 303) throw err;
      return fail(500, { message: 'Could not update resource.' });
    }
  }
};