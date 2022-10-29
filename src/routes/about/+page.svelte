<div class="mx-4 my-4 flex max-w-7xl flex-col gap-2 sm:my-10 sm:px-6 lg:px-8">
	<h1 class="text-4xl font-bold">Hello!</h1>
	<p>This app is designed to answer a single question: how can I browse Yale course reviews?</p>
	<h2 class="text-2xl font-bold">How it works</h2>
	<p>The app makes a graphql query to the Yale CourseTable API:</p>
	<div class="mockup-code">
		<pre class="px-6">
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
	<p>
		If you have any questions, bug reports, etc., please feel free to mail me at
		<a href="mailto:braden.wong@yale.edu" class="text-blue-200">braden.wong@yale.edu</a>.
	</p>
	<p>I hope you find this useful!! :D</p>
	<p>-Braden &#10084;</p>
</div>
