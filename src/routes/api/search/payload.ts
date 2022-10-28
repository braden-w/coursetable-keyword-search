import { env } from '$env/dynamic/public';
import type {Params} from '$lib/types/Query';
import { graphQL } from './graphql';

export const options = ({
	keyword,
	course_keyword,
	areas_skills_keyword
}: Params) => ({
	method: 'POST',
	headers: {
		Cookie: env.PUBLIC_COURSETABLE_COOKIE ?? '',
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(graphQL({ keyword, course_keyword, areas_skills_keyword }))
});
