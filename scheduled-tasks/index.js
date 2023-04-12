import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const { PUBLIC_COURSETABLE_COOKIE, PUBLIC_SUPABSE_URL, PUBLIC_ANON_KEY } = process.env;

const supabase = createClient(PUBLIC_SUPABSE_URL, PUBLIC_ANON_KEY);

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

const fetchData = async () => {
	try {
		const response = await fetch('https://api.coursetable.com/ferry/v1/graphql', options);
		const {
			data: { computed_listing_info: courses }
		} = await response.json();
		const { error } = await supabase.from('Course').upsert(courses);
	} catch (err) {
		console.error(err);
	}
};

fetchData();
