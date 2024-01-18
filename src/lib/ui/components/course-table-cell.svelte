<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Popover from '$lib/components/ui/popover';
	import { cn } from '$lib/utils';
	import { z } from 'zod';

	export let value: string;

	const isNull = value === 'null';
	const isUrl = (value: string) => z.string().url().safeParse(value).success;
	const isDecimal = (value: string) =>
		z
			.string()
			.regex(/^\d+\.\d+$/)
			.safeParse(value).success;
	const isJsonParseable = (value: string) => {
		try {
			JSON.parse(value);
			return true;
		} catch {
			return false;
		}
	};
	const isStringArray = (value: unknown): value is string[] =>
		z.string().array().safeParse(value).success;
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
			{#if isJsonParseable(value)}
				{@const jsonValue = JSON.parse(value)}
				{#if isStringArray(jsonValue)}
					{#each jsonValue as v}
						<Badge>{v}</Badge>
					{/each}
				{:else}
					{jsonValue}
				{/if}
			{:else if isDecimal(value)}
				{value}
			{:else if isUrl(value)}
				<a href={value} target="_blank" rel="noopener noreferrer">
					{value}
				</a>
			{:else}
				{value}
			{/if}
		</td>
	</Popover.Trigger>
	<Popover.Content>{value}</Popover.Content>
</Popover.Root>
