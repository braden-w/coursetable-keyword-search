import { trpc } from '$lib/trpc';

export const load = async (event) => {
	return {
		trpc: trpc.ssr(event)
	};
};
