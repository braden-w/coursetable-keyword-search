<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover';
	import * as Select from '$lib/components/ui/select';
	import CourseTable from '$lib/ui/components/course-table.svelte';
	import type { Selected } from 'bits-ui';
	import Funnel from '~icons/heroicons/funnel';
	import List from '~icons/heroicons/list-bullet';
	import MagnifyingGlass from '~icons/heroicons/magnifying-glass';
	import Trash from '~icons/heroicons/trash';
	import ChevronUpDown from '~icons/heroicons/chevron-up-down';

	export let data;
	let query = data.query;
	let selected: Selected<string>[] = data.selectedColumns.map((column) => ({
		label: column,
		value: column,
	}));

	let orderByConfig = data.orderByConfig;
</script>

<div class="container max-w-6xl flex flex-col gap-4 justify-center mt-6 lg:mt-16">
	<form>
		<Collapsible.Root>
			<div class="flex items-center gap-2">
				<div class="relative flex-1">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlass class="text-muted-foreground" aria-hidden="true" />
					</div>
					<Label for="search" class="sr-only">Search</Label>
					<Input
						name="q"
						value={query}
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
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-75"
							/>
							<span class="relative inline-flex h-2 w-2 rounded-full bg-primary/40" />
						</span>
					</Button>
				</Collapsible.Trigger>
				<Button type="submit">Search</Button>
			</div>

			<Collapsible.Content>
				<div class="flex items-center gap-2">
					<Label for="columns" class="sr-only">Columns</Label>
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
						<Select.Trigger>
							<div class="flex items-center gap-2">
								<List class="text-muted-foreground" />
								<p>Select columns</p>
							</div>
						</Select.Trigger>
						<Select.Content class="max-h-96 overflow-y-auto">
							{#each data.allCourseColumnNames as courseColumnName (courseColumnName)}
								<Select.Item value={courseColumnName}>
									{courseColumnName}
								</Select.Item>
							{/each}
						</Select.Content>
						<Select.Input id="columns" name="selectedColumns" />
					</Select.Root>

					<Label for="orderBy" class="sr-only">Order By</Label>
					<Input
						id="orderBy"
						type="hidden"
						name="orderByConfig"
						value={JSON.stringify(orderByConfig)}
					/>
					<Popover.Root>
						<Popover.Trigger asChild let:builder>
							<Button builders={[builder]} variant="outline" class="font-normal">
								<ChevronUpDown class="text-muted-foreground mr-2" aria-hidden="true" />
								Order By
							</Button>
						</Popover.Trigger>
						<Popover.Content class="w-full max-w-md">
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
						</Popover.Content>
					</Popover.Root>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
		<CourseTable {...data}></CourseTable>
	</form>
</div>
