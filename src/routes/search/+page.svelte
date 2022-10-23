<script lang="ts">
	import { MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	let keyword = '';
	let courseKeyword = '';

	$: keywordWithPercents = `%${keyword}%`;
	$: courseKeywordWithPercents = `%${courseKeyword}%`;

	const onSubmit = async () => {
		// Send api request to search passing {keyword: keywordWithPercents, courseKeyword: courseKeywordWithPercents}
		const response = await fetch(
			`/api/search?keyword=${encodeURIComponent(
				keywordWithPercents
			)}&courseKeyword=${encodeURIComponent(courseKeywordWithPercents)}`
		);
		const data = await response.json();
	};
</script>

<div class="hero bg-base-100 text-base-content">
	<div class="hero-overlay h-screen bg-opacity-60" />
	<div class="hero-content">
		<div>
			<h2 class="mb-2 text-4xl font-extrabold md:text-6xl">Yale Course Keyword Search</h2>
			<h3 class="mb-4 text-3xl font-bold">
				A search box that allows you to search CourseTable reviews by keyword
			</h3>
			<!-- <p class="">Start by typing in this box:</p> -->
			<div class="form-control">
				<div class="input-group">
					<span>Search course reviews with</span>
					<input type="text" placeholder="Keyword..." class="input input-bordered" bind:value={keyword}/>
					<span>for courses that start with</span>
					<input type="text" placeholder="ECON, CPSC, PLSC..." class="input input-bordered" bind:value={courseKeyword}/>
					<button class="btn" on:click={onSubmit}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						Search
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
