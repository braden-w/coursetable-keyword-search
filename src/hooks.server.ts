import { building } from '$app/environment';
import { db } from '$lib/server/db';
import { type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	if (building) {
		const response = await resolve(event);
		return response;
	}

	event.locals.db = db;
	const response = await resolve(event);
	return response;
}) satisfies Handle;
