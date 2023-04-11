import { PUBLIC_COURSETABLE_COOKIE } from '$env/static/public';
import { REQUEST_LIMIT } from '$lib/constants';
import type { Params } from '$lib/types/Query';

export const generateOptions = ({ keyword, course_keyword, areas_skills_keyword }: Params) => ({
	method: 'POST',
	headers: {
		Cookie: PUBLIC_COURSETABLE_COOKIE ?? '',
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(generateGraphQL({ keyword, course_keyword, areas_skills_keyword }))
});

// All fields:
// 			all_course_codes
// 			areas
// 			average_gut_rating
// 			average_professor
// 			average_rating
// 			average_workload
// 			average_rating_same_professors
// 			average_workload_same_professors
// 			classnotes
// 			course_code
// 			credits
// 			description
// 			enrolled
// 			extra_info
// 			final_exam
// 			flag_info
// 			fysem
// 			last_enrollment
// 			last_enrollment_same_professors
// 			listing_id
// 			locations_summary
// 			professor_ids
// 			professor_names
// 			regnotes
// 			requirements
// 			rp_attr
// 			same_course_id
// 			same_course_and_profs_id
// 			last_offered_course_id
// 			school
// 			season_code
// 			section
// 			skills
// 			subject
// 			syllabus_url
// 			times_by_day
// 			times_summary
// 			title
const generateQuery = (includeFilterAreas: boolean) => `query searchCoursesByKeyword(
	$keyword: String!
	$course_keyword: String!
	${includeFilterAreas ? '$areas_skills_keyword: jsonb!' : ''}
) {
	computed_listing_info_aggregate(
		where: {
			_and: [
				{ course_code: { _ilike: $course_keyword } }
				{ course: { evaluation_narratives: { comment: { _ilike: $keyword } } } }
				${
					includeFilterAreas
						? `{
					_or: [
						{ areas: { _contains: $areas_skills_keyword } }
						{ skills: { _contains: $areas_skills_keyword } }
					]
				}`
						: ''
				}
			]
		}
		order_by: { course: { evaluation_narratives_aggregate: { count: desc } } }
		limit: ${REQUEST_LIMIT}
	) {
		aggregate {
			count
		}
		nodes {
			all_course_codes
			areas
			course_code
			credits
			description
			listing_id
			same_course_id
			season_code
			skills
			title
			course {
				evaluation_narratives_aggregate_filtered: evaluation_narratives_aggregate(
					where: { comment: { _ilike: $keyword } }
					order_by: { comment_compound: desc }
				) {
					aggregate {
						count
						avg {
							comment_compound
						}
					}
					nodes {
						comment
						comment_compound
					}
				}
				evaluation_narratives_aggregate {
					aggregate {
						count
						avg {
							comment_compound
						}
					}
				}
			}
		}
	}
}`;

const generateGraphQL = ({
	keyword,
	course_keyword,
	areas_skills_keyword
}: {
	keyword: string;
	course_keyword: string;
	areas_skills_keyword: string;
}) => {
	// console.log('🚀 ~ file: graphql.ts ~ line 169 ~ keyword', keyword);
	// console.log('🚀 ~ file: graphql.ts ~ line 169 ~ course_keyword', course_keyword);
	// console.log('🚀 ~ file: graphql.ts ~ line 169 ~ areas_skills_keyword', areas_skills_keyword);
	const includeFilterAreas = areas_skills_keyword !== '';
	return {
		query: generateQuery(includeFilterAreas),
		variables: {
			keyword,
			course_keyword,
			...(includeFilterAreas && { areas_skills_keyword })
		}
	};
};
