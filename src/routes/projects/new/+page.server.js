import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, platform }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const color = formData.get('color');

    if (!name) {
      return fail(400, { name, description, color, missing: true });
    }

    try {
      const { results } = await platform.env.DB.prepare(
        "INSERT INTO projects (name, description, color) VALUES (?, ?, ?) RETURNING id"
      ).bind(name, description, color).run();
      
      const newProjectId = results[0]?.id;
      if (newProjectId) {
        throw redirect(303, `/projects/${newProjectId}`);
      } else {
         throw redirect(303, '/projects');
      }

    } catch (error) {
      console.error(error);
      return fail(500, { message: 'Could not create the project.' });
    }
  }
};