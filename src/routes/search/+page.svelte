<script lang="ts">
	import { ChevronRight, MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { SearchResponse } from 'src/routes/search/[keyword]/[course_keyword]/types';
	let keyword = '';
	let courseKeyword = '';

	$: keywordWithPercents = `%${keyword}%`;
	$: courseKeywordWithPercents = `%${courseKeyword}%`;

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	};

	let courses: SearchResponse['data']['courses'] = [
		{
			description:
				'Extreme and radical right movements and political parties are a recurrent phenomenon found in most parts of the world. Discussion of their foundational values and the causes of their continuous, even increasing, support among citizens and voters.',
			title: 'Extreme and Radical Right Movements',
			areas: ['So'],
			average_rating: 4.3505106005106,
			average_rating_same_professors: 4.3505106005106,
			average_workload: 3.086233211233212,
			average_workload_same_professors: 3.086233211233212,
			computed_listing_infos_aggregate: {
				nodes: [
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'ER&M 376',
						crn: 21822
					},
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'MGRK 304',
						crn: 21823
					},
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'PLSC 376',
						crn: 21821
					},
					{
						all_course_codes: ['ER&M 376', 'MGRK 304', 'PLSC 376', 'SOCY 307'],
						areas: ['So'],
						average_gut_rating: 1.2642773892773884,
						average_professor: 4.233843925252594,
						course_code: 'SOCY 307',
						crn: 21824
					}
				]
			},
			course_id: 59251,
			locations_summary: 'HGS 220B',
			requirements: null,
			skills: [],
			evaluation_narratives: [
				{
					comment: 'I learn a lot on the far right in Sweden'
				},
				{
					comment: 'I learned a great deal about research and paper writing.'
				},
				{
					comment:
						'This class really taught me how to think like a political scientist. I started thinking about the importance of defining terms and how definitions cannot span geography and time. As a result of this class, I have begun to think of extreme right parties, and generally political parties, in new ways.'
				},
				{
					comment:
						"This course helped me understand the many tensions within far-right movements, which in turn made me reflect on some of the political movements to which I subscribe. The radical right is a fascinating phenomenon to study and is particularly topical in today's world. Unfortunately, I do not feel that I have a cohesive understanding of it leaving the course, but that is mainly due to the fact that there is no cohesion among far-right groups across the world. I also credit Professor Aslanidis for helping make my writing more pithy and to the point."
				},
				{
					comment:
						'I got a broad sense of the motivations and history of the extreme and radical right in the US and Europe. I also got a sense of the nuance surrounding political science classifications of the extreme right and the difficulty that comes with that task. Moreover, I was exposed to in depth political science scholarly papers.'
				},
				{
					comment:
						'This course was interesting and engaging. By the nature of the subject, the seminars sometimes felt disconnected from each other, but other times connected perfectly. The radical right is such a disparate topic that it becomes difficult to put everything together. However, that is not the fault of the course or the professor.  The structure of assignments in this course is perfect. There are three reading response papers throughout the semester and then one substantial research paper at the end of the semester. This enabled me to go deeper into the material and to research a truly fascinating case.'
				},
				{
					comment:
						'Strengths: teaching, subject matter, class discussion.   Weaknesses: none, favorite class at yale.'
				},
				{
					comment: 'The readings were interesting but the class was not structured'
				},
				{
					comment:
						'This is an excellent course. I really enjoyed it. Potentially a bigger focus on country case studies and less on definitions, but overall outstanding!'
				},
				{
					comment:
						'My only note is that I wish the reading response instructions were more clear. Even by the third response, I was still unclear what the professor wanted. However, generally class was engaging and the readings interesting.'
				},
				{
					comment:
						'The strengths of the course are that it gives a very good overview of a number of cultures experiencing similar political phenomena (the extreme right). It also exposes you to modern diverse research on the topic. The discussions were engaging and informative and made good use of alternative forms of media like videos. One weakness was that the course really only focused on the US and Europe, largely due to existing scholarship being focused on these issues. Regardless, I would recommend devoting at least one lecture to other regions broadly if it is too difficult to find scholarship or a discussion on why scholarship is so thin in these areas. Also, some of the readings could be dry at times but that seemed relatively unavoidable.'
				},
				{
					comment:
						"Yes I would. Professor Aslanidis is fabulous, and any of his courses would be worth taking. You should only take this if you are interested in the subject, but Professor Aslanidis's passion helps other students feel passionate about the topic as well. Also the workload is very reasonable. It allowed me to learn a lot and stay engaged, but did not overwhelm me."
				},
				{
					comment:
						'Yes. Not only is the subject matter relevant and interesting, but Professor Aslanidis does a really good job of exposing students to a vast range of opinions and forcing them to really confront their inner biases. Every week I looked forward to class, and was eager to discuss the reading with both Professor Aslanidis and the class. If you have any interest in the Right, extremism, or really just the current political landscape, you have to take this class.'
				},
				{
					comment: 'Definitely! I learn so much'
				},
				{
					comment:
						"Yes absolutely. Professor Aslanidis is the best professor I've had at Yale (I previously took two of his other seminars) and this seminar deals with really engaging course material."
				},
				{
					comment: 'Yes! Be ready to think and think hard, but it is definitely worth it.'
				},
				{
					comment:
						'I would recommend this course to anyone interested in learning about what it means to be a part of the extreme right. It gives you a more complex understanding of a group of ideologies which are very hard to sympathize with but nontheless have seen a non-negligible amount of popularity around the world.'
				}
			]
		}
	];

	const onSubmit = async () => {
		console.log(
			'🚀 ~ file: +page.svelte ~ line 25 ~ onSubmit ~ courseKeywordWithPercents',
			courseKeywordWithPercents
		);
		console.log(
			'🚀 ~ file: +page.svelte ~ line 25 ~ onSubmit ~ keywordWithPercents',
			keywordWithPercents
		);
		// Send api request to search passing {keyword: keywordWithPercents, courseKeyword: courseKeywordWithPercents}
		const response = await fetch(
			`/api/search?keyword=${encodeURIComponent(
				keywordWithPercents
			)}&courseKeyword=${encodeURIComponent(courseKeywordWithPercents)}`
		);
		const data = (await response.json()) as SearchResponse;
		courses = data.data.courses;
		console.log('🚀 ~ file: +page.svelte ~ line 18 ~ onSubmit ~ data', data);
	};
