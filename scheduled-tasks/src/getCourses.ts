import { fetchCourseTable } from './fetchCourseTable.js';
import supabase from './supabaseClient.js';

const coursesCount = `query CoursesCount {
	computed_listing_info_aggregate {
		aggregate {
			count
		}
	}
}`;

const coursesSchemaMatchingApiStaticCatalog = `query CoursesSchemaMatchingApiStaticCatalog ($limit: Int, $offset: Int) {
	computed_listing_info (limit: $limit, offset: $offset) {
		course_id
		all_course_codes
		areas
		average_gut_rating
		average_professor
		average_rating
		average_workload
		average_rating_same_professors
		average_workload_same_professors
		classnotes
		course_code
		credits
		crn
		description
		enrolled
		extra_info
		final_exam
		flag_info
		fysem
		last_enrollment
		last_enrollment_same_professors
		listing_id
		locations_summary
		number
		professor_ids
		professor_names
		regnotes
		requirements
		rp_attr
		same_course_id
		same_course_and_profs_id
		last_offered_course_id
		school
		season_code
		section
		skills
		subject
		syllabus_url
		times_by_day
		times_summary
		title
	}
}`;

export async function getCoursesCount() {
	try {
		const {
			data: {
				computed_listing_info_aggregate: {
					aggregate: { count }
				}
			}
		} = await fetchCourseTable(coursesCount);
		return count;
	} catch (err) {
		console.error(err);
	}
}

export async function getCoursesSchemaMatchingApiStaticCatalog() {
	const count = await getCoursesCount();
	const parallelRequests = 4;
	const limit = Math.ceil(count / parallelRequests);

	try {
		const requests = Array.from({ length: parallelRequests }, (_, i) => i * limit).map((offset) =>
			fetchCourseTable(coursesSchemaMatchingApiStaticCatalog, { limit, offset })
		);
		const results = await Promise.all(requests);
		const courses = results.flatMap((result) => result.data.computed_listing_info);
		return courses;
	} catch (err) {
		console.error(err);
	}
}

async function upsertCourseBatch(coursesBatch) {
	const { error } = await supabase.from('Courses').upsert(coursesBatch);
	if (error) throw error;
}
export async function upsertCoursesInBatches(courses) {
	const count = courses.length;
	const parallelRequests = 4;
	const limit = Math.ceil(count / parallelRequests);

	try {
		const requests = Array.from({ length: parallelRequests }, (_, i) => {
			const start = i * limit;
			const end = start + limit;
			const coursesBatch = courses.slice(start, end);
			return upsertCourseBatch(coursesBatch);
		});
		const results = await Promise.all(requests);
		return results;
	} catch (err) {
		console.error(err);
	}
}
