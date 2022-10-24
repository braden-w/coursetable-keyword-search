<script lang="ts">
	import Logo from './Logo.svelte';

	import { Disclosure, DisclosureButton } from '@rgossiaux/svelte-headlessui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3, XMark } from '@steeze-ui/heroicons';
</script>

<Disclosure as="nav" class="" let:open>
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center px-2 lg:px-0">
				<div class="flex-shrink-0">
					<a href="/">
						<Logo class="block h-8 w-auto lg:hidden" />
						<Logo class="hidden h-8 w-auto lg:block" />
					</a>
				</div>
				<a href="/">
					<h1 class="ml-4 hidden text-4xl font-extrabold lg:block">Yale Course Keyword Search</h1>
				</a>
			</div>
			<div class="flex lg:hidden">
				<!-- Mobile menu button -->
				<DisclosureButton
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">Open main menu</span>
					{#if open}
						<Icon src={XMark} theme="outline" class="block h-6 w-6" aria-hidden="true" />
					{:else}
						<Icon src={Bars3} theme="outline" class="block h-6 w-6" aria-hidden="true" />
					{/if}
				</DisclosureButton>
			</div>
		</div>
	</div>
</Disclosure>
