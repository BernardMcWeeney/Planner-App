import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT goals.*, projects.name as project_name 
     FROM goals 
     JOIN projects ON goals.project_id = projects.id 
     ORDER BY target_date ASC`
  ).all();
  return { goals: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM goals WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (error) {
      return fail(500, { message: 'Failed to delete goal' });
    }
  },
  toggleStatus: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    const status = formData.get('status');
    
    const nextStatus = {
        'planned': 'in_progress',
        'in_progress': 'completed',
        'completed': 'planned'
    }[status] || 'planned';

    try {
        await platform.env.DB.prepare(
            "UPDATE goals SET status = ? WHERE id = ?"
        ).bind(nextStatus, id).run();
        return { success: true };
    } catch (error) {
        return fail(500, { message: 'Failed to update status' });
    }
  }
};