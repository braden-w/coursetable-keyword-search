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

<div class="flex gap-2 overflow-x-auto">
	{#each queries as query}
		<a
			href="/search?{new URLSearchParams({
				keyword: query.keyword,
				course_keyword: query.course_keyword
			})}"
		>
			<QueryButton {...query} />
		</a>
	{/each}
</div>
