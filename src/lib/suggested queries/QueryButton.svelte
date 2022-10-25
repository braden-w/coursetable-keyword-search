<script lang="ts">
	export let keyword: string;
	export let course_keyword: string = '';
	export let areas_skills_keyword: string = '';
	export let title: string;
	export let runQuery = async () => {};
</script>

<a
	href="/search?{new URLSearchParams({
		keyword: keyword,
		course_keyword: course_keyword,
		areas_skills_keyword: areas_skills_keyword
	})}"
	on:click={runQuery}
>
	<span
		class="inline-flex items-center rounded-full bg-indigo-300 px-3 py-0.5 text-sm font-medium text-gray-800"
	>
		{title}
	</span>
</a>
