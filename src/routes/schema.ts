import { allCourseColumnNames } from '$lib/all-course-column-names';
import { z } from 'zod';

export const orderByConfigSchema = z
	.object({ column: z.enum(allCourseColumnNames), direction: z.enum(['asc', 'desc']) })
	.array();

export type OrderByConfig = z.infer<typeof orderByConfigSchema>;
