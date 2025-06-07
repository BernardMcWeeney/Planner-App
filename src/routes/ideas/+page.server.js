import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT ideas.*, projects.name as project_name 
     FROM ideas 
     JOIN projects ON ideas.project_id = projects.id 
     ORDER BY starred DESC, created_at DESC`
  ).all();
  return { ideas: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM ideas WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (error) {
      return fail(500, { message: 'Failed to delete idea' });
    }
  },
  toggleStarred: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    const starred = formData.get('starred');

    try {
      await platform.env.DB.prepare(
        "UPDATE ideas SET starred = ? WHERE id = ?"
      ).bind(starred === '1' ? 0 : 1, id).run();
      return { success: true };
    } catch (error) {
      return fail(500, { message: 'Failed to update idea' });
    }
  }
};