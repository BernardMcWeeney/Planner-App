import { fail, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const { id } = params;
  const task = await platform.env.DB.prepare("SELECT * FROM tasks WHERE id = ?").bind(id).first();
  if (!task) {
    throw error(404, 'Task not found');
  }
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { task, projects };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, platform }) => {
    const { id } = params;
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const done = formData.get('done') ? 1 : 0;

    try {
      await platform.env.DB.prepare(
        "UPDATE tasks SET project_id = ?, name = ?, description = ?, done = ?, due_date = ?, priority = ? WHERE id = ?"
      ).bind(data.project_id, data.name, data.description, done, data.due_date, data.priority, id).run();
      
      throw redirect(303, `/tasks`);
    } catch (err) {
      if (err.status === 303) throw err;
      return fail(500, { message: 'Could not update task.' });
    }
  }
};