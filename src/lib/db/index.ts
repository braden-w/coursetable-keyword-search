import { DATABASE_URL } from '$env/static/private';
import { Kysely, PostgresDialect, sql, type RawBuilder } from 'kysely';
import { Pool } from 'pg';
import type { DB } from './schema';

export const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool: new Pool({
			connectionString: DATABASE_URL
		})
	})
});

export function json<T>(obj: T): RawBuilder<T> {
	return sql`${JSON.stringify(obj)}`;
}
