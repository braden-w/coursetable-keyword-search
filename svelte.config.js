import adapter from '@sveltejs/adapter-auto';
import nodeAdapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

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
		// Default adapter if on Vercel, node adapter if on Heroku Node.js
		adapter: process.env.VERCEL === '1' ? adapter() : nodeAdapter(),
	}
};

export default config;
