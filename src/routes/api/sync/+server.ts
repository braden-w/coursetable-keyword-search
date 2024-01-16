import { COURSETABLE_COOKIE } from '$env/static/private';
import {
	insertCourseDiscussionSchema,
	insertCourseFlagSchema,
	insertCourseProfessorSchema,
	insertCourseSchema,
	insertDemandStatisticsSchema,
	insertDiscussionSchema,
	insertEvaluationNarrativeSchema,
	insertEvaluationQuestionSchema,
	insertEvaluationRatingSchema,
	insertEvaluationStatisticsSchema,
	insertFasttextSimilarSchema,
	insertFlagSchema,
	insertListingSchema,
	insertProfessorSchema,
	insertSeasonSchema,
	insertTfidfSimilarSchema,
} from '$lib/server/db/schema';
import { error, json } from '@sveltejs/kit';
import { z } from 'zod';

const TABLES = [
	{
		name: 'seasons',
		query: `query {
			seasons {
				season_code
				term
				year
			}
		}`,
		schema: z.object({ seasons: insertSeasonSchema.array() }),
	},
	{
		name: 'courses',
		query: `query {
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
		schema: z.object({ seasons: insertCourseSchema.array() }),
	},
	{
		name: 'listings',
		query: `query {
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
		schema: z.object({ seasons: insertListingSchema.array() }),
	},
	{
		name: 'discussions',
		query: `query {
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
		schema: z.object({ seasons: insertDiscussionSchema.array() }),
	},
	{
		name: 'flags',
		query: `query {
			flags {
				flag_id
				flag_text
			}
		}`,
		schema: z.object({ seasons: insertFlagSchema.array() }),
	},
	{
		name: 'demand_statistics',
		query: `query {
			demand_statistics {
				course_id
				latest_demand
				latest_demand_date
				demand
			}
		}`,
		schema: z.object({ seasons: insertDemandStatisticsSchema.array() }),
	},
	{
		name: 'professors',
		query: `query {
			professors {
				professor_id
				name
				email
				average_rating
				average_rating_n
			}
		}`,
		schema: insertProfessorSchema,
	},
	{
		name: 'evaluation_statistics',
		query: `query {
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
		schema: z.object({ seasons: insertEvaluationStatisticsSchema.array() }),
	},
	{
		name: 'evaluation_questions',
		query: `query {
			evaluation_questions {
				question_code
				is_narrative
				question_text
				options
				tag
			}
		}`,
		schema: z.object({ seasons: insertEvaluationQuestionSchema.array() }),
	},
	{
		name: 'evaluation_narratives',
		query: `query {
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
		schema: z.object({ seasons: insertEvaluationNarrativeSchema.array() }),
	},
	{
		name: 'evaluation_ratings',
		query: `query {
			evaluation_ratings {
				id
				course_id
				question_code
				rating
			}
		}`,
		schema: z.object({ seasons: insertEvaluationRatingSchema.array() }),
	},
	{
		name: 'course_professors',
		query: `query {
			course_professors {
				course_id
				professor_id
			}
		}`,
		schema: z.object({ seasons: insertCourseProfessorSchema.array() }),
	},
	{
		name: 'course_discussions',
		query: `query {
			course_discussions {
				course_id
				discussion_id
			}
		}`,
		schema: z.object({ seasons: insertCourseDiscussionSchema.array() }),
	},
	{
		name: 'course_flags',
		query: `query {
			course_flags {
				course_id
				flag_id
			}
		}`,
		schema: z.object({ seasons: insertCourseFlagSchema.array() }),
	},
	{
		name: 'fasttext_similars',
		query: `query {
			fasttext_similars {
				source
				target
				rank
			}
		}`,
		schema: z.object({ seasons: insertFasttextSimilarSchema.array() }),
	},
	{
		name: 'tfidf_similars',
		query: `query {
			tfidf_similars {
				source
				target
				rank
			}
		}`,
		schema: z.object({ seasons: insertTfidfSimilarSchema.array() }),
	},
] as const;

type TableName = (typeof TABLES)[number]['name'];

async function fetchGraphQL<T>({ query, schema }: { query: string; schema: z.ZodSchema<T> }) {
	const response = await fetch('https://api.coursetable.com/ferry/v1/graphql', {
		method: 'POST',
		headers: {
			cookie: COURSETABLE_COOKIE,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query }),
	});
	const json = await response.json();
	// const parsedResponse = json;
	const parsedResponseResult = z.object({ data: schema }).safeParse(json);
	if (!parsedResponseResult.success) {
		console.error(json, JSON.stringify(parsedResponseResult.error));
		return;
	}
	const parsedResponse = parsedResponseResult.data;
	return parsedResponse.data;
}

const getTableLength = async (tableName: TableName): Promise<number> => {
	const tableNameAggregate = `${tableName}_aggregate` as const;
	const tableCountQuery = `query {
		${tableNameAggregate} {
			aggregate {
				count
			}
		}
	}`;
	const data = await fetchGraphQL({
		query: tableCountQuery,
		schema: z.object({
			[tableNameAggregate]: z.object({
				aggregate: z.object({
					count: z.number(),
				}),
			}),
		}),
	});
	return data[tableNameAggregate].aggregate.count;
};

export const GET = async () => {
	const tablesWithLength = await Promise.all(
		TABLES.map(async (table) => ({ ...table, length: await getTableLength(table.name) })),
	);

	// Split tablesWithLength into two arrays: one with tables that have a length over 1000, and one with tables that don't
	const [tablesOver1000, tablesUnder1000] = tablesWithLength.reduce<
		[typeof tablesWithLength, typeof tablesWithLength]
	>(
		([over1000, under1000], table) => {
			if (table.length > 1000) {
				over1000.push(table);
			} else {
				under1000.push(table);
			}
			return [over1000, under1000];
		},
		[[], []],
	);

	const data = await Promise.all(
		tablesUnder1000.map(({ query, schema }) => fetchGraphQL({ query, schema })),
	);
	// const errors = responses.reduce<{ status: number; statusText: string }[]>((errors, res) => {
	// 	if (!res.ok) {
	// 		errors.push({ status: res.status, statusText: res.statusText });
	// 	}
	// 	return errors;
	// }, []);
	// if (errors.length !== 0) {
	// 	return error(500, JSON.stringify(errors));
	// }
	// const data = await Promise.all(responses.map((res) => res.json()));
	return json(data);
};
