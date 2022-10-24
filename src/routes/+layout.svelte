<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.postcss';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	const queryClient = new QueryClient();
</script>

<!-- TODO: Update Head -->
<svelte:head>
	<title>Yale MealMatch</title>
	<meta name="description" content="Find Yalies to grab a meal with!" />
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<Header />

<main>
	<QueryClientProvider client={queryClient}>
		<slot />
	</QueryClientProvider>
</main>
<Footer />
