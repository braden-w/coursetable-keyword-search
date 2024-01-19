<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';
	import { z } from 'zod';

	export let value: string | number | boolean | string[] | Record<string, string[][]> | null;

	const isNullString = (value: string) => value === 'null';
	const isJsonParseable = (value: string) => {
		try {
			JSON.parse(value);
			return true;
		} catch {
			return false;
		}
	};
	const isString = (value: unknown): value is string => z.string().safeParse(value).success;
	const isNumber = (value: unknown): value is number => z.number().safeParse(value).success;
	const isBoolean = (value: unknown): value is boolean => z.boolean().safeParse(value).success;
	const isStringArray = (value: unknown): value is string[] =>
		z.string().array().safeParse(value).success;
	const isUrl = (value: string) => z.string().url().safeParse(value).success;
</script>

{#if isString(value)}
	{#if isJsonParseable(value)}
		{@const jsonValue = JSON.parse(value)}
		{#if isStringArray(jsonValue)}
			{#each jsonValue as v}
				<Badge>{v}</Badge>
			{/each}
		{:else}
			{jsonValue}
		{/if}
	{:else if isUrl(value)}
		<Button variant="link" href={value} target="_blank" rel="noopener noreferrer">Link</Button>
	{:else if isNullString(value)}
		{''}
	{:else}
		{value}
	{/if}
{:else if isNumber(value)}
	{#if Number.isInteger(value)}
		{value}
	{:else if value > 1}
		<div class="flex flex-col gap-1">
			{value.toFixed(2)}
			<Progress class="w-full max-w-16 h-1" {value} max={5}></Progress>
		</div>
	{:else}
		<div class="flex flex-col gap-1">
			{value.toFixed(3)}
			<Progress class="w-full max-w-16 h-1" {value} max={1}></Progress>
		</div>
	{/if}
{:else if isBoolean(value)}
	{value ? 'Yes' : 'No'}
{:else if value === null}
	{''}
{:else if isStringArray(value)}
	{#each value as v}
		<Badge>{v}</Badge>
	{/each}
{/if}
