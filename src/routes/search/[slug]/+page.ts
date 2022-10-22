import axios from 'axios';
import { env } from '$env/dynamic/public'

const options = {
	method: 'POST',
	url: 'https://api.coursetable.com/ferry/v1/graphql',
	params: { '': '' },
	headers: {
		Cookie: env.PUBLIC_COURSETABLE_COOKIE,
		origin: 'https://www.coursetable.com',
		Referer: 'https://www.coursetable.com',
		'Content-Type': 'application/json'
	},
	data: '{"query":"query {\n\tcourses (limit:10)\n\t{\n\t\tdescription\n\t\ttitle\n\t\tareas\n\t\taverage_rating\n\t\taverage_rating_same_professors\n\t\taverage_workload\n\t\taverage_workload_same_professors\n\t\tcomputed_listing_infos_aggregate {\n\t\t\tnodes {\n\t\t\t\tall_course_codes\n\t\t\t\tareas\n\t\t\t\taverage_gut_rating\n\t\t\t\taverage_professor\n\t\t\t\tcourse_code\n\t\t\t\tcrn\n\t\t\t}\n\t\t}\n\t\tcourse_id\n\t\tdescription\n\t\tlocations_summary\n\t\trequirements\n\t\tskills\n\t\tevaluation_narratives {\n\t\t\tcomment\n\t\t}\n\t}\n}"}'
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});