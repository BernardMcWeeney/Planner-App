import { fail, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const { id } = params;
  const project = await platform.env.DB.prepare(
    "SELECT * FROM projects WHERE id = ?"
  ).bind(id).first();

  if (!project) {
    throw error(404, 'Project not found');
  }

  return { project };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, platform }) => {
    const { id } = params;
    const formData = await request.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const color = formData.get('color');

    if (!name) {
      return fail(400, { name, description, color, missing: true });
    }

    try {
      await platform.env.DB.prepare(
        "UPDATE projects SET name = ?, description = ?, color = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
      ).bind(name, description, color, id).run();
      
      throw redirect(303, `/projects/${id}`);
    } catch (err) {
      console.error(err);
      if (err.status === 303) throw err;
      return fail(500, { message: 'Could not update the project.' });
    }
  }
};