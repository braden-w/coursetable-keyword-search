<script lang="ts">
	import { premadeQueries } from '$lib/suggested queries/premadeQueries';
	import QueryButton from './QueryButton.svelte';
</script>

<div class="flex snap-x md:snap-none gap-1.5 overflow-x-auto md:gap-2">
	{#each premadeQueries as premadeQuery (premadeQuery.title)}
		<div class="snap-start">
			<QueryButton {premadeQuery} on:click />
		</div>
	{/each}
</div>
