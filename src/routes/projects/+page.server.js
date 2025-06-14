import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  const { results } = await platform.env.DB.prepare(
    "SELECT * FROM projects ORDER BY updated_at DESC"
  ).all();
  return { projects: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  // Renamed from 'delete' to 'deleteProject' to match the form action in ProjectCard.svelte
  deleteProject: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    if (!id) {
      return fail(400, { message: 'Project ID is required' });
    }

    try {
      // It's good practice to delete associated items first, although ON DELETE CASCADE handles this.
      // For example: await platform.env.DB.prepare("DELETE FROM tasks WHERE project_id = ?").bind(id).run();
      
      await platform.env.DB.prepare(
        "DELETE FROM projects WHERE id = ?"
      ).bind(id).run();

      return { success: true, message: 'Project deleted.' };
    } catch (error) {
      console.error(error);
      return fail(500, { message: 'Failed to delete project' });
    }
  }
};