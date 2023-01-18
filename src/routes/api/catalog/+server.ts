import { SEASON_ID } from '$lib/constants';
import { env } from '$env/dynamic/public';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	try {
		const catalog = await getCatalog();
		// console.timeEnd('queryCourseTable');
		return json(catalog);
	} catch (e) {
		throw error(500, e as Error);
	}
};

const options = {
	method: 'GET',
	headers: {
		Cookie: env.PUBLIC_COURSETABLE_COOKIE ?? '',
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	}
};

const getCatalog = async () => {
	try {
		const res = await fetch(
			`https://api.coursetable.com/api/static/catalogs/${SEASON_ID}.json`,
			options
		);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
};
