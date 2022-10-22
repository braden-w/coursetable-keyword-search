import { env } from '$env/dynamic/public';

const options = {
	method: 'POST',
	headers: {
		Cookie: env.PUBLIC_COURSETABLE_COOKIE,
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		query: `
        query {
	courses (limit:10)
	{
		description
		title
		areas
		average_rating
		average_rating_same_professors
		average_workload
		average_workload_same_professors
		computed_listing_infos_aggregate {
			nodes {
				all_course_codes
				areas
				average_gut_rating
				average_professor
				course_code
				crn
			}
		}
		course_id
		description
		locations_summary
		requirements
		skills
		evaluation_narratives {
			comment
		}
	}
}
      `,
		variables: {}
	})
};

fetch('https://api.coursetable.com/ferry/v1/graphql?=', options)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));
