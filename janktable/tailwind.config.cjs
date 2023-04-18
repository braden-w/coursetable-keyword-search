const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		darkTheme: 'yale',
		themes: [
			{
				yale: {
					primary: '#00356b',
					'primary-content': '#ffffff',
					secondary: '#1C2D3F',
					'secondary-content': '#ffffff',
					accent: '#0077B6',
					'accent-content': '#ffffff',
					neutral: '#1A1E25',
					'neutral-focus': '#101317',
					'neutral-content': '#A6ADBB',
					'base-100': '#2C3548',
					'base-200': '#1E293B',
					'base-300': '#20252E',
					'base-content': '#A6ADBB'
				}
			},
			'dark',
			'light',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter'
		]
	},
	plugins: [require('@tailwindcss/forms'), require('daisyui')]
};

module.exports = config;
