<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import GithubLogo from '~icons/mdi/github';
	import logo from '$lib/assets/logo.png';

	const titles = [
		'ReviewTable',
		'Course Reviews',
		'JankTable &trade;',
		'WorseTable &trade;',
		'CourseLabel',
	];
	// Cycle between titles every second
	let titleIndex = 0;
	let interval: NodeJS.Timer;

	const cycleTitles = () => {
		titleIndex = (titleIndex + 1) % titles.length;
		clearInterval(interval);
		interval = setInterval(cycleTitles, 5000);
	};
	onMount(() => (interval = setInterval(cycleTitles, 5000)));
	onDestroy(() => clearInterval(interval));
</script>

<div class="w-full shadow-md px-2 sm:px-4 lg:px-8">
	<div class="flex h-16 items-center justify-between">
		<div class="flex gap-1">
			<a href="/">
				<img src={logo} alt="Logo" class="h-10 rounded-md" />
			</a>
			<a href="/" on:click={cycleTitles}>
				<div class="hidden sm:block">
					{#each titles as title, index}
						{#if titleIndex === index}
							<h2
								class="absolute ml-4 block text-4xl font-bold md:text-5xl"
								in:fade={{ duration: 800, easing: (t) => t * (2 - t) }}
								out:fade={{ duration: 800, easing: (t) => t * (2 - t) }}
							>
								{@html title}
							</h2>
						{/if}
					{/each}
				</div>
			</a>
		</div>

		<div class="block">
			<div class="flex space-x-4">
				<!-- GitHub Icon -->
				<a
					href="https://github.com/braden-w/coursetable-keyword-search"
					class="btn btn-ghost normal-case"
					target="_blank"
					rel="noreferrer"
				>
					<GithubLogo class="h-6 w-6" aria-hidden="true" />
				</a>
				<a href="/about" class="btn btn-ghost gap-1 normal-case"> About </a>

				<a href="/search" class="btn btn-ghost gap-1 normal-case"> Search </a>
			</div>
		</div>
	</div>
</div>
