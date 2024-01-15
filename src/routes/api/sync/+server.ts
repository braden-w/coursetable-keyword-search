import { COURSETABLE_COOKIE } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

const TABLES = [
	'seasons',
	'courses',
	'listings',
	'discussions',
	'flags',
	'demand_statistics',
	'professors',
	'evaluation_statistics',
	'evaluation_questions',
	'evaluation_narratives',
	'evaluation_ratings',
	'course_professors',
	'course_discussions',
	'course_flags',
	'fasttext_similars',
	'tfidf_similars'
] as const;

const queries: Record<(typeof TABLES)[number], string> = {
	seasons: `query {
		seasons {
			season_code
			term
			year
		}
	}`,
	courses: `query {
		courses {
			course_id
			season_code
			title
			short_title
			description
			requirements
			locations_summary
			times_long_summary
			times_summary
			times_by_day
			skills
			areas
			credits
			syllabus_url
			course_home_url
			regnotes
			extra_info
			rp_attr
			classnotes
			final_exam
			fysem
			sysem
			colsem
			average_rating
			average_rating_n
			average_workload
			average_workload_n
			average_rating_same_professors
			average_rating_same_professors_n
			average_workload_same_professors
			average_workload_same_professors_n
			last_offered_course_id
			same_course_id
			same_course_and_profs_id
			last_enrollment_course_id
			last_enrollment
			last_enrollment_season_code
		}
	}`,
	listings: `query {
				listings {
						listing_id
						course_id
						school
						subject
						number
						course_code
						section
						season_code
						crn
				}
		}`,
	discussions: `query {
		discussions {
			discussion_id
			subject
			number
			info
			locations_summary
			times_long_summary
			times_summary
			times_by_day
		}
	}`,
	flags: `query {
		flags {
			flag_id
			flag_text
		}
	}`,
	demand_statistics: `query {
		demand_statistics {
			course_id
			latest_demand
			latest_demand_date
			demand
		}
	}`,
	professors: `query {
		professors {
			professor_id
			name
			email
			average_rating
			average_rating_n
		}
	}`,
	evaluation_statistics: `query {
		evaluation_statistics {
			course_id
			enrollment
			enrolled
			responses
			declined
			no_response
			extras
			avg_rating
			avg_workload
		}
	}`,
	evaluation_questions: `query {
		evaluation_questions {
			question_code
			is_narrative
			question_text
			options
			tag
		}
	}`,
	evaluation_narratives: `query {
		evaluation_narratives {
			id
			course_id
			question_code
			comment
			comment_neg
			comment_neu
			comment_pos
			comment_compound
		}
	}`,
	evaluation_ratings: `query {
		evaluation_ratings {
			id
			course_id
			question_code
			rating
		}
	}`,
	course_professors: `query {
		course_professors {
			course_id
			professor_id
		}
	}`,
	course_discussions: `query {
		course_discussions {
			course_id
			discussion_id
		}
	}`,
	course_flags: `query {
		course_flags {
			course_id
			flag_id
		}
	}`,
	fasttext_similars: `query {
		fasttext_similars {
			source
			target
			rank
		}
	}`,
	tfidf_similars: `query {
		tfidf_similars {
			source
			target
			rank
		}
	}`
} as const;

const fetchGraphQL = (query: string) =>
	fetch('https://api.coursetable.com/ferry/v1/graphql', {
		method: 'POST',
		headers: {
			cookie: COURSETABLE_COOKIE,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query })
	});

export const GET = async () => {
	const responses = await Promise.all(Object.values(queries).map(fetchGraphQL));
	// Map over the responses, and for each one, if not okay, add it to the errors array
	const errors = responses.reduce<{ status: number; statusText: string }[]>((errors, res) => {
		if (!res.ok) {
			errors.push({ status: res.status, statusText: res.statusText });
		}
		return errors;
	}, []);
	if (errors.length !== 0) {
		return error(500, JSON.stringify(errors));
	}
	const data = responses.map((res) => res.json());
	console.log(data);
	return json(data);
};
