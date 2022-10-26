<script lang="ts">
	import { queries } from '$lib/suggested queries/premadeQueries';
	import QueryButton from './QueryButton.svelte';
</script>

<div class="flex gap-3 overflow-x-auto">
	{#each queries as query}
		<QueryButton {query} on:click />
	{/each}
</div>
