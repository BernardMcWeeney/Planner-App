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

    if (!data.label || !data.project_id) {
      return fail(400, { data, missing: true });
    }

    try {
      await platform.env.DB.prepare(
        "INSERT INTO resources (project_id, label, url, description) VALUES (?, ?, ?, ?)"
      ).bind(data.project_id, data.label, data.url, data.description).run();
      
      throw redirect(303, `/resources`);
    } catch (error) {
      if (error.status === 303) throw error;
      return fail(500, { message: 'Could not create the resource.' });
    }
  }
};