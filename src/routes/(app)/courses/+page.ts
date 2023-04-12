import { db } from '$lib/db';

export const load = async () => {
	return {
		courses: db.selectFrom('Course').selectAll().execute()
	};
};
