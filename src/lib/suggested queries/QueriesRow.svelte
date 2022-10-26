<script lang="ts">
	import { queries } from '$lib/suggested queries/queries';
	import QueryButton from './QueryButton.svelte';
</script>

<span class="mb-2 flex gap-3 overflow-x-auto rounded-md shadow-sm">
	{#each queries as query}
		<QueryButton {query} on:click />
	{/each}
</span>
