import redis from '$lib/redis';
import type {SearchResponse} from '$lib/types/SearchResponse';
import {error, json} from '@sveltejs/kit';
import {compress, decompress} from 'lz-string';
import type {RequestHandler} from './$types';
import {options} from './payload';

const DEFAULT_EXPIRATION = 60 * 60 * 24; // 1 day

export const GET: RequestHandler = async ({ url }: { url: URL }) => {
	const keyword = url.searchParams.get('keyword') ?? '';
	const course_keyword = url.searchParams.get('course_keyword') ?? '';
	const areas_skills_keyword = url.searchParams.get('areas_skills_keyword') ?? '';
	// From https://stackoverflow.com/a/58437909
	try {
		const response = await queryCourseTable({ keyword, course_keyword, areas_skills_keyword });
		return json(response);
		// {
		// 	headers: {
		// 		'Cache-Control': `s-maxage=${DEFAULT_EXPIRATION}, public`
		// 	}
		// }
	} catch (e) {
		throw error(500, e as Error);
	}
};

async function queryCourseTable({
	keyword,
	course_keyword,
	areas_skills_keyword
}: {
	keyword: string;
	course_keyword: string;
	areas_skills_keyword: string;
}) {
	// Add a % to the beginning of the keyword to make it a prefix search if it's not already
	keyword = keyword.startsWith('%') ? keyword : `%${keyword}`;
	course_keyword = course_keyword.startsWith('%') ? course_keyword : `%${course_keyword}`;

	// Add a % to the end of the keyword to make it a prefix search if it's not already
	keyword = keyword.endsWith('%') ? keyword : `${keyword}%`;
	course_keyword = course_keyword.endsWith('%') ? course_keyword : `${course_keyword}%`;

	// Lowercase both keywords
	keyword = keyword.toLowerCase();
	course_keyword = course_keyword.toLowerCase();

	const key = `/api/search?keyword=${keyword}&course_keyword=${course_keyword}&areas_skills_keyword=${areas_skills_keyword}`;

	const cachedResponse = await getRedisKey(key);
	if (cachedResponse) {
		return cachedResponse;
	}
	const res = await fetch(
		'https://api.coursetable.com/ferry/v1/graphql?=',
		options({ keyword, course_keyword, areas_skills_keyword })
	);
	const response = (await res.json()) as SearchResponse;
	setRedisKey(key, response);
	return response;
}


async function getRedisKey(key: string) {
	try {
		const reply = await redis.get(key);
		if (reply) {
			console.log('Cache Hit');
			const parsedReply = JSON.parse(decompress(reply) as string) as SearchResponse;
			return parsedReply;
		} else {
			console.log('Cache Miss');
			return null;
		}
	} catch (err) {
		console.error(err);
		return null;
	}
}

async function setRedisKey(key: string, value: SearchResponse) {
	try {
		await redis.set(key, compress(JSON.stringify(value)), 'EX', DEFAULT_EXPIRATION);
	} catch (err) {
		console.error(err);
	}
}