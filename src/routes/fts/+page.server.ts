import { allCourseColumnNames } from '$lib/schema';
import { sql } from 'drizzle-orm';
import { z } from 'zod';

const selectedColumnsSchema = z
	.array(z.enum(allCourseColumnNames))
	.transform((value) => [...new Set(value)]);
const DEFAULT_SELECTED_COLUMNS: z.infer<typeof selectedColumnsSchema> = [
	'course_id',
	'title',
	'description',
	'skills',
	'areas',
	'credits',
	'syllabus_url',
	'average_rating',
	'average_workload',
	'average_rating_same_professors',
	'average_workload_same_professors',
	'average_comment_neg',
	'average_comment_neu',
	'average_comment_pos',
	'average_comment_compound',
] as const;

export const load = async ({ url, locals: { db } }) => {
	const queryParams = new URL(url).searchParams;

	// // Pagination parameters
	const limit = Math.max(1, Number(queryParams.get('limit') ?? '10'));
	const offset = Math.max(0, Number(queryParams.get('offset') ?? '0'));

	// // Column toggling
	// const selectedColumnsParam = queryParams.get('selectedColumns');
	// const selectedColumns = selectedColumnsParam
	// 	? selectedColumnsSchema.parse(selectedColumnsParam.split(','))
	// 	: DEFAULT_SELECTED_COLUMNS;
	const selectedColumns = DEFAULT_SELECTED_COLUMNS;

	const query = queryParams.get('q') ?? 'Computer Science';

	// // Extract and parse orderBy parameters
	// const orderByConfigParam = queryParams.get('orderByConfig');
	// const DEFAULT_ORDER_BY_CONFIG: OrderByConfig = [
	// 	{ column: 'average_comment_compound', direction: 'desc' },
	// 	{ column: 'average_rating', direction: 'desc' },
	// ];
	// const orderByConfig: OrderByConfig = (function () {
	// 	if (!orderByConfigParam) return DEFAULT_ORDER_BY_CONFIG;
	// 	try {
	// 		return orderByConfigSchema.parse(JSON.parse(orderByConfigParam));
	// 	} catch (error) {
	// 		return DEFAULT_ORDER_BY_CONFIG;
	// 	}
	// })();

	// z.union of all column names
	const { rows } = await db.run(
		sql`SELECT courses.* FROM courses_fts JOIN courses ON courses_fts.rowid = courses.course_id WHERE courses_fts MATCH ${query} LIMIT ${limit} OFFSET ${offset};`,
	);
	return {
		allCourseColumnNames,
		rows,
		selectedColumns,
		// orderByConfig
	};
};
