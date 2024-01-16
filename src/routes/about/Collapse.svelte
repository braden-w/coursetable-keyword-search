<script lang="ts">
	import  ChevronDown from '~icons/heroicons/chevron-down';
	import  ChevronUp from '~icons/heroicons/chevron-up';
	import { slide } from 'svelte/transition';

	export let expanded = false;
	const toggleExpanded = () => (expanded = !expanded);
</script>

<div class="mb-2">
	<button
		type="button"
		on:click={toggleExpanded}
		class="-mx-4 block w-full rounded-md bg-base-200 px-4 text-left hover:bg-base-300"
	>
		<div class="flex items-center justify-between">
			<div class="text-2xl font-bold"><slot name="title" /></div>
			<div class="ml-5 flex-shrink-0">
				{#if expanded}
					<ChevronUp class="h-5 w-5 text-gray-400" aria-hidden="true" />
				{:else}
					<ChevronDown class="h-5 w-5 text-gray-400" aria-hidden="true" />
				{/if}
			</div>
		</div>
	</button>
	{#if expanded}
		<div transition:slide class="-mx-4 block w-full px-4">
			<slot name="content" />
		</div>
	{/if}
</div>
