<script lang="ts">
	import LoadingSpinner from './LoadingSpinner.svelte';

	import ResultItem from './ResultItem.svelte';
	import { BookOpen, Funnel, MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { SearchResponse } from '$lib/types/SearchResponse';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	let keyword = data.keyword ?? '';
	let showFilters = false;
	let courseKeyword = data.course_keyword ?? '';
	let loading = false;

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			goto(`/search?${new URLSearchParams({ keyword, course_keyword: courseKeyword })}`);
			runQuery();
		}
	};

	let courses: SearchResponse['data']['computed_listing_info_aggregate']['nodes'] = [];

	$: coursesSortedByCount = courses.sort(
		(a, b) =>
			b.course.evaluation_narratives_aggregate_filtered.aggregate.count -
			a.course.evaluation_narratives_aggregate_filtered.aggregate.count
	);

	const runQuery = async () => {
		loading = true;
		// Send api request to search passing {keyword: keyword, courseKeyword: courseKeyword}
		const response = await fetch(
			'/api/search?' +
				new URLSearchParams({
					keyword: keyword,
					course_keyword: courseKeyword
				})
		);
		const data = (await response.json()) as SearchResponse;
		courses = data.data.computed_listing_info_aggregate.nodes;
		loading = false;
	};
	onMount(runQuery);
</script>

<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
	<h2 class="mb-2 text-4xl font-extrabold md:text-6xl">Yale Course Keyword Search</h2>
	<h3 class="mb-4 text-3xl font-bold">
		A search box that allows you to search CourseTable reviews by keyword
	</h3>
	<div class="flex w-full my-2">
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
		<div class="w-full my-2">
			<label for="search" class="sr-only">Search</label>
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
					bind:value={courseKeyword}
					on:keydown={onKeydown}
				/>
			</div>
		</div>
	{/if}
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
			<p class="text-center text-gray-500">No results yet <LoadingSpinner { loading } /></p>
		</div>
	{/if}
</div>
