<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	const {response: {data: {courses}}} = data;
</script>

{#each courses as course}
	<div class="card">
		<div class="card-body">
			<h2 class="card-title">{course.computed_listing_infos_aggregate.nodes[0].all_course_codes}</h2>
			<h3 class="card-subtitle">{course.title}</h3>
			<p class="card-text">{course.description}</p>
		</div>
	</div>
{/each}
