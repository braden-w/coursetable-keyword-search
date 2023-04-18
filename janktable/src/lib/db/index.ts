import { Kysely, type RawBuilder, sql } from 'kysely';
import { PostgresJSDialect } from 'kysely-postgres-js';
import type { DB } from './schema';
import postgres from 'postgres';
import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } from '$env/static/private';

export const db = new Kysely<DB>({
	dialect: new PostgresJSDialect({
		options: {
			database: 'postgres',
			host: DATABASE_HOST,
			port: 5432,
			user: DATABASE_USERNAME,
			password: DATABASE_PASSWORD
		},
		postgres
	})
});

export function json<T>(obj: T): RawBuilder<T> {
	return sql`${JSON.stringify(obj)}`;
}
