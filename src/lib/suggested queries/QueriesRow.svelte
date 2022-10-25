<script lang="ts">
	import QueryButton from './QueryButton.svelte';
	const queries = [
		{
			title: '"Favorite" humanities courses',
			keyword: 'favorite',
			course_keyword: 'Hu'
		},
		{
			title: '"Best" QR courses',
			keyword: 'best',
			areas_skills_keyword: 'QR'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST'
		},
		{
			title: '"Favorite" in general',
			keyword: 'favorite'
		}
	];
</script>

<span class="mb-2 flex gap-2 overflow-x-auto rounded-md shadow-sm">
	{#each queries as query}
		<QueryButton {...query} />
	{/each}
</span>
