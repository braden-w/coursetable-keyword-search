<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { cn } from '$lib/utils';

	export let value;
</script>

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
			{value}
		</td>
	</Popover.Trigger>
	<Popover.Content>{value}</Popover.Content>
</Popover.Root>
