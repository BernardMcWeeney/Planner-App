import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT resources.*, projects.name as project_name 
     FROM resources 
     JOIN projects ON resources.project_id = projects.id 
     ORDER BY created_at DESC`
  ).all();
  return { resources: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM resources WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (error) {
      return fail(500, { message: 'Failed to delete resource' });
    }
  }
};