import type { PageLoad } from './$types';

export const load: PageLoad = async ({url}: {url: URL}) => {
	const keyword = url.searchParams.get('keyword') ?? '';
	const course_keyword = url.searchParams.get('course_keyword') ?? '';
	return { keyword, course_keyword };
};
