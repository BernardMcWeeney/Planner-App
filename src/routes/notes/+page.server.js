import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  // Join with projects to get the project name
  const { results } = await platform.env.DB.prepare(
    `SELECT notes.*, projects.name as project_name 
     FROM notes 
     JOIN projects ON notes.project_id = projects.id`
  ).all();
  return { notes: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    if (!id) {
      return fail(400, { message: 'Note ID is required' });
    }

    try {
      await platform.env.DB.prepare("DELETE FROM notes WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (error) {
      console.error(error);
      return fail(500, { message: 'Failed to delete note' });
    }
  }
};