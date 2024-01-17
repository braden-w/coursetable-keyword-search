<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import screenshotCropped from '$lib/assets/screenshot_cropped.jpg';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import * as Table from '$lib/components/ui/table';
	import QueriesRow from '$lib/suggested_queries/QueriesRow.svelte';
	import { onMount } from 'svelte';
	import Typewriter from 'typewriter-effect/dist/core';
	import AcademicCap from '~icons/heroicons/academic-cap';
	import BookOpen from '~icons/heroicons/book-open';
	import Funnel from '~icons/heroicons/funnel';
	import List from '~icons/lucide/list';
	import MagnifyingGlass from '~icons/heroicons/magnifying-glass';
	import { cn } from '$lib/utils';
	import type { Selected } from 'bits-ui';

	let typewriter: HTMLSpanElement;
	onMount(() => {
		new Typewriter(typewriter, {
			loop: true,
			strings: ['keyword.', 'code.', 'area.'],
			autoStart: true,
		});
	});

	export let data;
	let selected: Selected<string>[] = data.selectedColumns.map((column) => ({
		label: column,
		value: column,
	}));
</script>

<div class="container max-w-6xl flex flex-col gap-4 justify-center mt-6 lg:mt-16">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
		Search Yale Course reviews by
		<span bind:this={typewriter} class="font-extrabold text-primary-content" />
	</h1>
	<h2 class="text-xl font-medium">
		Don't just read reviews, search them. Courtesy of
		<a
			href="https://www.coursetable.com/"
			class="-mr-1 bg-gradient-to-br from-sky-500 to-sky-700 bg-clip-text text-transparent"
		>
			<strong>CourseTable</strong>
		</a>. Try now:
	</h2>
	<Collapsible.Root>
		<form action="/">
			<div class="flex">
				<label for="search" class="sr-only">Search</label>
				<div class="relative flex-1">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlass class="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<Input
						name="search"
						class="pl-10 pr-3"
						placeholder="Search by review keyword...(use % to match anything)"
						type="search"
					/>
				</div>
				<Collapsible.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline" class="relative">
						<Funnel class="h-5 w-5 text-gray-400" aria-hidden="true" />
						<span class="sr-only">Show filters</span>
						<span class="absolute right-0 top-0 -mr-1 -mt-1 flex h-2 w-2">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"
							/>
							<span class="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
						</span>
					</Button>
				</Collapsible.Trigger>
				<Button type="submit" class="ml-2">Search</Button>
			</div>
			<Collapsible.Content class="flex flex-col gap-2 pt-2">
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<List />
					</div>
					<Select.Root
						multiple
						{selected}
						onSelectedChange={(newSelected) => {
							if (!newSelected) return;
							// Sort in the order of data.allCourseColumnNames
							newSelected.sort((a, b) => {
								const aIndex = data.allCourseColumnNames.indexOf(a.value);
								const bIndex = data.allCourseColumnNames.indexOf(b.value);
								return aIndex - bIndex;
							});
							selected = newSelected;
						}}
					>
						<Select.Trigger class="w-full">
							<Select.Value class="truncate" placeholder="Select columns" />
						</Select.Trigger>
						<Select.Content>
							{#each data.allCourseColumnNames as courseColumnName (courseColumnName)}
								<Select.Item value={courseColumnName}>
									{courseColumnName}
								</Select.Item>
							{/each}
						</Select.Content>
						<Select.Input name="selectedColumns" />
					</Select.Root>
				</div>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<BookOpen class="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<Input
						name="search"
						class="pl-10 pr-3"
						placeholder="Filter by course code ...(ECON, PLSC, HIST, etc.)"
						type="search"
					/>
				</div>

				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<AcademicCap class="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<Input
						name="search"
						class="pl-10 pr-3"
						placeholder="Filter by areas ...(Hu, Qr, So, etc., case sensitive)"
						type="search"
					/>
				</div>
			</Collapsible.Content>
		</form>
	</Collapsible.Root>
	<QueriesRow />
	<!-- Add screenshot with rounded corners -->
	<Table.Root>
		<Table.Caption>A list of your recent tableColumns.</Table.Caption>
		<Table.Header>
			<Table.Row>
				{#each data.selectedColumns as column (column)}
					<Table.Head>{column}</Table.Head>
				{/each}
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data.rows as row (row.course_id)}
				<Table.Row class="hover:bg-muted/25">
					{#each data.selectedColumns as column (column)}
						<Popover.Root>
							<Popover.Trigger asChild let:builder>
								<td
									class={cn(
										'p-4 align-middle [&:has([role=checkbox])]:pr-0',
										'truncate max-w-16',
										'hover:bg-muted/75',
									)}
									on:click
									on:keydown
									use:builder.action
									{...builder}
								>
									{row[column]}
								</td>
							</Popover.Trigger>
							<Popover.Content>{row[column]}</Popover.Content>
						</Popover.Root>
					{/each}
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
	<div class="relative">
		<img src={screenshotCropped} class="rounded-xl" alt="Screenshot" />
		<div class="absolute inset-0 bg-gradient-to-t from-base-100" />
	</div>
</div>
