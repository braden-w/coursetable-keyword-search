<script lang="ts">
	import type { Course } from '$lib/types/SearchResponse';
	import { createVirtualizer } from '@tanstack/svelte-virtual';
	import ResultItem from './ResultItem.svelte';
	export let courses: Course[];
	export let keyword: string;
	let container: HTMLUListElement | null = null;

	$: rowVirtualizer = createVirtualizer({
		count: courses.length,
		getScrollElement: () => container,
		estimateSize: () => 54 // Adjust this value based on the height of each row
	});
</script>

<ul
	class="relative divide-y divide-gray-200 overflow-auto rounded-md bg-white shadow"
	bind:this={container}
>
	<div style="height: {$rowVirtualizer.getVirtualItems()}px; position: relative;">
		{#each $rowVirtualizer.getVirtualItems() as virtualItem}
			<ResultItem course={courses[virtualItem.index]} {keyword} />
			<li class="border-t border-gray-200" />
		{/each}
	</div>
</ul>
