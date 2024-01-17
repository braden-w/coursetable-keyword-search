import { courses } from '$lib/server/schema';

export const load = async ({ locals: { db } }) => {
	const allColumnNames = Object.keys(courses);
	// z.union of all column names
	const allCourses = await db.query.courses.findMany({
		limit: 100,
		offset: 100,
		columns: {
			course_id: true,
			season_code: true,
			title: true,
			short_title: true,
			description: true,
			requirements: true,
			locations_summary: true,
			times_long_summary: true,
			times_summary: true,
			times_by_day: true,
			skills: true,
			areas: true,
			credits: true,
			syllabus_url: true,
			course_home_url: true,
			regnotes: true,
			extra_info: true,
			rp_attr: true,
			classnotes: true,
			final_exam: true,
			fysem: true,
			sysem: true,
			colsem: true,
			average_rating: true,
			average_rating_n: true,
			average_workload: true,
			average_workload_n: true,
			average_rating_same_professors: true,
			average_rating_same_professors_n: true,
			average_workload_same_professors: true,
			average_workload_same_professors_n: true,
			last_offered_course_id: true,
			same_course_id: true,
			same_course_and_profs_id: true,
			last_enrollment_course_id: true,
			last_enrollment: true,
			last_enrollment_season_code: true,
			average_comment_neg: true,
			average_comment_neg_n: true,
			average_comment_neu: true,
			average_comment_neu_n: true,
			average_comment_pos: true,
			average_comment_pos_n: true,
			average_comment_compound: true,
			average_comment_compound_n: true,
		},

		// with: {
		// 	evaluationNarratives: {
		// 		limit: 100,
		// 	},
		// 	evaluationRatings: { limit: 100 },
		// 	// evaluationStatistics: true,
		// },
		orderBy: (courses, { desc }) => [desc(courses.average_comment_compound)],
		where: (courses, { eq }) => eq(courses.season_code, '202401'),
	});
	return { allColumnNames, allCourses };
};
