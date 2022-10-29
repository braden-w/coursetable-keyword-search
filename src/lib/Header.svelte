<script lang="ts">
	import ThemeChooser from './ThemeChooser.svelte';

	import { fly } from 'svelte/transition';
	import Logo from './Logo.svelte';

	const titles = ['JankTable', 'Course Reviews', 'WorseTable &trade;', 'CourseLabel'];
	// Cycle between titles every second
	let titleIndex = 0;
	setInterval(() => {
		titleIndex = (titleIndex + 1) % titles.length;
	}, 2000);
</script>

<div class="mx-auto bg-base-200 px-2 py-2 shadow-md sm:px-4 lg:px-8">
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

		<div class="block">
			<div class="flex space-x-4">
				<ThemeChooser />
				<a href="/about" class="btn-ghost btn gap-1 normal-case"> About </a>

				<a href="/search" class="btn-ghost btn gap-1 normal-case"> Search </a>
			</div>
		</div>
	</div>
</div>
