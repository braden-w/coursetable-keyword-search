<script lang="ts">
	import QueryButton from './QueryButton.svelte';
	const queries = [
		{
			title: '"Favorite" courses',
			keyword: 'favorite',
			course_keyword: '',
			count: '1000'
		},
		{
			title: '"Best" courses',
			keyword: 'best',
			course_keyword: '',
			count: '1000'
		},
		{
			title: '"Quintessential" history courses',
			keyword: 'quintessential',
			course_keyword: 'HIST',
			count: '18'
		}
	];
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

				<div class="flex flex-wrap gap-2">
					{#each queries as query}
						<a
							href="/search?{new URLSearchParams({
								keyword: query.keyword,
								course_keyword: query.course_keyword
							})}"
						>
							<QueryButton {...query} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
