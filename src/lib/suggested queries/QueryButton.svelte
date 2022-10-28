<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PremadeQuery } from '$lib/types/Query';
	import { createEventDispatcher } from 'svelte';

	export let premadeQuery: PremadeQuery;
	let { keyword, course_keyword, areas_skills_keyword, title } = premadeQuery;
	const dispatch = createEventDispatcher<{
		click: PremadeQuery;
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

<button
	on:click={onClick}
	class="whitespace-nowrap rounded-md bg-primary px-2 py-0.5 text-sm font-medium text-white"
>
	{title}
</button>
