<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.postcss';
	import { inject } from '@vercel/analytics';
	inject()
</script>

<!-- TODO: Update Head -->
<svelte:head>
	<title>JankTable</title>
	<meta
		name="description"
		content="Narrow down your Yale course options. Search CourseTable reviews by keyword."
	/>
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<Header />

<main>
	<slot />
</main>
<Footer />
