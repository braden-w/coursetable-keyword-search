import { config as loadEnv } from 'https://deno.land/x/dotenv/mod.ts';
await loadEnv({ export: true });

const seasonId = '202301';
const Cookie = Deno.env.get('PUBLIC_COURSETABLE_COOKIE');
console.log('🚀 ~ file: generateThisSeasonCourseID.ts ~ line 3 ~ Cookie', Cookie);
const res = await fetch(`https://api.coursetable.com/api/static/catalogs/${seasonId}.json`, {
	headers: {
		'Cache-Control': 'public, max-age=3600',
		'cache-control': 'public, max-age=3600',
		Cookie,
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	}
});
// console.log('🚀 ~ file: generateThisSeasonCourseID.ts ~ line 12 ~ res', res);
const courses = await res.json();

// Import 202301.json and parse into a TypeScript object
// import courses from './202301.json' assert { type: 'json' };

// Map across data and return course code
const courseCodes = courses
	.filter((course) => course.season_code === '202301')
	.map((course) => course.same_course_id);

// Write courseCodes to a json file called same_course_id/202301.json
await Deno.writeTextFile(`./seasons/courseIds/202301.json`, JSON.stringify(courseCodes));

export {};
