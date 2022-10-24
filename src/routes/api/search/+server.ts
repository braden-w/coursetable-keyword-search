import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type { SearchResponse } from '$lib/types/SearchResponse';
import {options} from './payload';

export const queryCourseTable = async ({
	keyword,
	course_keyword
}: {
	keyword: string;
	course_keyword: string;
}) => {
	// Add a % to the beginning of the keyword to make it a prefix search if it's not already
	keyword = keyword.startsWith('%') ? keyword : `%${keyword}`;
	course_keyword = course_keyword.startsWith('%') ? course_keyword : `%${course_keyword}`;

	// Add a % to the end of the keyword to make it a prefix search if it's not already
	keyword = keyword.endsWith('%') ? keyword : `${keyword}%`;
	course_keyword = course_keyword.endsWith('%') ? course_keyword : `${course_keyword}%`;
	console.log("🚀 ~ file: +server.ts ~ line 19 ~ keyword", keyword)
	console.log("🚀 ~ file: +server.ts ~ line 21 ~ course_keyword", course_keyword)
	
	const res = await fetch('https://api.coursetable.com/ferry/v1/graphql?=', options({ keyword, course_keyword }));
	const response = (await res.json()) as SearchResponse;
	console.log("🚀 ~ file: +server.ts ~ line 15 ~ response", response)
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
