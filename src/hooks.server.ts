import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.DB = event.platform?.env?.DB;
  return resolve(event);
};