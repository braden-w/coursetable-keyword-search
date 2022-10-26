import type { PageLoad } from './$types';

const seasonId = '202301';

export const load: PageLoad = async ({ fetch }) => {
	// Get the file from static/same_course_id of this season
	const response = await fetch(`${seasonId}_same_course_id.json`)
	const seasonCourseIds = (await response.json()) as number[];
	return { seasonCourseIds };
};
