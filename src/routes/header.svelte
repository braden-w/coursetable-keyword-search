<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import GithubLogo from '~icons/mdi/github';
	import logo from '$lib/assets/logo.png';
	import { Button } from '$lib/components/ui/button';

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

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center justify-between">
		<a class="flex gap-4" href="/">
			<img src={logo} alt="Logo" class="h-8 rounded-md" />
			<button on:click={cycleTitles}>
				{#each titles as title, index}
					{#if titleIndex === index}
						<span
							class="font-bold"
							in:fade={{ duration: 800, easing: (t) => t * (2 - t) }}
							out:fade={{ duration: 800, easing: (t) => t * (2 - t) }}
						>
							{@html title}
						</span>
					{/if}
				{/each}
			</button>
		</a>
		<div class="flex gap-2">
			<Button
				variant="ghost"
				size="icon"
				href="https://github.com/braden-w/coursetable-keyword-search"
				target="_blank"
				rel="noreferrer"
			>
				<GithubLogo class="h-6 w-6" aria-hidden="true" />
			</Button>
			<Button variant="ghost" href="/about">About</Button>
			<Button variant="ghost" href="/search">Search</Button>
		</div>
	</div>
</header>
