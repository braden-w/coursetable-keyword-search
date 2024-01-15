import { COURSETABLE_COOKIE } from '$env/static/private';
import { error } from '@sveltejs/kit';

const queries = {
	Seasons: `query {
    seasons {
      season_code
      term
      year
    }
  }`,
	Courses: `query {
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
	Listings: `query {
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
	Discussions: `query {
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
	Flags: `query {
		flags {
			flag_id
			flag_text
		}
	}`,
	DemandStatistics: `query {
		demand_statistics {
			course_id
			latest_demand
			latest_demand_date
			demand
		}
	}`,
	Professors: `query {
		professors {
			professor_id
			name
			email
			average_rating
			average_rating_n
		}
	}`,
	EvaluationStatistics: `query {
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
	EvaluationQuestions: `query {
		evaluation_questions {
			question_code
			is_narrative
			question_text
			options
			tag
		}
	}`,
	EvaluationNarratives: `query {
		evaluation_narratives {
			id
			course_id
			question_code
			COMMENT
			comment_neg
			comment_neu
			comment_pos
			comment_compound
		}
	}`,
	EvaluationRatings: `query {
		evaluation_ratings {
			id
			course_id
			question_code
			rating
		}
	}`,
	CourseProfessor: `query {
		course_professors {
			course_id
			professor_id
		}
	}`,
	CourseDiscussion: `query {
		course_discussions {
			course_id
			discussion_id
		}
	}`,
	CourseFlag: `query {
		course_flags {
			course_id
			flag_id
		}
	}`,
	FastTextSimilars: `query {
		fasttext_similars {
			source
			target
			rank
		}
	}`,
	TFIDFSimilars: `query {
		tfidf_similars {
			source
			target
			rank
		}
	}`
} as const;

export const GET = async () => {
	const fetchGraphQL = (query: string) =>
		fetch('https://api.coursetable.com/ferry/v1/graphql', {
			method: 'POST',
			headers: {
				cookie: COURSETABLE_COOKIE,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query })
		});

	const res = await fetchGraphQL(queries['Seasons']);
	if (!res.ok) {
		return error(res.status, res.statusText);
	}
	const data = await res.json();
	console.log(data);
	return new Response();
};
