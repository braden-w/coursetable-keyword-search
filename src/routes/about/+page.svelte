<script>
	import * as Collapsible from '$lib/components/ui/collapsible';
</script>

<div class="mx-auto my-4 flex max-w-7xl flex-col sm:my-10 sm:px-6 lg:px-8">
	<Collapsible.Root>
		<Collapsible.Trigger class="w-full text-left">
			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				What does it solve?
			</h2>
		</Collapsible.Trigger>
		<Collapsible.Content>
			<p>
				This app is designed to help with one question: how can I browse <strong>all</strong> Yale course
				reviews? It aggregates all reviews and allows you to filter them down by keyword, department,
				etc.. It is especially useful for trying to find the best courses in a certain department.
			</p>
			<p>Choosing the right course can be lifechanging. Hopefully this helps with that.</p>
		</Collapsible.Content>
	</Collapsible.Root>
	<Collapsible.Root>
		<Collapsible.Trigger class="w-full text-left">
			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				Why not CourseTable
			</h2>
		</Collapsible.Trigger>
		<Collapsible.Content>
			<p>
				I love <a href="https://www.coursetable.com/"> CourseTable</a>! This is designed to
				compliment rather than compete with
				<a href="https://www.coursetable.com/"> CourseTable </a>
				—in fact, it is built on top of CourseTable's backend API. JankTable specifically targets course
				<strong>reviews</strong> as opposed to other metrics. You are encouraged to use them side-by-side!
			</p>
		</Collapsible.Content>
	</Collapsible.Root>
	<Collapsible.Root>
		<Collapsible.Trigger class="w-full text-left">
			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				How does it work?
			</h2>
		</Collapsible.Trigger>
		<Collapsible.Content>
			<p>
				The app makes a request under the "/api/search" route, which runs a graphql query to the
				Yale CourseTable API:
			</p>
			<div class="mockup-code">
				<pre class="px-6 text-sm">
	<code class="lang-graphql">
{@html `query searchCoursesByKeyword(
    $keyword: String!
    $course_keyword: String!
) {
    computed_listing_info_aggregate(
        where: {
            _and: [
                { course_code: { _ilike: $course_keyword } }
                { course: { evaluation_narratives: { comment: { _ilike: $keyword } } } }
            ]
        }
        order_by: { course: { evaluation_narratives_aggregate: { count: desc } } }
    ) {
        aggregate {
            count
        }
        nodes {
            all_course_codes
            areas
            course_code
            credits
            description
            listing_id
            same_course_id
            season_code
            skills
            title
            course {
                evaluation_narratives_aggregate_filtered: evaluation_narratives_aggregate(
                    where: { comment: { _ilike: $keyword } }
                ) {
                    aggregate {
                        count
                    }
                    nodes {
                        comment
                    }
                }
                evaluation_narratives_aggregate {
                    aggregate {
                        count
                    }
                }
            }
        }
    }
}`}
</code>
</pre>
			</div>
			<p>
				Which is called under the "/api/search" route. The results are then parsed into a format
				that&#39;s easy to work with and displayed in a table. The results are then cached in Redis
				for 24 hours.
			</p>
		</Collapsible.Content>
	</Collapsible.Root>
	<Collapsible.Root>
		<Collapsible.Trigger class="w-full text-left">
			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				Why is it called JankTable?
			</h2>
		</Collapsible.Trigger>
		<Collapsible.Content>
			<p>
				Numerous reasons/design decisions, one being how I was able to make the GraphQL requests to
				work when CourseTable's GraphQL playground is down, and second how the Spring courses are
				filtered client side because I couldn't figure out how to filter them in the GraphQL query
				server side.
			</p>
			<p>Also, JankTable is just more memorable!</p>
		</Collapsible.Content>
	</Collapsible.Root>

	<Collapsible.Root>
		<Collapsible.Trigger class="w-full text-left">
			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				What's the tech stack, and aren't you a CS Major?
			</h2>
		</Collapsible.Trigger>
		<Collapsible.Content>
			<p>
				This is built with SvelteKit+TailwindCSS (with DaisyUI) deployed on Vercel, with the
				external CourseTable GraphQL backend.
			</p>

			<p>
				I'm not a CS major, but I'm actually an <a
					href="http://catalog.yale.edu/ycps/subjects-of-instruction/ethics-politics-economics/"
				>
					Ethics, Politics, and Economics
				</a> major who happens to enjoy writing code.
			</p>
		</Collapsible.Content>
	</Collapsible.Root>

	<Collapsible.Root>
		<Collapsible.Trigger class="w-full text-left">
			<h2
				class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				What's next?
			</h2>
		</Collapsible.Trigger>
		<Collapsible.Content>
			<p>
				I’m echoing
				<a href="https://devonzuegel.com/page/contact">Devon Zuegel’s</a>,
				<a href="https://danwang.co/contact">Dan Wang’s</a>,
				<a href="https://www.kalzumeus.com/standing-invitation">Patrick McKenzie’s</a>, and
				<a href="https://zhengdongwang.com/">Zhengdong Wang's</a>
				standing invitations. I really like getting email. If you ever want to chat, have any questions,
				bug reports, etc., please feel free to
				<a href="mailto:braden.wong@yale.edu">email me</a>.
			</p>
			<p>I hope you find this useful!! :D</p>
			<p>-Braden &#10084;</p>
		</Collapsible.Content>
	</Collapsible.Root>
</div>

<style>
	/* Highlight anchor tags */
	a {
		color: #4299e1;
	}

	/* Add paragraph styling*/
	p {
		margin: 0.5rem 0;
	}

	/* Add heading styling */
	h2 {
		margin: 1rem 0;
	}
</style>