</script>

<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
	<h2 class="mb-2 text-4xl font-extrabold md:text-6xl">Yale Course Keyword Search</h2>
	<h3 class="mb-4 text-3xl font-bold">
		A search box that allows you to search CourseTable reviews by keyword
	</h3>
	<!-- <p class="">Start by typing in this box:</p> -->
	<div class="w-full">
		<label for="search" class="sr-only">Search</label>
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<Icon src={MagnifyingGlass} class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</div>
			<input
				id="search"
				name="search"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
				placeholder="Search by course keyword...(use % to match anything)"
				type="search"
				bind:value={keyword}
				on:keydown={onKeydown}
			/>
		</div>
	</div>
	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			{#each courses as course}
				<li>
					<a href="#" class="block hover:bg-gray-50">
						<div class="flex items-center px-4 py-4 sm:px-6">
							<div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
								<div>
									<div class="flex text-sm">
										<p class="truncate font-medium text-primary">
											{course.computed_listing_infos_aggregate.nodes[0].all_course_codes}
											{course.title}
										</p>
										<p class="ml-1 flex-shrink-0 font-normal text-gray-500">
											<!-- in {course.description} -->
										</p>
									</div>
									<div class="mt-2 flex">
										<div class="flex items-center text-sm text-gray-500">
											{course.description}
										</div>
									</div>
								</div>
								<div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
									<div class="flex -space-x-1 overflow-hidden">
										<!-- <img v-for="applicant in position.applicants" :key="applicant.email" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" :src="applicant.imageUrl" :alt="applicant.name" /> -->
									</div>
								</div>
							</div>
							<div class="ml-5 flex-shrink-0">
								<Icon src={ChevronRight} class="h-5 w-5 text-gray-400" aria-hidden="true" />
							</div>
						</div>
					</a>
				</li>
				{#each course.evaluation_narratives as review}
					<li>
						<div class="px-4 py-4 sm:px-6">
							<p class="text-sm text-gray-500">{review.comment}</p>
						</div>
					</li>
				{/each}
			{/each}
		</ul>
	</div>
</div>

<div class="min-h-screen text-base-content" />
