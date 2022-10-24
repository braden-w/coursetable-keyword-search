<script lang="ts">
  import QueryButton from './QueryButton.svelte';
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
				<h2 class="mb-2 text-2xl font-bold">
					List courses by keyword. Try now:
				</h2>
			  <QueryButton></QueryButton>

				<span class="mx-auto isolate inline-flex rounded-md shadow-sm">
				<a
					href="/search?keyword=favorite"
					class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
				>
					Favorite
				</a>
				<a
					href="/search?keyword=favorite+class+of+all+time"
					class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
				>
					Favorite class of all time
				</a>
				<a
					href="/search?keyword=best+class"
					class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
				>
					Best class
				</a>
			</span>
			</div>
		</div>
	</div>
</div>
