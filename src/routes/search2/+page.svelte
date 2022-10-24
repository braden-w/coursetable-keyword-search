<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	const courses = data.response.data.computed_listing_info_aggregate.nodes;
</script>

{#each courses as course}
	<div class="card">
		<div class="card-body">
			<h2 class="card-title">{course.all_course_codes}</h2>
			<h3 class="card-subtitle">{course.title}</h3>
			<p class="card-text">{course.description}</p>
		</div>
		{#each course.course.evaluation_narratives_aggregate_filtered.nodes as review}
		<div class="card-body">
			<!-- <h3 class="card-title">{review.comment}</h3> -->
			<p class="card-text">{review.comment}</p>
			</div>
		{/each}
	</div>
{/each}
