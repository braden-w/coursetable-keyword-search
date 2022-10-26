<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import QueriesRow from '$lib/suggested queries/QueriesRow.svelte';
	import type { Query } from '$lib/types/Query';
	import type { SearchResponse } from '$lib/types/SearchResponse';
	import { AcademicCap, BookOpen, Funnel, MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import LoadingSpinner from './LoadingSpinner.svelte';
	import ResultItem from './ResultItem.svelte';

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

	const onRouteChange = (event: { detail: Query }) => {
		keyword = event.detail.keyword ?? '';
		course_keyword = event.detail.course_keyword ?? '';
		areas_skills_keyword = event.detail.areas_skills_keyword ?? '';
		updateRoute();
		runQuery();
	};

	let courses: SearchResponse['data']['computed_listing_info_aggregate']['nodes'] = [];

	export let data: PageData;
	const { seasonCourseIds } = data;
	$: coursesSortedByCount = courses
		.filter((course) => course.same_course_id in seasonCourseIds)
		.sort(
			(a, b) =>
				b.course.evaluation_narratives_aggregate_filtered.aggregate.count -
				a.course.evaluation_narratives_aggregate_filtered.aggregate.count
		);

	const getCourses = async () => {
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
		courses = [];
		courses = await getCourses();
		loading = false;
	};

	onMount(() => {
		runQuery();
	});
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="Search Yale course reviews." />
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
	<h3 class="mb-4 text-3xl font-bold md:text-3xl">
		Search CourseTable reviews by keyword
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

	<QueriesRow on:click={onRouteChange} />

	{#if coursesSortedByCount.length !== 0}
		<div class="my-4">
			<p class="text-center text-gray-500">{coursesSortedByCount.length} results</p>
		</div>
		<div class="overflow-hidden bg-white shadow sm:rounded-md">
			<ul class="divide-y divide-gray-200">
				{#each coursesSortedByCount as course (course.listing_id)}
					<ResultItem {course} {keyword} />
				{/each}
				<!-- <VirtualList items={coursesSortedByCount} height="500px" let:item>
					<ResultItem course={item} />
				</VirtualList> -->
			</ul>
		</div>
	{:else}
		<div class="mt-4">
			<p class="text-center text-gray-500">No results yet <LoadingSpinner {loading} /></p>
		</div>
	{/if}
</div>
