import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type { SearchResponse } from '$lib/types/SearchResponse';
import { options } from './payload';

export const queryCourseTable = async ({
	keyword,
	course_keyword,
	areas_skills_keyword
}: {
	keyword: string;
	course_keyword: string;
	areas_skills_keyword: string;
}) => {
	// Add a % to the beginning of the keyword to make it a prefix search if it's not already
	keyword = keyword.startsWith('%') ? keyword : `%${keyword}`;
	course_keyword = course_keyword.startsWith('%') ? course_keyword : `%${course_keyword}`;

	// Add a % to the end of the keyword to make it a prefix search if it's not already
	keyword = keyword.endsWith('%') ? keyword : `${keyword}%`;
	course_keyword = course_keyword.endsWith('%') ? course_keyword : `${course_keyword}%`;

	// Lowercase both keywords
	keyword = keyword.toLowerCase();
	console.log('🚀 ~ file: +server.ts ~ line 27 ~ keyword', keyword);
	course_keyword = course_keyword.toLowerCase();
	console.log('🚀 ~ file: +server.ts ~ line 29 ~ course_keyword', course_keyword);

	const res = await fetch(
		'https://api.coursetable.com/ferry/v1/graphql?=',
		options({ keyword, course_keyword, areas_skills_keyword })
	);
	const response = (await res.json()) as SearchResponse;
	console.log('🚀 ~ file: +server.ts ~ line 25 ~ response', response);
	return response;
};

export const GET: RequestHandler = async ({ url }: { url: URL }) => {
	const keyword = url.searchParams.get('keyword') ?? '%';
	const course_keyword = url.searchParams.get('course_keyword') ?? '%';
	const areas_skills_keyword = url.searchParams.get('areas_skills_keyword') ?? '%';
	// From https://stackoverflow.com/a/58437909
	try {
		const response = await queryCourseTable({ keyword, course_keyword, areas_skills_keyword });
		const daysBeforeRevalidateCache = 7;
		const cacheControl = `public, max-age=${60 * 60 * 24 * daysBeforeRevalidateCache}`;
		return json(response, {
			headers: { 'cache-control': cacheControl, 'Cache-Control': cacheControl }
		});
	} catch (e) {
		throw error(500, e as Error);
	}
};
