<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
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
	<Button variant="link" href={value} target="_blank" rel="noopener noreferrer">Link</Button>
{:else}
	{value}
{/if}
