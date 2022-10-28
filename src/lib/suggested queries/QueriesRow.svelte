<script lang="ts">
	import { premadeQueries } from '$lib/suggested queries/premadeQueries';
	import QueryButton from './QueryButton.svelte';
</script>

<div class="flex flex-wrap gap-1.5 overflow-x-auto md:gap-2">
	{#each premadeQueries as premadeQuery (premadeQuery.title)}
		<QueryButton {premadeQuery} on:click />
	{/each}
</div>
