import { fetchCourseTable } from './index.js';

const coursesCount = `query CoursesCount {
	computed_listing_info_aggregate {
		aggregate {
			count
		}
	}
}`;

const coursesSchemaMatchingApiStaticCatalog = `query CoursesSchemaMatchingApiStaticCatalog {
	computetd_listing_info {
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
				computed_listing_info_aggregate: { aggregate: count }
			}
		} = await fetchCourseTable(coursesCount);
		return count;
	} catch (err) {
		console.error(err);
	}
}

export async function getCoursesSchemaMatchingApiStaticCatalog() {
	try {
		const {
			data: { computed_listing_info: courses }
		} = await fetchCourseTable(coursesSchemaMatchingApiStaticCatalog);
		return courses;
	} catch (err) {
		console.error(err);
	}
}
