<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Query } from '$lib/types/Query';
	import { createEventDispatcher } from 'svelte';

	export let query: Query;
	let { keyword, course_keyword, areas_skills_keyword, title } = query;
	const dispatch = createEventDispatcher<{
		click: Query;
	}>();
	const onClick = () => {
		dispatch('click', {
			keyword,
			course_keyword,
			areas_skills_keyword
		});
		goto(
			`/search?${new URLSearchParams({
				keyword: keyword ?? '',
				course_keyword: course_keyword ?? '',
				areas_skills_keyword: areas_skills_keyword ?? ''
			})}`
		);
	};
</script>

<button on:click={onClick}>
	<span
		class="inline-flex items-center rounded-full bg-primary px-3 py-0.5 text-sm font-medium text-white"
	>
		{title}
	</span>
</button>
