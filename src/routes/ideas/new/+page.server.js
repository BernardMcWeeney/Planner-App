import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, platform }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const starred = data.starred ? 1 : 0;

    if (!data.title || !data.project_id) {
      return fail(400, { data, missing: true });
    }

    try {
      await platform.env.DB.prepare(
        "INSERT INTO ideas (project_id, title, description, starred) VALUES (?, ?, ?, ?)"
      ).bind(data.project_id, data.title, data.description, starred).run();
      
      throw redirect(303, `/ideas`);
    } catch (error) {
      if (error.status === 303) throw error;
      return fail(500, { message: 'Could not create the idea.' });
    }
  }
};