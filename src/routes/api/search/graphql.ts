const query = `query searchCoursesByKeyword($keyword: String!, $course_keyword: String!) {
	computed_listing_info_aggregate(
		where: {
			_and: [
				{ course_code: { _ilike: $course_keyword } }
				{ course: { evaluation_narratives: { comment: { _ilike: $keyword } } } }
			]
		}
		order_by: { course: { evaluation_narratives_aggregate: { count: desc } } }
	) {
		aggregate {
			count
		}
		nodes {
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
			course {
				evaluation_narratives_aggregate(
					where: { comment: { _ilike: $keyword } }
				) {
					aggregate {
						count
					}
					nodes {
						comment
					}
				}
			}
		}
	}
}
`;
export const graphQL = ({
	keyword,
	course_keyword
}: {
	keyword: string;
	course_keyword: string;
}) => ({
	query,
	variables: {
		keyword,
		course_keyword
	}
});
