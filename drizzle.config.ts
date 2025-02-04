import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
	schema: './src/lib/schema.ts',
	out: './drizzle',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_SYNC_URL!,
		authToken: process.env.TURSO_TOKEN!,
	},
} satisfies Config;
