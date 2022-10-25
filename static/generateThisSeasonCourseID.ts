// Import 202301.json and parse into a TypeScript object
import courses from './202301.json' assert { type: 'json' };

// Map across data and return course code
const courseCodes = courses.map((course) => course.same_course_id);

// Write courseCodes to a json file called same_course_id/202301.json
await Deno.writeTextFile('./same_course_id/202301.json', JSON.stringify(courseCodes));

