import { PUBLIC_COURSETABLE_COOKIE } from '$env/static/public';
import { json, error } from '@sveltejs/kit';
import { request, gql } from 'graphql-request';

const COURSETABLE_API = 'https://api.coursetable.com/ferry/v1/graphql';

const COURSES_QUERY = gql`
	query {
		computed_listing_info(distinct_on: same_course_id) {
			same_course_id
			all_course_codes
			title
			description
			season_code
			fysem
		}
	}
`;

const fetchCourses = async () => {
	try {
		const headers = {
			Cookie: PUBLIC_COURSETABLE_COOKIE
		};

		const data = await request({
			url: COURSETABLE_API,
			document: COURSES_QUERY,
			variables: {},
			requestHeaders: headers
		});
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};

export async function GET() {
	try {
		const courses = await fetchCourses();
		return json(courses);
	} catch (e) {
		throw error(500, e as Error);
	}
}
