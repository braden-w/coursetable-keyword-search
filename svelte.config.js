import adapter from '@sveltejs/adapter-auto';
import nodeAdapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { env } from '$env/dynamic/private';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: env.VERCEL === '1' ? adapter() : nodeAdapter(),
	}
};

export default config;
