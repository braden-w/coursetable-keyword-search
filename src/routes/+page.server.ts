export const load = async ({ locals: { db } }) => {
	const allCourses = await db.query.courses.findMany({
		limit: 100,
		with: {
			evaluationNarratives: true,
			evaluationRatings: true,
			evaluationStatistics: true,
		},
		orderBy: (courses, { desc }) => [desc(courses.average_comment_compound)],
	});
	return { allCourses };
};
