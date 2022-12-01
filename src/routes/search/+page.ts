import { SEASON_ID } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// Get the file from static/same_course_id of this season
	const response = await fetch(`/seasons/courseIds/${SEASON_ID}.json`);
const seasonCourseIds = (await response.json()) as { [key: number]: string };
	return { seasonCourseIds };
};
