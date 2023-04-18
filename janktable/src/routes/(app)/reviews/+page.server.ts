import { trpc } from '$lib/trpc';

export const load = async (event) => {
	return {
		reviews: trpc.allReviews.ssr(event)
	};
};
