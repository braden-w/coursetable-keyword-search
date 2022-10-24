<script lang="ts">
</script>

<div class="hero bg-base-100 text-base-content">
	<div class="hero-overlay h-screen bg-opacity-60" />
	<div class="hero-content">
		<div>
			<h2 class="mb-2 text-4xl font-extrabold md:text-6xl">Yale Course Keyword Search</h2>
			<h3 class="mb-4 text-3xl font-bold">
				A search box that allows you to search CourseTable reviews by keyword
			</h3>
			<span class="isolate inline-flex rounded-md shadow-sm">
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
