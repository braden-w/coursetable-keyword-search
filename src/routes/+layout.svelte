<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.postcss';
</script>

<!-- TODO: Update Head -->
<svelte:head>
	<title>CourseTable Review Search</title>
	<meta name="description" content="Search CourseTable courses by review" />
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<Header />

<main>
	<slot />
</main>
<Footer />
