<script lang="ts">
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import QueriesRow from '$lib/suggested queries/QueriesRow.svelte';
	import type { Params } from '$lib/types/Query';
	import type { ComputedListingInfoAggregateNode, SearchResponse } from '$lib/types/SearchResponse';
	import { AcademicCap, BookOpen, Funnel, MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import LoadingSpinner from './LoadingSpinner.svelte';
	import ResultItem from './ResultItem.svelte';
	import { REQUEST_LIMIT, SEASON_ID } from '$lib/constants';
	import { Switch, SwitchGroup, SwitchLabel } from '@rgossiaux/svelte-headlessui';
	import { getPercent, interpretSeasonCode } from '$lib/helpers';

	export let data: PageData;
	const { seasonCourseIds } = data;

	let keyword = $page.url.searchParams.get('keyword') ?? '';
	let course_keyword = $page.url.searchParams.get('course_keyword') ?? '';
	let areas_skills_keyword = $page.url.searchParams.get('areas_skills_keyword') ?? '';
	$: params = {
		keyword,
		course_keyword,
		areas_skills_keyword
	};
	$: isEmptyQuery = !keyword && !course_keyword && !areas_skills_keyword;

	let message = 'Enter a query to search for course reviews.';
	let courses: SearchResponse['data']['computed_listing_info_aggregate']['nodes'] = [];

	let showFilters = true;
	let loading = false;
	let filterCurrentSeason = true;
	let sortPercent = false;

	function count(a: ComputedListingInfoAggregateNode, b: ComputedListingInfoAggregateNode) {
		return (
			b.course.evaluation_narratives_aggregate_filtered.aggregate.count -
			a.course.evaluation_narratives_aggregate_filtered.aggregate.count
		);
	}

	function percent(a: ComputedListingInfoAggregateNode, b: ComputedListingInfoAggregateNode) {
		return getPercent(b) - getPercent(a);
	}

	$: coursesFiltered = filterCurrentSeason
		? courses.filter((course) => course.same_course_id in seasonCourseIds)
		: courses;
	$: coursesToDisplay = sortPercent ? coursesFiltered.sort(percent) : coursesFiltered.sort(count);

	// Combine courses with the same course id
	// .reduce((acc, course) => {
	// 	const sameCourse = acc.find((c) => c.same_course_id === course.same_course_id);
	// 	if (sameCourse) {
	// 		// Combine the reviews
	// 		sameCourse.course.evaluation_narratives_aggregate_filtered.aggregate.count +=
	// 			course.course.evaluation_narratives_aggregate_filtered.aggregate.count;
	// 		sameCourse.course.evaluation_narratives_aggregate.aggregate.count +=
	// 			course.course.evaluation_narratives_aggregate.aggregate.count;
	// 		sameCourse.course.evaluation_narratives_aggregate_filtered.nodes = [
	// 			...course.course.evaluation_narratives_aggregate_filtered.nodes,
	// 			...sameCourse.course.evaluation_narratives_aggregate_filtered.nodes
	// 		];
	// 		// Subtract duplicate comments from counts
	// 		sameCourse.course.evaluation_narratives_aggregate_filtered.nodes =
	// 			sameCourse.course.evaluation_narratives_aggregate_filtered.nodes.reduce((acc, node) => {
	// 				if (acc.find((n) => n.comment === node.comment)) {
	// 					sameCourse.course.evaluation_narratives_aggregate.aggregate.count -= 1;
	// 					sameCourse.course.evaluation_narratives_aggregate_filtered.aggregate.count -= 1;
	// 					return acc;
	// 				}
	// 				acc.push(node);
	// 				return acc;
	// 			}, [] as SearchResponse['data']['computed_listing_info_aggregate']['nodes'][number]['course']['evaluation_narratives_aggregate_filtered']['nodes']);
	// 	} else {
	// 		acc.push(course);
	// 	}
	// 	return acc;
	// }, [] as SearchResponse['data']['computed_listing_info_aggregate']['nodes'])

	const updateRoute = (params: Params) => goto(`/search?${new URLSearchParams(params)}`);

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return;
		updateRoute(params);
		runQuery(params);
	};

	const onQueriesRowClick = (event: { detail: Params }) => {
		({ keyword, course_keyword, areas_skills_keyword } = event.detail);
		runQuery(event.detail);
	};

	const runQuery = async (params: Params) => {
		if (isEmptyQuery)
			return (message = 'Please enter a query before searching for course reviews.');
		loading = true;
		courses = [];
		courses = await getCourses(params);
		loading = false;
	};

	const getCourses = async (params: Params) => {
		const response = await fetch(`/api/search?${new URLSearchParams(params)}`);
		const data = (await response.json()) as SearchResponse;
		return data.data.computed_listing_info_aggregate.nodes;
	};

	onMount(() => {
		if (isEmptyQuery) return;
		runQuery(params);
	});
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="Search Yale course reviews." />
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<div class="mx-auto max-w-7xl flex-col py-6 px-4 sm:px-6 lg:px-8">
	<h3 class="mb-4 text-3xl font-bold md:text-3xl">Search CourseTable reviews by keyword</h3>
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
		<span class="relative inline-flex">
			<button
				id="filters"
				type="button"
				name="filters"
				class="flex rounded-md border border-gray-300 bg-white px-3.5 py-2 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2"
				on:click={() => (showFilters = !showFilters)}
			>
				<Icon src={Funnel} class="h-5 w-5 text-gray-400" aria-hidden="true" />
				<span class="sr-only">Filter</span>
			</button>
			{#if !showFilters}
				<span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"
					/>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
				</span>
			{/if}
		</span>
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

	<QueriesRow on:click={onQueriesRowClick} />

	{#if coursesToDisplay.length !== 0}
		<div class="relative my-4 flex flex-col justify-center sm:flex-row">
			<p class="text-center text-gray-500">
				{coursesToDisplay.length === REQUEST_LIMIT ? `${REQUEST_LIMIT}+` : coursesToDisplay.length} results.
			</p>
			<div class="sm:absolute right-0 flex gap-6 justify-between mt-4 sm:mt-0">
				<!-- Put a switch group to sort by percentage or count -->
				<SwitchGroup as="div" class="inset-y-0 flex items-center">
					<SwitchLabel as="span" class="mr-3">
						<span class="text-sm font-medium">Sort by {sortPercent ? '%' : '#'}</span>
					</SwitchLabel>
					<Switch
						checked={sortPercent}
						on:change={(e) => (sortPercent = e.detail)}
						class="{sortPercent
							? 'bg-primary'
							: 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					>
						<span
							aria-hidden="true"
							class="{sortPercent
								? 'translate-x-5'
								: 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
						/>
					</Switch>
				</SwitchGroup>
				<!-- Put a toggle switch for filterCurrentSeason -->
				<SwitchGroup as="div" class="inset-y-0 flex items-center">
					<SwitchLabel as="span" class="mr-3">
						<span class="text-sm font-medium">Filter for {interpretSeasonCode(SEASON_ID)}</span>
					</SwitchLabel>
					<Switch
						checked={filterCurrentSeason}
						on:change={(e) => (filterCurrentSeason = e.detail)}
						class="{filterCurrentSeason
							? 'bg-primary'
							: 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					>
						<span
							aria-hidden="true"
							class="{filterCurrentSeason
								? 'translate-x-5'
								: 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
						/>
					</Switch>
				</SwitchGroup>
			</div>
		</div>
		<!-- <div class="sm:hidden"> -->
		<ul class="divide-y divide-gray-200 rounded-md bg-white shadow">
			<VirtualList items={coursesToDisplay} let:item height="54rem">
				<ResultItem course={item} {keyword} />
				<li class="border-t border-gray-200" />
			</VirtualList>
		</ul>
		<!-- </div> -->
		<!-- <div class="overflow-hidden rounded-md bg-white shadow">
			<ul class="divide-y divide-gray-200">
				<div class="hidden sm:block">
					{#each coursesToDisplay as course (course.listing_id)}
						<ResultItem {course} {keyword} />
					{/each}
				</div>
			</ul>
		</div> -->
	{:else}
		<div class="mt-4">
			<p class="text-center text-gray-500">{message}<LoadingSpinner {loading} /></p>
		</div>
	{/if}
</div>
