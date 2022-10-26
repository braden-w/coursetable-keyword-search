<script lang="ts">
	import Logo from './Logo.svelte';

	import { Disclosure, DisclosureButton } from '@rgossiaux/svelte-headlessui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3, XMark } from '@steeze-ui/heroicons';
	import { fly } from 'svelte/transition';
	const titles = ['Keyword Search', 'KeyTable', 'JankTable', 'WorseTable', 'CourseLabel'];
	// Cycle between titles every second
	let titleIndex = 0;
	setInterval(() => {
		titleIndex = (titleIndex + 1) % titles.length;
		// If you want to change the title:
		// document.title = titles[titleIndex];
	}, 5000);
</script>

<Disclosure as="nav" class="" let:open>
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center px-2 lg:px-0">
				<div class="flex-shrink-0">
					<a href="/">
						<Logo class="block h-10 w-auto rounded-md lg:hidden" />
						<Logo class="hidden h-12 w-auto rounded-md lg:block" />
					</a>
				</div>
				<a href="/">
					{#each titles as title, index}
						{#if titleIndex === index}
							<h2
								class="ml-4 hidden text-4xl font-bold md:text-6xl lg:block"
								in:fly={{ y: 40, duration: 250 }}
								out:fly={{ y: -40, duration: 250 }}
							>
								{title}
							</h2>
						{/if}
					{/each}
				</a>
			</div>
			<div class="flex lg:hidden">
				<!-- Mobile menu button -->
				<DisclosureButton
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">How it works</span>
					{#if open}
						<Icon
							src={XMark}
							theme="ouOpen main menutline"
							class="block h-6 w-6"
							aria-hidden="true"
						/>
					{:else}
						<Icon src={Bars3} theme="outline" class="block h-6 w-6" aria-hidden="true" />
					{/if}
				</DisclosureButton>
			</div>
		</div>
	</div>
</Disclosure>
