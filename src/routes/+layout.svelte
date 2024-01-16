<script lang="ts">
	import Header from './header.svelte';
	import '../app.pcss';

	export let data;
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
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PEGFGBNW6V"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-PEGFGBNW6V');
	</script>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
</div>
