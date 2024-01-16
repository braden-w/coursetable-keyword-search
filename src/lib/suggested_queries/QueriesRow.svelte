<script lang="ts">
	import { premadeQueries } from '$lib/suggested_queries/premadeQueries';
	import ArrowLeft from '~icons/heroicons/arrow-left';
	import ArrowRight from '~icons/heroicons/arrow-right';
	import QueryButton from './QueryButton.svelte';
	import { Button } from '$lib/components/ui/button';
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
		<Button
			variant="ghost"
			size="icon"
			class="absolute inset-y-0 left-0 -ml-6"
			on:click={scrollLeft}
		>
			<ArrowLeft class="h-4 w-4" />
		</Button>
	{/if}
	<div bind:this={scroll} class="flex snap-x gap-1.5 overflow-x-auto py-1 md:snap-none md:gap-2">
		{#each premadeQueries as premadeQuery (premadeQuery.title)}
			<div class="snap-start">
				<QueryButton {premadeQuery} on:click />
			</div>
		{/each}
	</div>
	<Button
		variant="ghost"
		size="icon"
		class="absolute inset-y-0 right-0 z-10 -mr-6"
		on:click={scrollRight}
		class:animate-bounce={!showLeftArrow}
	>
		<ArrowRight class="h-4 w-4" />
	</Button>
</div>

<style>
	/* Hide the scrollbar */
	::-webkit-scrollbar {
		display: none;
	}
</style>
