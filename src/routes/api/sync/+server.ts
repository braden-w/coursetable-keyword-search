import { COURSETABLE_COOKIE } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const GET = async () => {
	const options = {
		method: 'POST',
		headers: {
			cookie: COURSETABLE_COOKIE,
			'Content-Type': 'application/json'
		},
		body: '{"query":"query AllCourseEvaluations {\n  courses {\n    course_id\n    title\n    evaluation_narratives {\n      comment_compound\n    }\n  }\n}\n","operationName":"AllCourseEvaluations"}'
	};

	const res = await fetch('https://api.coursetable.com/ferry/v1/graphql', options);
	if (!res.ok) {
		return error(res.status, res.statusText);
	}
	const data = await res.json();
	console.log(data);
	return new Response();
};
