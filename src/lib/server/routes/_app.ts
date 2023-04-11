import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
	greeting: publicProcedure
		.input(
			z.object({
				name: z.string().optional()
			})
		)
		.query(({ input }) => {
			return `Hello, ${input.name ?? 'world'}!`;
		})
});

export type AppRouter = typeof appRouter;
