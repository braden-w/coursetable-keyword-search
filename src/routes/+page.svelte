<script lang="ts">
	import Typewriter from 'typewriter-effect/dist/core';
	import { goto } from '$app/navigation';
	import QueriesRow from '$lib/suggested_queries/QueriesRow.svelte';
	import AcademicCap from '~icons/heroicons/academic-cap';
	import BookOpen from '~icons/heroicons/book-open';
	import Funnel from '~icons/heroicons/funnel';
	import MagnifyingGlass from '~icons/heroicons/magnifying-glass';
	import { onMount } from 'svelte';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	let keyword = '';
	let course_keyword = '';
	let areas_skills_keyword = '';
	$: params = {
		keyword,
		course_keyword,
		areas_skills_keyword,
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
			autoStart: true,
		});
	});
</script>

<div class="container max-w-6xl flex flex-col gap-4 justify-center mt-6 lg:mt-16">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
		Search Yale Course reviews by
		<span bind:this={typewriter} class="font-extrabold text-primary-content" />
	</h1>
	<h2 class="text-xl font-medium">
		Don't just read reviews, search them. Courtesy of
		<a
			href="https://www.coursetable.com/"
			class="-mr-1 bg-gradient-to-br from-sky-500 to-sky-700 bg-clip-text text-transparent"
		>
			<strong>CourseTable</strong>
		</a>. Try now:
	</h2>
	<div class="flex w-full">
		<label for="search" class="sr-only">Search</label>
		<div class="relative flex-1">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<MagnifyingGlass class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<Input
				id="search"
				name="search"
				class="pl-10 pr-3"
				placeholder="Search by review keyword...(use % to match anything)"
				type="search"
				bind:value={keyword}
				on:keydown={onKeydown}
			/>
		</div>
		<label for="filters" class="sr-only">Show filters</label>
		<span class="sr-only">Loading...</span>
		<Button
			id="filters"
			name="filters"
			variant="outline"
			class="relative"
			on:click={() => (showFilters = !showFilters)}
		>
			<Funnel class="h-5 w-5 text-gray-400" aria-hidden="true" />
			<span class="sr-only">Filter</span>
			{#if !showFilters}
				<span class="absolute right-0 top-0 -mr-1 -mt-1 flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"
					/>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
				</span>
			{/if}
		</Button>
	</div>
	{#if showFilters}
		<label for="search" class="sr-only">Course Filter</label>

		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<BookOpen class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<Input
				id="search"
				name="search"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
				placeholder="Filter by course code ...(ECON, PLSC, HIST, etc.)"
				type="search"
				bind:value={course_keyword}
				on:keydown={onKeydown}
			/>
		</div>

		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<AcademicCap class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<Input
				id="search"
				name="search"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
				placeholder="Filter by areas ...(Hu, Qr, So, etc., case sensitive)"
				type="search"
				bind:value={areas_skills_keyword}
				on:keydown={onKeydown}
			/>
		</div>
	{/if}

	<QueriesRow />
	<!-- Add screenshot with rounded corners -->
	<div class="relative">
		<img src="/screenshot_cropped.jpg" class="rounded-xl" alt="Screenshot" />
		<div class="absolute inset-0 bg-gradient-to-t from-base-100" />
	</div>
</div>
