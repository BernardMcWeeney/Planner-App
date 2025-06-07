import { fail, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const { id } = params;
  const note = await platform.env.DB.prepare("SELECT * FROM notes WHERE id = ?").bind(id).first();

  if (!note) {
    throw error(404, 'Note not found');
  }

  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { note, projects };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, platform }) => {
    const { id } = params;
    const formData = await request.formData();
    const project_id = formData.get('project_id');
    const title = formData.get('title');
    const content = formData.get('content');

    if (!content || !project_id) {
        return fail(400, { project_id, title, content, missing: true });
    }

    try {
      await platform.env.DB.prepare(
        "UPDATE notes SET project_id = ?, title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
      ).bind(project_id, title, content, id).run();
      
      throw redirect(303, `/notes/${id}`);
    } catch (err) {
      if (err.status === 303) throw err;
      console.error(err);
      return fail(500, { message: 'Could not update the note.' });
    }
  }
};