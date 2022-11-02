<script lang="ts">
	import { premadeQueries } from '$lib/suggested queries/premadeQueries';
	import { ArrowLeft, ArrowRight } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import QueryButton from './QueryButton.svelte';
	let scroll: HTMLDivElement;
	function scrollLeft() {
		// Scroll element left smoothly
		scroll.scrollBy({ left: -scroll.offsetWidth, behavior: 'smooth' });
	}
	function scrollRight() {
		// Scroll element right smoothly
		scroll.scrollBy({ left: scroll.offsetWidth, behavior: 'smooth' });
	}
</script>

<div bind:this={scroll} class="flex snap-x gap-1.5 overflow-x-auto md:gap-2">
	<button on:click={scrollLeft} class="absolute left-0">
		<Icon src={ArrowLeft} class="h-4 w-4" />
	</button>
	{#each premadeQueries as premadeQuery (premadeQuery.title)}
		<div class="snap-start">
			<QueryButton {premadeQuery} on:click />
		</div>
	{/each}
	<button on:click={scrollRight} class="absolute right-0">
		<Icon src={ArrowRight} class="h-4 w-4" />
	</button>
</div>
