import { allCourseColumnNames } from '$lib/server/schema';
import { z } from 'zod';

type Writable<T> = {
	-readonly [K in keyof T]: T[K];
};

export const load = async ({ url, locals: { db } }) => {
	const queryParams = new URL(url).searchParams;

	// Pagination parameters
	const pageSize = Math.max(1, Number(queryParams.get('pageSize') ?? '10'));
	const currentPage = Math.max(1, Number(queryParams.get('currentPage') ?? '1'));
	const offset = (currentPage - 1) * pageSize;

	// Column toggling
	const selectedColumnsSchema = z
		.array(z.enum(allCourseColumnNames))
		.transform((value) => [...new Set(value)].sort());
	const selectedColumnsParam = queryParams.get('selectedColumns');
	const selectedColumns = selectedColumnsParam
		? selectedColumnsSchema.parse(selectedColumnsParam.split(','))
		: allCourseColumnNames;

	// Construct dynamic columns selection
	const dynamicColumns = allCourseColumnNames.reduce<
		Record<Writable<(typeof allCourseColumnNames)[number]>, boolean>
	>((acc, columnName) => {
		if (selectedColumns.includes(columnName)) acc[columnName] = true;
		else acc[columnName] = false;
		return acc;
	}, {});

	// z.union of all column names
	const rows = await db.query.courses.findMany({
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
	return { allCourseColumnNames, selectedColumns, rows };
};
