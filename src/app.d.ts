import * as schema from '$lib/server/schema';
import type { LibSQLDatabase } from 'drizzle-orm/libsql';
import 'unplugin-icons/types/svelte';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: LibSQLDatabase<typeof schema>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
