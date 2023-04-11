import type { Params } from '$lib/types/Query';
import type { Course, SearchResponse } from '$lib/types/SearchResponse';

type Fetch = typeof fetch;
export async function load({ fetch, url }) {
	const keyword = url.searchParams.get('keyword') ?? '';
	const course_keyword = url.searchParams.get('course_keyword') ?? '';
	const areas_skills_keyword = url.searchParams.get('areas_skills_keyword') ?? '';
	const params = { keyword, course_keyword, areas_skills_keyword };
	const isEmptyQuery = !keyword && !course_keyword && !areas_skills_keyword;
	if (isEmptyQuery) {
		return {
			seasonCourseIds: getSeasonCourseIds({ fetch }),
			params,
			message: 'Enter a query to search for course reviews.',
			streamed: { courses: [] as Course[] }
		};
	}
	return {
		seasonCourseIds: getSeasonCourseIds({ fetch }),
		params,
		message: 'Please enter a query before searching for course reviews.',
		streamed: { courses: getCourses({ fetch, params }) }
	};
}

async function getCourses({ fetch, params }: { fetch: Fetch; params: Params }) {
	const response = await fetch(`/api/search?${new URLSearchParams(params)}`);
	const data = (await response.json()) as SearchResponse;
	return data.data.computed_listing_info_aggregate.nodes;
}

// Get the file from static/same_course_id of this season
async function getSeasonCourseIds({ fetch }: { fetch: Fetch }) {
	const response = await fetch('/api/catalog');
	const seasonCourseIds = (await response.json()) as { [key: number]: string };
	return seasonCourseIds;
}
