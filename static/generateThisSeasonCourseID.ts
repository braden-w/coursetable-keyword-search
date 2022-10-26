import { env } from '$env/dynamic/public';
const res = await fetch(`https://api.coursetable.com/api/static/catalogs/${seasonId}.json`, {
	headers: {
		'Cache-Control': 'public, max-age=3600',
		'cache-control': 'public, max-age=3600',
		Cookie: env.PUBLIC_COURSETABLE_COOKIE,
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	}
});
const courses = await res.json();

// Import 202301.json and parse into a TypeScript object
// import courses from './202301.json' assert { type: 'json' };

// Map across data and return course code
const courseCodes = courses
	.filter((course) => course.season_code === '202301')
	.map((course) => course.same_course_id);

// Write courseCodes to a json file called same_course_id/202301.json
await Deno.writeTextFile(`./202301_same_course_id.json`, JSON.stringify(courseCodes));
