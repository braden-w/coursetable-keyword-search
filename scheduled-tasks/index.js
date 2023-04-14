import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const { PUBLIC_COURSETABLE_COOKIE, PUBLIC_SUPABSE_URL, PUBLIC_ANON_KEY } = process.env;

const supabase = createClient(PUBLIC_SUPABSE_URL, PUBLIC_ANON_KEY);

function roundFloatsInCourse(course, floatKeys) {
	floatKeys.forEach((floatKey) => {
		if (typeof course[floatKey] === 'number') {
			course[floatKey] = parseFloat(course[floatKey].toFixed(3));
		}
	});
	return course;
}

const fetchData = async () => {
	try {
		const courses = await getCourses();
		const floats = [
			'average_gut_rating',
			'average_professor',
			'average_rating',
			'average_workload',
			'average_rating_same_professors',
			'average_workload_same_professors',
			'credits'
		];
		const roundedCourses = courses.map((course) => roundFloatsInCourse(course, floats));
		const { error } = await supabase.from('Courses').upsert(roundedCourses);
		console.log('🚀 ~ file: index.js:14 ~ fetchData ~ error:', error);
		const evaluation_narratives = await getEvaluationNarratives();
		const evaluation_narratives_matching_course_id = filterEvaluationsByCourse({
			evaluation_narratives,
			courses
		});
		const { error: error2 } = await supabase
			.from('EvaluationNarratives')
			.upsert(evaluation_narratives_matching_course_id);
		console.log('🚀 ~ file: index.js:19 ~ fetchData ~ error2:', error2);
	} catch (err) {
		console.error(err);
	}
};

function filterEvaluationsByCourse({ evaluation_narratives, courses }) {
	const courseIds = new Set(courses.map((course) => course.course_id));
	return evaluation_narratives.filter((evaluation) => courseIds.has(evaluation.course_id));
}

fetchData();

async function getCourses() {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Cookie: PUBLIC_COURSETABLE_COOKIE
		},
		body: JSON.stringify({
			query: `query {
	computed_listing_info(distinct_on: same_course_id) {
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
	}`,
			variables: {}
		})
	};
	try {
		const response = await fetch('https://api.coursetable.com/ferry/v1/graphql', options);
		const {
			data: { computed_listing_info: courses }
		} = await response.json();
		return courses;
	} catch (err) {
		console.error(err);
	}
}

async function getEvaluationNarratives() {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Cookie: PUBLIC_COURSETABLE_COOKIE
		},
		body: JSON.stringify({
			query: `query {
	evaluation_narratives {
		id
		course_id
		comment
		comment_compound
	}
}`,
			variables: {}
		})
	};
	try {
		const response = await fetch('https://api.coursetable.com/ferry/v1/graphql', options);
		const {
			data: { evaluation_narratives }
		} = await response.json();
		return evaluation_narratives;
	} catch (err) {
		console.error(err);
	}
}
