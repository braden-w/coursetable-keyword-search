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
	{#each queries as query}
		<QueryButton {...query} />
	{/each}
</span>
