<script lang="ts">
	import { queries } from '$lib/suggested queries/premadeQueries';
	import QueryButton from './QueryButton.svelte';
</script>

<div class="flex gap-1.5 overflow-x-auto md:gap-3">
	{#each queries as query}
		<QueryButton {query} on:click />
	{/each}
</div>
