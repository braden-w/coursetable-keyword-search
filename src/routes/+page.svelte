<script lang="ts">
	import Typewriter from 'typewriter-effect/dist/core';
	import { goto } from '$app/navigation';
	import QueriesRow from '$lib/suggested queries/QueriesRow.svelte';
	import { AcademicCap, BookOpen, Funnel, MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { onMount } from 'svelte';

	let keyword = '';
	let course_keyword = '';
	let areas_skills_keyword = '';
	$: params = {
		keyword,
		course_keyword,
		areas_skills_keyword
	};

	let showFilters = false;

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return;
		goto(`/search?${new URLSearchParams(params)}`);
	};

	let typewriter: HTMLSpanElement;
	onMount(() => {
		new Typewriter(typewriter, {
			loop: true,
			strings: ['keyword.', 'code.', 'area.'],
			autoStart: true
		});
	});
</script>

<div class="relative">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="relative sm:overflow-hidden sm:rounded-2xl">
			<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-16">
				<h1 class="mb-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
					Search CourseTable reviews by
					<span bind:this={typewriter} class="font-extrabold text-primary-content" />
				</h1>
				<h2 class="mb-2 text-2xl font-bold">List courses by keyword. Try now:</h2>
				<div class="my-4">
					<div class="mb-2 flex w-full">
						<label for="search" class="sr-only">Search</label>
						<div class="relative flex-1">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Icon src={MagnifyingGlass} class="h-5 w-5 text-gray-400" aria-hidden="true" />
							</div>
							<input
								id="search"
								name="search"
								class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
								placeholder="Search by review keyword...(use % to match anything)"
								type="search"
								bind:value={keyword}
								on:keydown={onKeydown}
							/>
						</div>
						<label for="filters" class="sr-only">Show filters</label>
						<span class="sr-only">Loading...</span>

						<span class="relative inline-flex">
							<button
								id="filters"
								type="button"
								name="filters"
								class="flex rounded-md border border-gray-300 bg-white px-3.5 py-2 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
								on:click={() => (showFilters = !showFilters)}
							>
								<Icon src={Funnel} class="h-5 w-5 text-gray-400" aria-hidden="true" />
								<span class="sr-only">Filter</span>
							</button>
							<span class="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"
								/>
								<span class="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
							</span>
						</span>
					</div>
					{#if showFilters}
						<div class="my-2 w-full">
							<label for="search" class="sr-only">Course Filter</label>
							<div class="relative">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Icon src={BookOpen} class="h-5 w-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									id="search"
									name="search"
									class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
									placeholder="Filter by course code ...(ECON, PLSC, HIST, etc.)"
									type="search"
									bind:value={course_keyword}
									on:keydown={onKeydown}
								/>
							</div>
						</div>

						<div class="my-2 w-full">
							<label for="search" class="sr-only">Areas Filter</label>
							<div class="relative">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Icon src={AcademicCap} class="h-5 w-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									id="search"
									name="search"
									class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
									placeholder="Filter by areas ...(Hu, Qr, So, etc., case sensitive)"
									type="search"
									bind:value={areas_skills_keyword}
									on:keydown={onKeydown}
								/>
							</div>
						</div>
					{/if}
				</div>
				<QueriesRow />
			</div>
		</div>
	</div>
</div>
