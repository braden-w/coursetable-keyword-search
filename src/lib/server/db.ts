import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { TURSO_SYNC_URL, TURSO_READONLY_TOKEN } from '$env/static/private';
import * as schema from './schema';

export const client = createClient({
	url: TURSO_SYNC_URL as string,
	authToken: TURSO_READONLY_TOKEN as string,
	// url: 'file:./courses.sqlite',
});

export const db = drizzle(client, { logger: true, schema });
