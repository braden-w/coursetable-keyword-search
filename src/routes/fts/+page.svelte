<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { Input } from '$lib/components/ui/input';
	import * as Popover from '$lib/components/ui/popover';
	import * as Select from '$lib/components/ui/select';
	import CourseTable from '$lib/ui/components/course-table.svelte';
	import type { Selected } from 'bits-ui';
	import Funnel from '~icons/heroicons/funnel';
	import List from '~icons/heroicons/list-bullet';
	import MagnifyingGlass from '~icons/heroicons/magnifying-glass';
	import Trash from '~icons/heroicons/trash';

	export let data;
	let selected: Selected<string>[] = data.selectedColumns.map((column) => ({
		label: column,
		value: column,
	}));

	let orderByConfig = data.orderByConfig;
</script>

<div class="container max-w-6xl flex flex-col gap-4 justify-center mt-6 lg:mt-16">
	<form>
		<Collapsible.Root>
			<div class="flex">
				<label for="search" class="sr-only">Search</label>
				<div class="relative flex-1">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlass class="text-muted-foreground" aria-hidden="true" />
					</div>
					<Input
						name="q"
						class="pl-10 pr-3"
						placeholder="Search by course keyword..."
						type="search"
					/>
				</div>
				<Collapsible.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline" class="relative">
						<Funnel class="text-muted-foreground" aria-hidden="true" />
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

			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				Columns
			</h2>

			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<List class="text-muted-foreground" />
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
						<Select.Value class="pl-7 truncate" placeholder="Select columns" />
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

			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				Order By
			</h2>
			{#each orderByConfig as orderByItem, i}
				<div class="flex items-center">
					<Select.Root
						selected={{ label: orderByItem.column, value: orderByItem.column }}
						onSelectedChange={(selected) => {
							if (!selected) return;
							orderByConfig[i].column = selected.value;
						}}
					>
						<Select.Trigger class="w-full">
							<Select.Value class="pl-7 truncate" placeholder="Select column" />
						</Select.Trigger>
						<Select.Content>
							{#each data.allCourseColumnNames as courseColumnName (courseColumnName)}
								<Select.Item value={courseColumnName}>
									{courseColumnName}
								</Select.Item>
							{/each}
						</Select.Content>
						<Select.Input name="orderByConfig[{i}].column" />
					</Select.Root>
					<Select.Root
						selected={{ label: orderByItem.direction, value: orderByItem.direction }}
						onSelectedChange={(selected) => {
							if (!selected) return;
							orderByConfig[i].direction = selected.value;
						}}
					>
						<Select.Trigger class="w-full">
							<Select.Value class="pl-7 truncate" placeholder="Select direction" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="asc">Ascending</Select.Item>
							<Select.Item value="desc">Descending</Select.Item>
						</Select.Content>
						<Select.Input name="orderByConfig[{i}].direction" />
					</Select.Root>
					<Button
						variant="ghost"
						size="icon"
						on:click={() => {
							orderByConfig = [...orderByConfig.slice(0, i), ...orderByConfig.slice(i + 1)];
						}}
					>
						<Trash />
					</Button>
				</div>
			{/each}
		</Collapsible.Root>
		<!-- Add screenshot with rounded corners -->
		<CourseTable {...data}></CourseTable>
	</form>
</div>
