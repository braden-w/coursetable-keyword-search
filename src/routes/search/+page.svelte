<script lang="ts">
	import ResultItem from './ResultItem.svelte';
	import { MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { SearchResponse } from 'src/routes/search/[keyword]/[course_keyword]/types';
	let keyword = '';
	let courseKeyword = '';

	$: keywordWithPercents = `%${keyword}%`;
	$: courseKeywordWithPercents = `%${courseKeyword}%`;

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	};

	let courses: SearchResponse['data']['courses'] = [
		{
			description:
				'Extreme and radical right movements and political parties are a recurrent phenomenon found in most parts of the world. Discussion of their foundational values and the causes of their continuous, even increasing, support among citizens and voters.',
			title: 'Extreme and Radical Right Movements',
			areas: ['So'],
			average_rating: 4.3505106005106,
			average_rating_same_professors: 4.3505106005106,
			average_workload: 3.086233211233212,
			average_workload_same_professors: 3.086233211233212,
			computed_listing_infos_aggregate: {
				nodes: [
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'ER&M 376',
						crn: 21822
					},
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'MGRK 304',
						crn: 21823
					},
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'PLSC 376',
						crn: 21821
					},
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'SOCY 307',
						crn: 21824
					}
				]
			},
			course_id: 59251,
			locations_summary: 'HGS 220B',
			requirements: null,
			skills: [],
			evaluation_narratives: [
				{
					comment: 'I learn a lot on the far right in Sweden'
				},
				{
					comment: 'I learned a great deal about research and paper writing.'
				},
			]
		}
	];

	const onSubmit = async () => {
		console.log(
			'🚀 ~ file: +page.svelte ~ line 25 ~ onSubmit ~ courseKeywordWithPercents',
			courseKeywordWithPercents
		);
		console.log(
			'🚀 ~ file: +page.svelte ~ line 25 ~ onSubmit ~ keywordWithPercents',
			keywordWithPercents
		);
		// Send api request to search passing {keyword: keywordWithPercents, courseKeyword: courseKeywordWithPercents}
		const response = await fetch(
			`/api/search?keyword=${encodeURIComponent(
				keywordWithPercents
			)}&courseKeyword=${encodeURIComponent(courseKeywordWithPercents)}`
		);
		const data = (await response.json()) as SearchResponse;
		courses = data.data.courses;
		console.log('🚀 ~ file: +page.svelte ~ line 18 ~ onSubmit ~ data', data);
	};
</script>

<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
	<h2 class="mb-2 text-4xl font-extrabold md:text-6xl">Yale Course Keyword Search</h2>
	<h3 class="mb-4 text-3xl font-bold">
		A search box that allows you to search CourseTable reviews by keyword
	</h3>
	<!-- <p class="">Start by typing in this box:</p> -->
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
	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			{#each courses as course}
				<ResultItem {course} />
			{/each}
		</ul>
	</div>
</div>

<div class="min-h-screen text-base-content" />
