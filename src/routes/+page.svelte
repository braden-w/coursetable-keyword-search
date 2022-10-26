<script lang="ts">
	import { goto } from '$app/navigation';
	import QueriesRow from '$lib/suggested queries/QueriesRow.svelte';
	import { MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	let keyword: string;
	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			goto(
				`/search?${new URLSearchParams({
					keyword: keyword,
					course_keyword: '',
					areas_skills_keyword: ''
				})}`
			);
		}
	};
</script>

<div class="relative">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
		<div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
			<div class="absolute inset-0">
				<div class="absolute inset-0 bg-base-200" />
			</div>
			<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-16">
				<h1 class="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
					Search CourseTable reviews by keyword.
				</h1>
				<h2 class="mb-2 text-2xl font-bold">List courses by keyword. Try now:</h2>
				<div class="my-4 flex w-full">
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
				</div>
				<QueriesRow />
			</div>
		</div>
	</div>
</div>
