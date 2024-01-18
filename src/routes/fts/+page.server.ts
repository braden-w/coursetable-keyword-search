import { allCourseColumnNames } from '$lib/schema';
import {
	DEFAULT_SELECTED_COLUMNS,
	orderByConfigSchema,
	selectedColumnsSchema,
	type OrderByConfig,
	DEFAULT_ORDER_BY_CONFIG,
} from '$lib/search-config';
import { sql } from 'drizzle-orm';

export const load = async ({ url, locals: { db } }) => {
	const queryParams = new URL(url).searchParams;

	// // Pagination parameters
	const limit = Math.max(1, Number(queryParams.get('limit') ?? '10'));
	const offset = Math.max(0, Number(queryParams.get('offset') ?? '0'));

	// // Column toggling
	const selectedColumnsParam = queryParams.get('columns');
	const selectedColumns = selectedColumnsParam
		? selectedColumnsSchema.parse(selectedColumnsParam.split(','))
		: DEFAULT_SELECTED_COLUMNS;

	const query = queryParams.get('q') ?? 'Computer Science';

	// // Extract and parse orderBy parameters
	const orderByConfigParam = queryParams.get('orderByConfig');
	const orderByConfig: OrderByConfig = (function () {
		if (!orderByConfigParam) return DEFAULT_ORDER_BY_CONFIG;
		try {
			return orderByConfigSchema.parse(JSON.parse(orderByConfigParam));
		} catch (error) {
			return DEFAULT_ORDER_BY_CONFIG;
		}
	})();

	// z.union of all column names
	const { rows } = await db.run(
		sql`SELECT ${sql.raw(selectedColumns.map((column) => `courses.${column}`).join(', '))} FROM courses_fts JOIN courses ON courses_fts.rowid = courses.course_id WHERE courses_fts MATCH ${query} LIMIT ${limit} OFFSET ${offset};`,
	);
	return {
		allCourseColumnNames,
		rows,
		selectedColumns,
		// orderByConfig
	};
};
