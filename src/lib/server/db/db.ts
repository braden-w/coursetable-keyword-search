import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { TURSO_SYNC_URL, TURSO_TOKEN } from '$env/static/private';

export const client = createClient({
	url: TURSO_SYNC_URL as string,
	authToken: TURSO_TOKEN as string,
});

export const db = drizzle(client);
