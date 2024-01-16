<script lang="ts">
	import { goto } from '$app/navigation';
	import { REQUEST_LIMIT, SEASON_ID } from '$lib/constants';
	import { interpretSeasonCode } from '$lib/helpers';
	import QueriesRow from '$lib/suggested_queries/QueriesRow.svelte';
	import type { Params } from '$lib/types/Query';
	import type { Course } from '$lib/types/SearchResponse';
	import { Switch, SwitchGroup, SwitchLabel } from '@rgossiaux/svelte-headlessui';
	import AcademicCap from '~icons/heroicons/academic-cap';
	import BookOpen from '~icons/heroicons/book-open';
	import Funnel from '~icons/heroicons/funnel';
	import MagnifyingGlass from '~icons/heroicons/magnifying-glass';
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import LoadingSpinner from './LoadingSpinner.svelte';
	import ResultItem from './ResultItem.svelte';
	import { sort_average_sentiment_desc, sort_count, sort_percent } from './sortCourses';

	export let data;
	const { seasonCourseIds, params, message } = data;
	let searchBar: Params = params;

	let showFilters = true;
	let filterCurrentSeason = true;
	let sortPercent = false;

	$: coursesToDisplay = (courses: Course[]) => {
		if (filterCurrentSeason) {
			courses = courses.filter((course) => course.same_course_id in seasonCourseIds);
		}
		courses = sortPercent ? courses.sort(sort_percent) : courses.sort(sort_count);
		// Sort courses by average_sentiment descending
		courses.sort(sort_average_sentiment_desc);
		return courses;
	};

	const updateRoute = (newParams: Params) => {
		goto(`/search?${new URLSearchParams(newParams)}`, { invalidateAll: true });
	};

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return;
		updateRoute(searchBar);
	};

	const onQueriesRowClick = ({ detail }: { detail: Params }) => {
		updateRoute(detail);
		searchBar = detail;
	};
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="Search Yale course reviews." />
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<div class="mx-auto max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
	<h3 class="mb-4 text-3xl font-bold md:text-4xl">Search CourseTable reviews by keyword</h3>
	<div class="my-2 flex w-full">
		<label for="search" class="sr-only">Search</label>
		<div class="relative flex-1">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<MagnifyingGlass class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<input
				id="search"
				name="search"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
				placeholder="Search by review keyword...(use % to match anything)"
				type="search"
				bind:value={searchBar.keyword}
				on:keydown={onKeydown}
			/>
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
				{#await data.streamed.courses}
					<LoadingSpinner />
				{/await}
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
				<Funnel class="h-5 w-5 text-gray-400" aria-hidden="true" />
				<span class="sr-only">Filter</span>
			</button>
			{#if !showFilters}
				<span class="absolute right-0 top-0 -mr-1 -mt-1 flex h-2 w-2">
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
					<BookOpen class="h-5 w-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					id="search"
					name="search"
					class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
					placeholder="Filter by course code ...(ECON, PLSC, HIST, etc.)"
					type="search"
					bind:value={searchBar.course_keyword}
					on:keydown={onKeydown}
				/>
			</div>
		</div>

		<div class="my-2 w-full">
			<label for="search" class="sr-only">Areas Filter</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<AcademicCap class="h-5 w-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					id="search"
					name="search"
					class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
					placeholder="Filter by areas ...(Hu, Qr, So, etc., case sensitive)"
					type="search"
					bind:value={searchBar.areas_skills_keyword}
					on:keydown={onKeydown}
				/>
			</div>
		</div>
	{/if}

	<QueriesRow on:click={onQueriesRowClick} />

	{#await data.streamed.courses}
		<!-- Flexbox row jwith the message and loading spinner. Center content vertically and horizontally -->
		<div class="mt-4 flex items-center justify-center gap-1">
			<p class="text-center text-gray-500">{message}</p>
			<LoadingSpinner />
		</div>
	{:then courses}
		{#if coursesToDisplay(courses).length === 0}
			<!-- Flexbox row jwith the message and loading spinner. Center content vertically and horizontally -->
			<div class="mt-4 flex items-center justify-center gap-1">
				<p class="text-center text-gray-500">{message}</p>
			</div>
		{:else}
			<div class="relative my-4 flex flex-col justify-center sm:flex-row">
				<p class="text-center text-gray-500">
					{coursesToDisplay(courses).length === REQUEST_LIMIT
						? `${REQUEST_LIMIT}+`
						: coursesToDisplay(courses).length} results.
				</p>
				<div class="right-0 mt-4 flex justify-between gap-6 sm:absolute sm:mt-0">
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
				<VirtualList items={coursesToDisplay(courses)} let:item height="54rem">
					<ResultItem course={item} keyword={searchBar.keyword} />
					<li class="border-t border-gray-200" />
				</VirtualList>
			</ul>
			<!-- </div> -->
			<!-- <div class="overflow-hidden rounded-md bg-white shadow">
			<ul class="divide-y divide-gray-200">
				<div class="hidden sm:block">
					{#each coursesToDisplay(courses) as course (course.listing_id)}
						<ResultItem {course} {keyword} />
					{/each}
				</div>
			</ul>
		</div> -->
		{/if}
	{/await}
</div>
