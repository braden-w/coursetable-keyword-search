<script lang="ts">
	import { premadeQueries } from '$lib/suggested_queries/premadeQueries';
	import ArrowLeft from '~icons/heroicons/arrow-left';
	import ArrowRight from '~icons/heroicons/arrow-right';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	let scrollDiv: HTMLDivElement;
	let showLeftArrow = false;
	function scrollLeft() {
		// Scroll element left smoothly
		scrollDiv.scrollBy({ left: -scrollDiv.offsetWidth, behavior: 'smooth' });
	}
	function scrollRight() {
		// Scroll element right smoothly
		scrollDiv.scrollBy({ left: scrollDiv.offsetWidth, behavior: 'smooth' });
		showLeftArrow = true;
	}
</script>

<div class="relative">
	{#if showLeftArrow}
		<Button variant="ghost" size="icon" class="absolute left-0 -ml-6" on:click={scrollLeft}>
			<ArrowLeft class="h-4 w-4" />
		</Button>
	{/if}
	<div bind:this={scrollDiv} class="flex snap-x gap-1.5 overflow-x-auto py-1 md:snap-none md:gap-2">
		{#each premadeQueries as premadeQuery (premadeQuery.title)}
			<div class="snap-start">
				<form>
					<input type="hidden" name="keyword" value={premadeQuery.keyword} />
					<input type="hidden" name="course_keyword" value={premadeQuery.course_keyword} />
					<input
						type="hidden"
						name="areas_skills_keyword"
						value={premadeQuery.areas_skills_keyword}
					/>
					<Button>{premadeQuery.title}</Button>
				</form>
			</div>
		{/each}
	</div>
	<Button
		variant="ghost"
		size="icon"
		class={cn('absolute right-0 -mr-6', !showLeftArrow && 'animate-bounce')}
		on:click={scrollRight}
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
