import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// Get the file from static/same_course_id of this season
	const response = await fetch('/semester_same_course_id/202301.json');
	const data = await response.json() as number[];
	console.log("🚀 ~ file: +page.ts ~ line 7 ~ constload:PageLoad= ~ data", data)
	return { semester_same_course_id : data };
};
