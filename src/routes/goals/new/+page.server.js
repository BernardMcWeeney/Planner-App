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

    if (!data.title || !data.project_id) {
      return fail(400, { data, missing: true });
    }

    try {
      await platform.env.DB.prepare(
        "INSERT INTO goals (project_id, title, description, status, target_date) VALUES (?, ?, ?, ?, ?)"
      ).bind(data.project_id, data.title, data.description, data.status, data.target_date || null).run();
      
      throw redirect(303, `/goals`);
    } catch (error) {
      if (error.status === 303) throw error;
      return fail(500, { message: 'Could not create the goal.' });
    }
  }
};