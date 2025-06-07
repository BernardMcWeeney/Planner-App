import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const { id } = params;
  const project = await platform.env.DB.prepare(
    "SELECT * FROM projects WHERE id = ?"
  ).bind(id).first();

  if (!project) {
    throw error(404, 'Project not found');
  }

  return { project };
}