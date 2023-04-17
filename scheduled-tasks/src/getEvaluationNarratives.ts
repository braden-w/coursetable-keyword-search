import { fetchCourseTable } from './fetchCourseTable.js';

async function getEvaluationNarratives() {
	const query = `
	query {
		evaluation_narratives {
			id
			course_id
			comment
			comment_compound
		}
	}
	`;
	const variables = {};

	try {
		const {
			data: { evaluation_narratives }
		} = await fetchCourseTable(query, variables);
		return evaluation_narratives;
	} catch (err) {
		console.error(err);
	}
}
