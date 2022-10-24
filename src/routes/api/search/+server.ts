import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type { SearchResponse } from '$lib/types/SearchResponse';
import { graphQL } from './graphql';

export const queryCourseTable = async ({
	keyword,
	course_keyword
}: {
	keyword: string;
	course_keyword: string;
}) => {
	const options = {
		method: 'POST',
		headers: {
			Cookie:
				env.COURSETABLE_COOKIE,
			origin: 'https://www.coursetable.com',
			Referer: 'https://www.coursetable.com',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(graphQL({ keyword, course_keyword }))
	};
	const res = await fetch('https://api.coursetable.com/ferry/v1/graphql?=', options);
	const response = (await res.json()) as SearchResponse;
	console.log('🚀 ~ file: queryCourseTable.ts ~ line 80 ~ response', response);
	return response;
};

export const GET: RequestHandler = async ({ url }: { url: URL }) => {
	const keyword = url.searchParams.get('keyword') ?? '%';
	const course_keyword = url.searchParams.get('course_keyword') ?? '%';
	// From https://stackoverflow.com/a/58437909
	const response = await queryCourseTable({ keyword, course_keyword });
	console.log('🚀 ~ file: +server.ts ~ line 78 ~ constGET:RequestHandler= ~ response', response);
	return json(response);
};
