import { queryCourseTable } from '../api/search/+server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }: { url: URL }) => {
	const keyword = url.searchParams.get('keyword') ?? '%';
	const course_keyword = url.searchParams.get('course_keyword') ?? '%';
	const response = await queryCourseTable({ keyword, course_keyword });
	return { response };
};
