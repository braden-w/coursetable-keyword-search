<script lang="ts">
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	export let keyword: string;
	export let course_keyword: string = '';
	export let areas_skills_keyword: string = '';
	export let title: string;
	const dispatch = createEventDispatcher<{
		click: { keyword: string; course_keyword: string; areas_skills_keyword: string };
	}>();
	const onClick = () => {
		dispatch('click', {
			keyword,
			course_keyword,
			areas_skills_keyword
		});
		goto(
			`/search?${new URLSearchParams({
				keyword,
				course_keyword,
				areas_skills_keyword
			})}`
		);
	};
</script>

<button on:click={onClick}>
	<span
		class="inline-flex items-center rounded-full bg-indigo-300 px-3 py-0.5 text-sm font-medium text-gray-800"
	>
		{title}
	</span>
</button>
