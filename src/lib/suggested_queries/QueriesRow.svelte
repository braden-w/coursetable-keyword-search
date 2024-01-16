<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { premadeQueries } from '$lib/suggested_queries/premadeQueries';
	import ArrowLeft from '~icons/heroicons/arrow-left';
	import ArrowRight from '~icons/heroicons/arrow-right';

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

<div class="flex items-center">
	{#if showLeftArrow}
		<Button variant="ghost" size="icon" class="-ml-4" on:click={scrollLeft}>
			<ArrowLeft class="h-4 w-4" />
		</Button>
	{/if}
	<div
		bind:this={scrollDiv}
		class="flex flex-grow overflow-x-auto snap-x gap-1.5 py-1 md:snap-none md:gap-2"
	>
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
	<Button variant="ghost" size="icon" class="-mr-4" on:click={scrollRight}>
		<ArrowRight class="h-4 w-4" />
	</Button>
</div>

<style>
	/* Hide the scrollbar */
	::-webkit-scrollbar {
		display: none;
	}
</style>
