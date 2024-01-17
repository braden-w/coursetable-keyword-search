import { allCourseColumnNames, type CourseColumnName } from '$lib/server/schema';
import { z } from 'zod';

export const load = async ({ url, locals: { db } }) => {
	const queryParams = new URL(url).searchParams;

	// Pagination parameters
	const pageSize = parseInt(queryParams.get('pageSize') ?? '10');
	const currentPage = parseInt(queryParams.get('currentPage') ?? '1');

	// Pagination calculation
	const offset = (currentPage - 1) * pageSize;

	// Column toggling
	const selectedColumnsSchema = z.array(z.enum(allCourseColumnNames));
	// .transform((value) => [...new Set(value)].sort());
	const selectedColumnsParam = queryParams.get('selectedColumns');
	const processSelectedColumnsParam = (selectedColumnsParam: string | null) => {
		if (selectedColumnsParam === null) return allCourseColumnNames;
		// Default to all columns if none specified
		return selectedColumnsSchema.parse(selectedColumnsParam.split(','));
	};
	const selectedColumns = processSelectedColumnsParam(selectedColumnsParam);

	// Construct dynamic columns selection
	const dynamicColumns = allCourseColumnNames.reduce<
		Record<z.infer<typeof selectedColumnsSchema>[number], boolean>
	>((acc, columnName) => {
		if (selectedColumns.includes(columnName)) acc[columnName] = true;
		else acc[columnName] = false;
		return acc;
	}, {});

	// z.union of all column names
	const allCourses = await db.query.courses.findMany({
		columns: dynamicColumns,
		limit: pageSize,
		offset,
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
	return { allCourseColumnNames, allCourses };
};
