<script lang="ts">
	export let keyword: string = '	';
</script>

<button
	id={keyword}
	name={keyword}
	class="inline-flex rounded-md text-sm shadow-sm hover:bg-gray-50 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
>
	<span
		class="-mr-px rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-6 font-medium text-gray-700"
	>
		{keyword}
	</span>
	<span class="rounded-r-md border border-gray-300 bg-white px-2 py-2">
		<p>100</p>
	</span>
	<label for={keyword} class="sr-only">Select keyword</label>
</button>
