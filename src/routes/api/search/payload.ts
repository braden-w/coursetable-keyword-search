import { env } from '$env/dynamic/public';
import { graphQL } from './graphql';

export const options = ({
	keyword,
	course_keyword,
	areas_skills_keyword
}: {
	keyword: string;
	course_keyword: string;
	areas_skills_keyword: string;
}) => ({
	method: 'POST',
	headers: {
		'Cache-Control': 'public, max-age=3600',
		'cache-control': 'public, max-age=3600',
		Cookie: env.PUBLIC_COURSETABLE_COOKIE,
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(graphQL({ keyword, course_keyword, areas_skills_keyword }))
});
