<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		createSvelteTable,
		getCoreRowModel,
		getSortedRowModel,
		type ColumnDef,
		type TableOptions,
		flexRender,
		type SortingState,
	} from '@tanstack/svelte-table';
	import type { Course } from '$lib/db/schema';

	export let data;
	let searchInput = '';

	const columns: ColumnDef<Course>[] = [
		{
			header: 'Course Info',
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: 'course_id',
					header: () => 'Course ID',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'course_code',
					header: () => 'Course Code',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'title',
					header: () => 'Title',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'subject',
					header: () => 'Subject',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'credits',
					header: () => 'Credits',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
			],
		},
		{
			header: 'Ratings',
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: 'average_gut_rating',
					header: () => 'Avg Gut Rating',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'average_professor',
					header: () => 'Avg Professor',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'average_rating',
					header: () => 'Avg Rating',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'average_workload',
					header: () => 'Avg Workload',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
			],
		},
		{
			header: 'Other Info',
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: 'description',
					header: () => 'Description',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'final_exam',
					header: () => 'Final Exam',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'locations_summary',
					header: () => 'Locations',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'times_summary',
					header: () => 'Times Summary',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
				{
					accessorKey: 'syllabus_url',
					header: () => 'Syllabus URL',
					footer: (props) => props.column.id,
					cell: (info) => info.getValue() ?? '',
				},
			],
		},
	];

	let sorting: SortingState = [];

	const setSorting = (updater) => {
		if (updater instanceof Function) {
			sorting = updater(sorting);
		} else {
			sorting = updater;
		}
		options.update((old) => ({
			...old,
			state: {
				...old.state,
				sorting,
			},
		}));
	};

	const options = writable<TableOptions<Course>>({
		data: data.courses,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true,
	});

	const rerender = () => {
		options.update((options) => ({
			...options,
			data: data.courses,
		}));
	};

	const table = createSvelteTable(options);
</script>

<section class="flex h-screen items-center bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
		<!-- Start coding here -->
		<div class="relative bg-white shadow-md sm:rounded-lg dark:bg-gray-800">
			<div
				class="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0"
			>
				<div class="w-full md:w-1/2">
					<form class="flex items-center">
						<label for="simple-search" class="sr-only">Search</label>
						<div class="relative w-full">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									class="h-5 w-5 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<input
								type="text"
								id="simple-search"
								class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="Filter by course code ...(ECON, PLSC, HIST, etc.)"
								bind:value={searchInput}
							/>
						</div>
					</form>
				</div>
				<div
					class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0"
				>
					<div class="flex w-full items-center space-x-3 md:w-auto">
						<button
							id="complex-filter"
							type="button"
							class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4"
						>
							<svg
								class="mr-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M5.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm4-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
									clip-rule="evenodd"
								/>
							</svg>
							Complex Filter
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- End coding here -->
	</div>
</section>

<div class="p-2">
	<div class="h-2" />
	<table>
		<thead>
			{#each $table.getHeaderGroups() as headerGroup}
				<tr>
					{#each headerGroup.headers as header}
						<th colSpan={header.colSpan}>
							{#if !header.isPlaceholder}
								{@const headerSort =
									{ asc: ' 🔼', desc: ' 🔽' }[header.column.getIsSorted().toString()] ?? ''}
								<button
									class:cursor-pointer={header.column.getCanSort()}
									class:select-none={header.column.getCanSort()}
									on:click={header.column.getToggleSortingHandler()}
								>
									<svelte:component
										this={flexRender(header.column.columnDef.header, header.getContext())}
									/>
									{headerSort}
								</button>
							{/if}
						</th>
					{/each}
				</tr>
			{/each}
		</thead>
		<tbody>
			{#each $table.getRowModel().rows.slice(0, 10) as row}
				<tr>
					{#each row.getVisibleCells() as cell}
						<td>
							<svelte:component this={flexRender(cell.column.columnDef.cell, cell.getContext())} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
		<tfoot>
			{#each $table.getFooterGroups() as footerGroup}
				<tr>
					{#each footerGroup.headers as header}
						<th colSpan={header.colSpan}>
							{#if !header.isPlaceholder}
								<svelte:component
									this={flexRender(header.column.columnDef.footer, header.getContext())}
								/>
							{/if}
						</th>
					{/each}
				</tr>
			{/each}
		</tfoot>
	</table>
	<div>{$table.getRowModel().rows.length} Rows</div>
	<div>
		<button on:click={() => rerender()}>Force Rerender</button>
	</div>
	<pre>{JSON.stringify($table.getState().sorting, null, 2)}</pre>
</div>
