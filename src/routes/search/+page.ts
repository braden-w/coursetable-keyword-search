export async function load({ fetch }) {
	// Get the file from static/same_course_id of this season
	const response = await fetch('/api/catalog');
	const seasonCourseIds = (await response.json()) as { [key: number]: string };
	return { seasonCourseIds };
}
