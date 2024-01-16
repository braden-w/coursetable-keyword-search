<script lang="ts">
	import { premadeQueries } from '$lib/suggested_queries/premadeQueries';
	import ArrowLeft from '~icons/heroicons/arrow-left'
	import ArrowRight from '~icons/heroicons/arrow-right'
	import QueryButton from './QueryButton.svelte';
	let scroll: HTMLDivElement;
	let showLeftArrow = false;
	function scrollLeft() {
		// Scroll element left smoothly
		scroll.scrollBy({ left: -scroll.offsetWidth, behavior: 'smooth' });
	}
	function scrollRight() {
		// Scroll element right smoothly
		scroll.scrollBy({ left: scroll.offsetWidth, behavior: 'smooth' });
		showLeftArrow = true;
	}
</script>

<div class="relative">
	{#if showLeftArrow}
		<button on:click={scrollLeft} class="absolute inset-y-0 left-0 -ml-6">
			<ArrowLeft class="h-4 w-4" />
		</button>
	{/if}
	<div bind:this={scroll} class="flex snap-x gap-1.5 overflow-x-auto py-1 md:snap-none md:gap-2">
		{#each premadeQueries as premadeQuery (premadeQuery.title)}
			<div class="snap-start">
				<QueryButton {premadeQuery} on:click />
			</div>
		{/each}
	</div>
	<button
		on:click={scrollRight}
		class="absolute inset-y-0 right-0 z-10 -mr-6"
		class:animate-bounce={!showLeftArrow}
	>
		<ArrowRight class="h-4 w-4" />
	</button>
</div>

<style>
	/* Hide the scrollbar */
	::-webkit-scrollbar {
		display: none;
	}
</style>
