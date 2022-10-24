<script lang="ts">
	import QueryButton from './QueryButton.svelte';
	const queries = [
		{
			title: 'Favorite humanities courses',
			keyword: 'favorite',
			course_keyword: 'Hu'
		},
		{
			title: 'Best QR courses',
			keyword: 'best',
			course_keyword: 'QR'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		}
	];
</script>

<span class="flex overflow-x-auto rounded-md shadow-sm">
	<a
		href="/search?{new URLSearchParams({
			keyword: queries[0].keyword ?? '',
			course_keyword: queries[0].course_keyword ?? '',
			areas_skills_keyword: queries[0].areas_skills_keyword ?? ''
		})}"
	>
		<button
			type="button"
			class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
		>
			{queries[0].title}
		</button>
	</a>

	{#each queries.slice(1, -1) as query}
		<QueryButton {...query} />
	{/each}

	<a
		href="/search?{new URLSearchParams({
			keyword: queries[queries.length - 1].keyword ?? '',
			course_keyword: queries[queries.length - 1].course_keyword ?? '',
			areas_skills_keyword: queries[queries.length - 1].areas_skills_keyword ?? ''
		})}"
	>
		<button
			type="button"
			class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
		>
			{queries[queries.length - 1].title}
		</button>
	</a>
</span>
