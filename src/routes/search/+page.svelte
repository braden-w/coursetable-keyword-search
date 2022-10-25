<script lang="ts">
	import { page } from '$app/stores';
	import LoadingSpinner from './LoadingSpinner.svelte';

	import ResultItem from './ResultItem.svelte';
	import { AcademicCap, BookOpen, Funnel, MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { SearchResponse } from '$lib/types/SearchResponse';
	import { goto } from '$app/navigation';
	import { queries } from '$lib/suggested queries/queries';
	import QueryButton from '$lib/suggested queries/QueryButton.svelte';
	import { onMount } from 'svelte';

	let keyword = $page.url.searchParams.get('keyword') ?? '';
	let course_keyword = $page.url.searchParams.get('course_keyword') ?? '';
	let areas_skills_keyword = $page.url.searchParams.get('areas_skills_keyword') ?? '';

	let showFilters = true;
	let loading = false;

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			updateRoute();
			runQuery();
		}
	};

	const updateRoute = () => {
		goto(
			`?${new URLSearchParams({
				keyword: keyword,
				course_keyword: course_keyword,
				areas_skills_keyword: areas_skills_keyword
			})}`
		);
	};

	const onRouteChange = (event: {
		detail: { keyword: string; course_keyword: string; areas_skills_keyword: string };
	}) => {
		({
			detail: { keyword, course_keyword, areas_skills_keyword }
		} = event);
		updateRoute();
		runQuery();
	};

	let courses: SearchResponse['data']['computed_listing_info_aggregate']['nodes'] = [];

	$: coursesSortedByCount = courses.sort(
		(a, b) =>
			b.course.evaluation_narratives_aggregate_filtered.aggregate.count -
			a.course.evaluation_narratives_aggregate_filtered.aggregate.count
	);

	const getCourses = async () => {
		if (keyword === '') return;
		// Send api request to search passing {keyword: keyword, course_keyword: course_keyword}
		const response = await fetch(
			'/api/search?' +
				new URLSearchParams({
					keyword: keyword,
					course_keyword: course_keyword,
					areas_skills_keyword: areas_skills_keyword
				})
		);
		const data = (await response.json()) as SearchResponse;
		return data.data.computed_listing_info_aggregate.nodes;
	};

	const runQuery = async () => {
		loading = true;
		courses = await getCourses() ?? [];
		loading = false;
	};
	onMount(runQuery);
</script>

<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
	<h2 class="mb-2 text-4xl font-extrabold md:text-6xl">Yale Course Keyword Search</h2>
	<h3 class="mb-4 text-3xl font-bold">
		A search box that allows you to search CourseTable reviews by keyword
	</h3>
	<div class="my-2 flex w-full">
		<label for="search" class="sr-only">Search</label>
		<div class="relative flex-1">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<Icon src={MagnifyingGlass} class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<input
				id="search"
				name="search"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
				placeholder="Search by review keyword...(use % to match anything)"
				type="search"
				bind:value={keyword}
				on:keydown={onKeydown}
			/>
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
				<LoadingSpinner {loading} />
			</div>
		</div>
		<label for="filters" class="sr-only">Show filters</label>
		<span class="sr-only">Loading...</span>
		<button
			id="filters"
			type="button"
			name="filters"
			class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
			on:click={() => (showFilters = !showFilters)}
		>
			<Icon src={Funnel} class="h-5 w-5 text-gray-400" aria-hidden="true" />
			<span class="sr-only">Search</span>
		</button>
	</div>
	{#if showFilters}
		<div class="my-2 w-full">
			<label for="search" class="sr-only">Course Filter</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Icon src={BookOpen} class="h-5 w-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					id="search"
					name="search"
					class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
					placeholder="Filter by course code ...(ECON, PLSC, HIST, etc.)"
					type="search"
					bind:value={course_keyword}
					on:keydown={onKeydown}
				/>
			</div>
		</div>

		<div class="my-2 w-full">
			<label for="search" class="sr-only">Areas Filter</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Icon src={AcademicCap} class="h-5 w-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					id="search"
					name="search"
					class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
					placeholder="Filter by areas ...(Hu, Qr, So, etc., case sensitive)"
					type="search"
					bind:value={areas_skills_keyword}
					on:keydown={onKeydown}
				/>
			</div>
		</div>
	{/if}

	<span class="mb-2 flex gap-2 overflow-x-auto rounded-md shadow-sm">
		{#each queries as query}
			<QueryButton {...query} on:click={onRouteChange} />
		{/each}
	</span>

	{#if coursesSortedByCount.length !== 0}
		<div class="overflow-hidden bg-white shadow sm:rounded-md">
			<ul class="divide-y divide-gray-200">
				{#each coursesSortedByCount as course}
					<ResultItem {course} />
				{/each}
			</ul>
		</div>
	{:else}
		<div class="mt-4">
			<p class="text-center text-gray-500">No results yet <LoadingSpinner {loading} /></p>
		</div>
	{/if}
</div>
