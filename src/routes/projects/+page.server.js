import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  const { results } = await platform.env.DB.prepare(
    "SELECT * FROM projects"
  ).all();
  return { projects: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    if (!id) {
      return fail(400, { message: 'Project ID is required' });
    }

    try {
      await platform.env.DB.prepare(
        "DELETE FROM projects WHERE id = ?"
      ).bind(id).run();

      return { success: true };
    } catch (error) {
      console.error(error);
      return fail(500, { message: 'Failed to delete project' });
    }
  }
};