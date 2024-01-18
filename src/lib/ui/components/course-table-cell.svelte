<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { cn } from '$lib/utils';
	import { z } from 'zod';

	export let value: string;

	const isNull = value === 'null';
	const isJsonParseable = (value: string) => {
		try {
			JSON.parse(value);
			return true;
		} catch {
			return false;
		}
	};
	const isNumber = (value: string) => {
		const parsed = Number(value);
		return !isNaN(parsed);
	};
	const isStringArray = (value: unknown): value is string[] =>
		z.string().array().safeParse(value).success;
	const isUrl = (value: string) => z.string().url().safeParse(value).success;
</script>

{#if isJsonParseable(value)}
	{@const jsonValue = JSON.parse(value)}
	{#if isStringArray(jsonValue)}
		{#each jsonValue as v}
			<Badge>{v}</Badge>
		{/each}
	{:else}
		{jsonValue}
	{/if}
{:else if isNumber(value)}
	{@const numberValue = Number(value)}
	{#if numberValue > 0}
		{numberValue}
	{:else}
		<Badge>{numberValue}</Badge>
	{/if}
{:else if isUrl(value)}
	<Button variant="link" href={value} target="_blank" rel="noopener noreferrer">Link</Button>
{:else}
	{value}
{/if}
