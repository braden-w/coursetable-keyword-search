<script lang="ts">
	import QueriesRow from '$lib/suggested queries/QueriesRow.svelte';
</script>

<div class="relative">
	<div class="absolute inset-x-0 bottom-0" />
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
			<div class="absolute inset-0">
				<div class="absolute inset-0 bg-base-200" />
			</div>
			<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-16">
				<h1 class="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
					Search CourseTable reviews by keyword.
				</h1>
				<h2 class="mb-2 text-2xl font-bold">List courses by keyword. Try now:</h2>
				<QueriesRow />
			</div>
		</div>
	</div>
</div>
