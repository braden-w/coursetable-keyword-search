<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Params, PremadeQuery } from '$lib/types/Query';
	import { createEventDispatcher } from 'svelte';

	export let premadeQuery: PremadeQuery;
	let { keyword, course_keyword, areas_skills_keyword, title } = premadeQuery;

	const dispatch = createEventDispatcher<{ click: Params }>();

	$: params = {
		keyword,
		course_keyword,
		areas_skills_keyword
	};

	const onClick = () => {
		dispatch('click', params);
	};
</script>

<a
	href="/search?{new URLSearchParams(params)}"
	on:click={onClick}
	class="whitespace-nowrap rounded-md bg-primary px-2 py-0.5 text-sm font-medium text-white"
>
	{title}
</a>
