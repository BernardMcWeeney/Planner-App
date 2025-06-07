import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  // Load projects to associate the note with
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, platform }) => {
    const formData = await request.formData();
    const project_id = formData.get('project_id');
    const title = formData.get('title');
    const content = formData.get('content');

    if (!content || !project_id) {
      return fail(400, { project_id, title, content, missing: true });
    }

    try {
      await platform.env.DB.prepare(
        "INSERT INTO notes (project_id, title, content, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)"
      ).bind(project_id, title, content).run();
      
      throw redirect(303, `/notes`);
    } catch (error) {
        if (error.status === 303) throw error;
        console.error(error);
        return fail(500, { message: 'Could not create the note.' });
    }
  }
};