<script lang="ts">
	import * as Pagination from '$lib/components/ui/pagination';
	import * as Popover from '$lib/components/ui/popover';
	import * as Table from '$lib/components/ui/table';
	import type { SelectCourse, allCourseColumnNames } from '$lib/schema';
	import { cn } from '$lib/utils';

	export let selectedColumns: (typeof allCourseColumnNames)[number][];
	export let rows: SelectCourse[];
	export let count: number;
	export let perPage: number;
</script>

<Table.Root>
	<Table.Caption>A list of your recent tableColumns.</Table.Caption>
	<Table.Header>
		<Table.Row>
			{#each selectedColumns as column (column)}
				<Table.Head>{column}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each rows as row (row.course_id)}
			<Table.Row class="hover:bg-muted/25">
				{#each selectedColumns as column (column)}
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
<Pagination.Root {count} {perPage} let:pages let:currentPage>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton />
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item isVisible={currentPage == page.value}>
					<Pagination.Link
						type="submit"
						name="offset"
						value={page.value - 1}
						{page}
						isActive={currentPage == page.value}
					>
						{page.value}
					</Pagination.Link>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<Pagination.NextButton />
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
