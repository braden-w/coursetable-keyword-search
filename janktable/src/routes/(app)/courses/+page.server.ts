import { trpc } from '$lib/trpc';

export const load = async (event) => {
	return {
		courses: trpc.allCourses.ssr(event)
	};
};
