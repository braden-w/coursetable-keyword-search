<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Params, PremadeQuery } from '$lib/types/Query';
	import { createEventDispatcher } from 'svelte';

	export let premadeQuery: PremadeQuery;
	let { keyword, course_keyword, areas_skills_keyword, title } = premadeQuery;

	const dispatch = createEventDispatcher<{ click: Params }>();

	const onClick = () => {
		const params = {
			keyword,
			course_keyword,
			areas_skills_keyword
		};
		dispatch('click', params);
		goto(`/search?${new URLSearchParams(params)}`);
	};
</script>

<button
	on:click={onClick}
	class="whitespace-nowrap rounded-md bg-primary px-2 py-0.5 text-sm font-medium text-white"
>
	{title}
</button>
