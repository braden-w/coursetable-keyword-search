<script lang="ts">
	import ResultItem from './ResultItem.svelte';
	import { MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { SearchResponse } from '$lib/types/SearchResponse';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	let keyword = data.keyword ?? '';
	let courseKeyword = data.course_keyword ?? '';

	const onKeydown = (e: KeyboardEvent) =>
		e.key === 'Enter'
			? goto(
					'/search?' +
						new URLSearchParams({
							keyword,
							course_keyword: courseKeyword
						})
			  )
			: null;

	let courses: SearchResponse['data']['computed_listing_info_aggregate']['nodes'] = [ ];
	
	$: coursesSortedByCount = courses.sort((a, b) => b.course.evaluation_narratives_aggregate_filtered.aggregate.count - a.course.evaluation_narratives_aggregate_filtered.aggregate.count);

	const runQuery = async () => {
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
	};
	onMount(runQuery);
</script>

<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
	<h2 class="mb-2 text-4xl font-extrabold md:text-6xl">Yale Course Keyword Search</h2>
	<h3 class="mb-4 text-3xl font-bold">
		A search box that allows you to search CourseTable reviews by keyword
	</h3>
	<div class="w-full">
		<label for="search" class="sr-only">Search</label>
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<Icon src={MagnifyingGlass} class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<input
				id="search"
				name="search"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
				placeholder="Search by course keyword...(use % to match anything)"
				type="search"
				bind:value={keyword}
				on:keydown={onKeydown}
			/>
		</div>
	</div>
	<div class="w-full">
		<label for="search" class="sr-only">Search</label>
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<Icon src={MagnifyingGlass} class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<input
				id="search"
				name="search"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
				placeholder="Search by course keyword...(use % to match anything)"
				type="search"
				bind:value={courseKeyword}
				on:keydown={onKeydown}
			/>
		</div>
	</div>
	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul class="divide-y divide-gray-200">
			{#each coursesSortedByCount as course}
				<ResultItem {course} />
			{/each}
		</ul>
	</div>
</div>

<div class="min-h-screen text-base-content" />
