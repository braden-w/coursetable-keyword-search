import { allCourseColumnNames } from '$lib/schema';
import {
	DEFAULT_ORDER_BY_CONFIG,
	DEFAULT_SELECTED_COLUMNS,
	orderByConfigSchema,
	selectedColumnsSchema,
} from '$lib/search-config';
import { sql } from 'drizzle-orm';

export const load = async ({ url, locals: { db } }) => {
	const queryParams = new URL(url).searchParams;

	const limit = Math.max(1, Number(queryParams.get('limit') ?? '10'));
	const offset = Math.max(0, Number(queryParams.get('offset') ?? '0'));

	const selectedColumnsParam = queryParams.get('columns');
	const selectedColumns = selectedColumnsParam
		? selectedColumnsSchema.parse(selectedColumnsParam.split(','))
		: DEFAULT_SELECTED_COLUMNS;

	const orderByConfigParam = queryParams.get('orderByConfig');
	const orderByConfig = (function () {
		if (!orderByConfigParam) return DEFAULT_ORDER_BY_CONFIG;
		try {
			return orderByConfigSchema.parse(JSON.parse(orderByConfigParam));
		} catch (error) {
			return DEFAULT_ORDER_BY_CONFIG;
		}
	})();

	const query = queryParams.get('q');

	if (!query) {
		return {
			allCourseColumnNames,
			rows: [],
			selectedColumns,
			orderByConfig,
		};
	}

	const [
		{
			rows: [{ 'COUNT (*)': count }],
		},
		{ rows },
	] = await db.batch([
		db.run(sql`SELECT COUNT(*) FROM courses_fts WHERE courses_fts MATCH ${query};`),
		db.run(
			sql`SELECT ${sql.raw(selectedColumns.map((column) => `courses.${column}`).join(', '))} FROM courses_fts JOIN courses ON courses_fts.rowid = courses.course_id WHERE courses_fts MATCH ${query} ORDER BY ${sql.raw(
				orderByConfig
					.map(({ column, direction }) => `${column} ${direction === 'asc' ? 'ASC' : 'DESC'}`)
					.join(', '),
			)} LIMIT ${limit} OFFSET ${offset};`,
		),
	]);
	console.log('🚀 ~ load ~ count:', count);
	return {
		query,
		allCourseColumnNames,
		rows,
		selectedColumns,
		orderByConfig,
		count,
		perPage: limit,
	};
};
