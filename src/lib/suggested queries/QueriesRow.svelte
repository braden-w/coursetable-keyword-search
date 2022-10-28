<script lang="ts">
	import { queries } from '$lib/suggested queries/premadeQueries';
	import QueryButton from './QueryButton.svelte';
</script>

<div class="flex flex-wrap gap-1.5 overflow-x-auto md:gap-2">
	{#each queries as query (query.title)}
		<QueryButton {query} on:click />
	{/each}
</div>
