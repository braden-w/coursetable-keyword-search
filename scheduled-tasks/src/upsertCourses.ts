import supabase from './supabaseClient.js';

async function upsertCourseBatch(coursesBatch) {
	const { error } = await supabase.from('Courses').upsert(coursesBatch);
	if (error) throw error;
}

export async function upsertCoursesInBatches(courses) {
	const count = courses.length;
	const parallelRequests = 4;
	const limit = Math.ceil(count / parallelRequests);

	try {
		const requests = Array.from({ length: parallelRequests }, (_, i) => {
			const start = i * limit;
			const end = start + limit;
			const coursesBatch = courses.slice(start, end);
			return upsertCourseBatch(coursesBatch);
		});
		const results = await Promise.all(requests);
		return results;
	} catch (err) {
		console.error(err);
	}
}
