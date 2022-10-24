<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronDown, ChevronRight, ChevronUp } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { SearchResponse } from '$lib/types/SearchResponse';
	export let course: SearchResponse['data']['computed_listing_info_aggregate']['nodes'][number];
	let expanded = false;
	const toggleExpanded = () => (expanded = !expanded);
</script>

<li>
	<button type="button" on:click={toggleExpanded} class="block hover:bg-gray-50">
		<div class="flex items-center px-4 py-4 sm:px-6">
			<div class="flex min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<div class="flex text-sm">
						<p class="truncate font-medium text-primary">
							{course.all_course_codes}
							{course.title}
						</p>
						<p class="ml-1 flex-shrink-0 font-normal text-gray-500">
							in {course.course?.evaluation_narratives_aggregate_filtered?.aggregate?.count} out of {course
								.course?.evaluation_narratives_aggregate?.aggregate?.count} reviews
						</p>
					</div>
					<div class="mt-2">
						<div class="items-center text-left text-sm text-gray-500">
							{course.description}
						</div>
					</div>
				</div>
				<div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
					<div class="flex -space-x-1 overflow-hidden">
						<!-- <img v-for="applicant in position.applicants" :key="applicant.email" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" :src="applicant.imageUrl" :alt="applicant.name" /> -->
					</div>
				</div>
			</div>
			<div class="ml-5 flex-shrink-0">
				{#if expanded}
					<Icon src={ChevronUp} class="h-5 w-5 text-gray-400" aria-hidden="true" />
				{:else}
					<Icon src={ChevronDown} class="h-5 w-5 text-gray-400" aria-hidden="true" />
				{/if}
			</div>
		</div>
	</button>
</li>

{#if expanded}
	{#each course.course.evaluation_narratives_aggregate_filtered.nodes as review}
		<li transition:slide>
			<div class="px-4 py-4 sm:px-6">
				<p class="text-sm text-gray-500">{review.comment}</p>
			</div>
		</li>
	{/each}
{/if}
