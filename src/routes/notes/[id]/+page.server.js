import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
  const { id } = params;
  const note = await platform.env.DB.prepare(
    "SELECT * FROM notes WHERE id = ?"
  ).bind(id).first();

  if (!note) {
    throw error(404, 'Note not found');
  }

  return { note };
}