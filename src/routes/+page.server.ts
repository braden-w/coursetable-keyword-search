import { allCourseColumnNames } from '$lib/schema';
import {
	DEFAULT_SELECTED_COLUMNS,
	orderByConfigSchema,
	selectedColumnsSchema,
} from '$lib/search-config';

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
	const selectedColumnsParam = queryParams.get('selectedColumns');
	const selectedColumns = selectedColumnsParam
		? selectedColumnsSchema.parse(selectedColumnsParam.split(','))
		: DEFAULT_SELECTED_COLUMNS;

	// Construct dynamic columns selection
	const dynamicColumns = allCourseColumnNames.reduce<
		Record<Writable<(typeof allCourseColumnNames)[number]>, boolean>
	>((acc, columnName) => {
		if (selectedColumns.includes(columnName)) acc[columnName] = true;
		else acc[columnName] = false;
		return acc;
	}, {});

	// Extract and parse orderBy parameters
	const orderByConfigParam = queryParams.get('orderByConfig');
	const DEFAULT_ORDER_BY_CONFIG: OrderByConfig = [
		{ column: 'average_comment_compound', direction: 'desc' },
		{ column: 'average_rating', direction: 'desc' },
	];
	const orderByConfig = (function () {
		if (!orderByConfigParam) return DEFAULT_ORDER_BY_CONFIG;
		try {
			return orderByConfigSchema.parse(JSON.parse(orderByConfigParam));
		} catch (error) {
			return DEFAULT_ORDER_BY_CONFIG;
		}
	})();

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
		orderBy: (courses, { asc, desc }) =>
			orderByConfig.map(({ column, direction }) =>
				direction === 'asc' ? asc(courses[column]) : desc(courses[column]),
			),
		where: (courses, { eq }) => eq(courses.season_code, '202401'),
	});
	return { allCourseColumnNames, selectedColumns, rows, orderByConfig };
};
