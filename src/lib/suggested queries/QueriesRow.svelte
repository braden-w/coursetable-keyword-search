<script lang="ts">
	import QueryButton from './QueryButton.svelte';
	const queries = [
		{
			title: '"Favorite" courses',
			keyword: 'favorite',
			course_keyword: '',
			count: '1000'
		},
		{
			title: '"Best" courses',
			keyword: 'best',
			course_keyword: '',
			count: '1000'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		}
	];
</script>

<span class="isolate inline-flex rounded-md shadow-sm">
	<button
		type="button"
		class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
	>
		Years
	</button>

	{#each queries.slice(1, -1) as query}
		<button
			type="button"
			class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
			>Months</button
		>
		<a
			href="/search?{new URLSearchParams({
				keyword: query.keyword,
				course_keyword: query.course_keyword
			})}"
		>
			<QueryButton {...query} />
		</a>
	{/each}
			<button
			type="button"
			class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
			>Days</button
		>

</span>
