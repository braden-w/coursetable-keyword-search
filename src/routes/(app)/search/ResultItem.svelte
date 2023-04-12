<script lang="ts">
	import { getPercent, interpretSeasonCode } from '$lib/helpers';
	import type { Course } from '$lib/types/SearchResponse';
	import { BookOpen, ChevronDown, ChevronUp } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { slide } from 'svelte/transition';

	export let course: Course;
	$: ({
		course: {
			evaluation_narratives_aggregate_filtered: { nodes: reviews },
			evaluation_narratives_aggregate: {
				aggregate: { avg: { comment_compound: average_sentiment } = { comment_compound: null } }
			}
		}
	} = course);

	let expanded = false;
	const toggleExpanded = () => (expanded = !expanded);

	export let keyword: string;
</script>

<li>
	<button type="button" on:click={toggleExpanded} class="block w-full hover:bg-gray-50">
		<div class="flex items-center px-4 py-4 sm:px-6">
			<div class="flex min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
				<div class="w-full">
					<div class="flex text-sm">
						<p class="truncate font-medium text-primary">
							{course.course_code}
							{course.title}
						</p>
						<p class="ml-1 flex-shrink-0 font-normal text-gray-500">
							in {course.course?.evaluation_narratives_aggregate_filtered?.aggregate?.count} out of {course
								.course?.evaluation_narratives_aggregate?.aggregate?.count} reviews (~{getPercent(
								course
							).toFixed(1)}%).
							{#if average_sentiment}
								<span>
									Average sentiment: <span class="font-medium">
										{(average_sentiment * 100).toFixed(1)}%
									</span>
								</span>
							{/if}
						</p>
					</div>
					<div class="mt-2">
						<div class="line-clamp-1 items-center text-left text-sm text-gray-500 md:line-clamp-2">
							{course.description}
						</div>
						<div class="mt-2 flex justify-between text-left text-sm text-gray-500">
							<div class="flex gap-0.5 overflow-x-auto whitespace-nowrap md:gap-1">
								{#each course.all_course_codes as code}
									<span
										class="inline-flex items-center rounded bg-primary px-2 py-0.5 text-xs font-medium text-white"
									>
										<Icon src={BookOpen} class="mr-1.5 h-4 w-4" />
										{code}
									</span>
									<!-- Spacer for my-2 -->
									<span class="inline-block h-5 w-0 align-middle" />
								{/each}
								{interpretSeasonCode(course.season_code)}
							</div>
							<div>
								{#each course.skills as skill (skill)}
									<span
										class="bg-secondary-100 text-secondary-800 inline-flex items-center rounded px-2 py-0.5 text-xs font-medium"
									>
										<svg
											class="text-secondary-400 mr-1.5 h-2 w-2"
											fill="currentColor"
											viewBox="0 0 8 8"
										>
											<circle cx="4" cy="4" r="3" />
										</svg>
										{skill}
									</span>
								{/each}
								{#each course.areas as area (area)}
									<span
										class="bg-secondary-100 text-secondary-800 inline-flex items-center rounded px-2 py-0.5 text-xs font-medium"
									>
										<svg
											class="text-secondary-400 mr-1.5 h-2 w-2"
											fill="currentColor"
											viewBox="0 0 8 8"
										>
											<circle cx="4" cy="4" r="3" />
										</svg>
										{area}
									</span>
								{/each}
							</div>
						</div>
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
	{#each reviews as review}
		<li transition:slide>
			<div class="px-4 py-4 sm:px-6">
				<p class="text-sm text-gray-500">
					{@html review.comment.replace(
						new RegExp(keyword.replaceAll('%', '.*?'), 'gi'),
						(match) => `<mark>${match}</mark>`
					)}
				</p>
			</div>
		</li>
	{/each}
{/if}
