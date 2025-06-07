import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  const { results } = await platform.env.DB.prepare(
    "SELECT * FROM tasks"
  ).all();
  return { tasks: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM tasks WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (error) {
      return fail(500, { message: 'Failed to delete task' });
    }
  }
};