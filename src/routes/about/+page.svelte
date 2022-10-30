<script>
	import Collapse from './Collapse.svelte';
    let expanded = true
</script>

<div class="mx-auto my-4 flex max-w-7xl flex-col sm:my-10 sm:px-6 lg:px-8">
	<Collapse {expanded}>
		<h2 slot="title" class="text-4xl font-bold">What does it solve?</h2>
		<div slot="content">
			<p>
				This app is designed to help with one question: how can I browse <strong>all</strong> Yale course
				reviews? It aggregates all reviews and allows you to filter them down by keyword, department,
				etc.. It is especially useful for trying to find the best courses in a certain department.
			</p>
			<p>Choosing the right course can be lifechanging. Hopefully this helps with that.</p>
		</div>
	</Collapse>
	<Collapse>
		<h2 slot="title">Why not CourseTable?</h2>
		<p slot="content">
			I love <a href="https://www.coursetable.com/"> CourseTable</a>! This is designed to compliment
			rather than compete with
			<a href="https://www.coursetable.com/"> CourseTable </a>
			—in fact, it is built on top of CourseTable's backend API. JankTable specifically targets course
			<strong>reviews</strong> as opposed to other metrics. You are encouraged to use them side-by-side!
		</p>
	</Collapse>
	<Collapse>
		<h2 slot="title">How does it work?</h2>
		<div slot="content">
			<p>The app makes a graphql query to the Yale CourseTable API:</p>
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
		</div>
		<p>
			The results are then parsed into a format that&#39;s easy to work with and displayed in a
			table.
		</p>
	</Collapse>
	<Collapse>
		<h2 slot="title">Why is it called JankTable</h2>
		<p slot="content">
			Numerous reasons, one being how the GraphQL requests are being sent, and second how the Spring
			courses are filtered down—there is no way for , so instead, a separate request is made to
			fetch , and .
		</p>
	</Collapse>

	<Collapse>
		<h2 slot="title">What's the tech stack, and aren't you a CS Major?</h2>
		<p slot="content">
			This is built with SvelteKit+TailwindCSS (with DaisyUI) deployed on Vercel, with the external
			CourseTable GraphQL backend. I'm not a CS major, but I'm actually an <a
				href="http://catalog.yale.edu/ycps/subjects-of-instruction/ethics-politics-economics/"
			>
				Ethics, Politics, and Economics
			</a> major who happens to enjoy writing code.
		</p>
	</Collapse>
	<Collapse {expanded}>
		<h2 slot="title">How can I contact you?</h2>
		<div slot="content">
			<p>
				If you have any questions, bug reports, etc., please feel free to mail me at
				<a href="mailto:braden.wong@yale.edu">braden.wong@yale.edu</a>.
			</p>
			<p>
				I’m echoing
				<a href="https://devonzuegel.com/page/contact">Devon Zuegel’s</a>,
				<a href="https://danwang.co/contact">Dan Wang’s</a>,
				<a href="https://www.kalzumeus.com/standing-invitation">Patrick McKenzie’s</a>, and
				<a href="https://zhengdongwang.com/">Zhengdong Wang's</a>
				standing invitations. I really like getting email. If you ever want to chat, have any questions,
				bug reports, etc., please feel free to email me at
				<a href="mailto:braden.wong@yale.edu">braden.wong@yale.edu</a>.
			</p>
			<p>I hope you find this useful!! :D</p>
			<p>-Braden &#10084;</p>
		</div>
	</Collapse>
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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 1rem 0;
	}
</style>
