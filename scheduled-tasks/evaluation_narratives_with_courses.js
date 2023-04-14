import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fetchCourseTable } from './index.js';

dotenv.config();

// Define a function to fetch results in batches of 5000
async function fetchBatchedResults({ offset, limit }) {
	const query = `
  query evaluation_narratives_with_courses ($limit: Int, $offset: Int){
  	evaluation_narratives (limit: $limit, offset: $offset) {
      id
      course_id
      comment
      comment_compound
      course {
        computed_listing_infos {
          all_course_codes
          areas
          average_gut_rating
          average_professor
          average_rating
          average_workload
          average_rating_same_professors
          average_workload_same_professors
          classnotes
          course_code
          credits
          crn
          description
          enrolled
          extra_info
          final_exam
          flag_info
          fysem
          last_enrollment
          last_enrollment_same_professors
          listing_id
          locations_summary
          number
          professor_ids
          professor_names
          regnotes
          requirements
          rp_attr
          same_course_id
          same_course_and_profs_id
          last_offered_course_id
          school
          season_code
          section
          skills
          subject
          syllabus_url
          times_by_day
          times_summary
          title
        }
      }
    }
  }
  `;
	const variables = {};

	const { data } = await fetchCourseTable(query, variables);

	const { evaluation_narratives } = data;
	console.log(
		'🚀 ~ file: evaluation_narratives_with_courses.js:69 ~ fetchBatchedResults ~ evaluation_narratives:',
		evaluation_narratives
	);
	const flattenedResults = evaluation_narratives.map(
		({
			course: {
				computed_listing_infos: [course]
			},
			...rest
		}) => ({
			...rest,
			...course
		})
	);
	return flattenedResults;
}

// Define a function to fetch all results using Promise.all
async function fetchAllResults() {
	const limit = 10;
	const batchSize = 1;

	async function fetchBatchResults(offset) {
		const batchPromises = Array.from({ length: batchSize }, (_, i) =>
			fetchBatchedResults({ offset: offset + i * limit, limit })
		);
		return Promise.all(batchPromises);
	}

	const flattenResults = (acc, results) => [...acc, ...results];

	const isBatchEmpty = (batchResults) => batchResults.every((results) => results.length === 0);

	async function fetchAndProcessBatches(offset, allResults) {
		const batchResults = await fetchBatchResults(offset);
		console.log(batchResults);

		if (isBatchEmpty(batchResults)) {
			return allResults;
		}

		const newAllResults = batchResults.reduce(flattenResults, allResults);
		return fetchAndProcessBatches(offset + batchSize * limit, newAllResults);
	}

	return fetchAndProcessBatches(0, []);
}

// Call the fetchAllResults function and log the results
fetchAllResults()
	.then((results) => {
		console.log(results);
	})
	.catch((error) => {
		console.error(error);
	});
