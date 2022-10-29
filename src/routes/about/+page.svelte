<div class="mx-4 my-4 flex max-w-7xl flex-col sm:my-10 sm:px-6 lg:px-8">
	<h1 class="text-4xl font-bold">What does it do?</h1>
	<p>
		This app is designed to help with one question: how can I browse all Yale course reviews? It
		aggregates all reviews and allows you to filter them down by keyword, department, etc.. It is
		especially useful for trying to find the best courses in a certain department.
	</p>
	<h2 class="text-2xl font-bold">Why not CourseTable?</h2>
	<p>
		I love <a href="https://www.coursetable.com/" class="text-blue-200"> CourseTable </a>! This is
		designed to compliment rather than compete with
		<a href="https://www.coursetable.com/" class="text-blue-200"> CourseTable </a>
		—in fact, it is built on top of CourseTable's backend API. You are encouraged to use it side-by-side!
	</p>
	<h2 class="text-2xl font-bold">How it works</h2>
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
	<p>
		The results are then parsed into a format that&#39;s easy to work with and displayed in a table.
	</p>
	<h2 class="text-2xl font-bold">Why is it called JankTable</h2>
	<p>
		Numerous reasons, one being how Spring courses are filtered down—there is no way for , so
		instead, a separate request is made to fetch , and .
	</p>

	<p>
		If you have any questions, bug reports, etc., please feel free to mail me at
		<a href="mailto:braden.wong@yale.edu" class="text-blue-200">braden.wong@yale.edu</a>.
	</p>
	<p>
		I’m echoing
		<a href="https://devonzuegel.com/page/contact">Devon Zuegel’s</a>,
		<a href="https://danwang.co/contact">Dan Wang’s</a>,
		<a href="https://www.kalzumeus.com/standing-invitation">Patrick McKenzie’s</a>, and
		<a href="https://zhengdongwang.com/">Zhengdong Wang's</a>
		standing invitations. I really like getting email. If you have any questions, bug reports, etc.,
		please feel free to mail me at
		<a href="mailto:braden.wong@yale.edu" class="text-blue-200">braden.wong@yale.edu</a>.
	</p>
	<p>I hope you find this useful!! :D</p>
	<p>-Braden &#10084;</p>
</div>

<style>
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
