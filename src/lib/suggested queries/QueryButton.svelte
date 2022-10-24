<script lang="ts">
	export let keyword: string;
	export let course_keyword: string = '';
	export let areas_skills_keyword: string = '';
	export let title: string;
</script>

<a
	href="/search?{new URLSearchParams({
		keyword: keyword,
		course_keyword: course_keyword,
		areas_skills_keyword: areas_skills_keyword
	})}"
>
	<button
		type="button"
		class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
	>
		{title}
	</button>
</a>
