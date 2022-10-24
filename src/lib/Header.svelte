<script lang="ts">
	import Logo from './Logo.svelte';
	import { page } from '$app/stores';

	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems
	} from '@rgossiaux/svelte-headlessui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3, MagnifyingGlass, XMark, BellAlert, Bell } from '@steeze-ui/heroicons';

	const navigation = [{ name: 'Search', href: '/search' }];
</script>

<Disclosure as="nav" class="bg-neutral" let:open>
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center px-2 lg:px-0">
				<div class="flex-shrink-0">
					<a href="/">
						<Logo class="block h-8 w-auto lg:hidden" />
						<Logo class="hidden h-8 w-auto lg:block" />
					</a>
				</div>
				<div class="hidden lg:ml-6 lg:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						{#each navigation as item}
							<a
								href={item.href}
								class={$page.url.pathname === item.href
									? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
									: 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}
							>
								{item.name}
							</a>
						{/each}
					</div>
				</div>
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

	<DisclosurePanel class="lg:hidden">
		<div class="space-y-1 px-2 pt-2 pb-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			{#each navigation as item}
				<DisclosureButton
					as="a"
					href={item.href}
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					>{item.name}
				</DisclosureButton>
			{/each}
		</div>
	</DisclosurePanel>
</Disclosure>
