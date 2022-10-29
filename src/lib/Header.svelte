<script lang="ts">
	import Logo from './Logo.svelte';

	// import { Icon } from '@steeze-ui/svelte-icon';
	// import { InformationCircle } from '@steeze-ui/heroicons';
	import { fly } from 'svelte/transition';
	const titles = ['JankTable', 'Course Reviews', 'WorseTable &trade;', 'CourseLabel'];
	// Cycle between titles every second
	let titleIndex = 0;
	setInterval(() => {
		titleIndex = (titleIndex + 1) % titles.length;
		// If you want to change the title:
		// document.title = titles[titleIndex];
	}, 2000);
</script>

<div class="mx-auto px-2 py-2 sm:px-4 lg:px-8 shadow-md bg-base-200">
	<div class="flex h-16 items-center justify-between">
		<div class="flex px-2 lg:px-0">
			<div class="flex-shrink-0">
				<a href="/">
					<Logo class="block h-10 w-auto rounded-md lg:hidden" />
					<Logo class="hidden h-12 w-auto rounded-md lg:block" />
				</a>
			</div>
			<a href="/">
				{#each titles as title, index}
					{#if titleIndex === index}
						<!-- Hidden, lg:block -->
						<h2
							class="absolute ml-4 block text-4xl font-bold md:text-5xl"
							in:fly={{ y: -20, duration: 800, easing: (t) => t * (2 - t) }}
							out:fly={{ y: 30, duration: 800, easing: (t) => t * (2 - t) }}
						>
							{@html title}
						</h2>
					{/if}
				{/each}
			</a>
		</div>

		<!-- <a
			href="/about"
			class="ml-6 inline-flex items-center rounded-xl border border-transparent bg-indigo-600 px-1 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			<Icon src={InformationCircle} class="h-8 w-8" aria-hidden="true"/>
		</a> -->
	</div>
</div>
