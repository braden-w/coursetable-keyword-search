import { db } from '$lib/db';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
	allCourses: publicProcedure.query(async () => {
		const courses = await db.selectFrom('Courses').selectAll().execute();
		return courses;
	}),
	allCoursesMatchingSeason: publicProcedure
		.input(z.object({ seasonCode: z.string() }))
		.query(async ({ input: { seasonCode } }) => {
			const courses = await db
				.selectFrom('Courses')
				.selectAll()
				.where('season_code', '=', seasonCode)
				.execute();
			return courses;
		}),
	allCoursesLight: publicProcedure.query(async () => {
		const courses = await db.selectFrom('Courses').select(['all_course_codes']).execute();
		return courses;
	})
});

export type AppRouter = typeof appRouter;
