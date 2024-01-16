import { sql } from 'drizzle-orm';
import { db } from '../src/lib/server/db';
import { courses, evaluation_narratives } from '../src/lib/server/schema';

/**
 * For each course, takes the averages of the comment sentiments with matching course_id.
 */
export async function insertAveragesOfCommentSentimentsOfCourses() {
	try {
		await db.run(sql`WITH average_comments AS (
			SELECT
				${evaluation_narratives.course_id},
				AVG(${evaluation_narratives.comment_neg}) as average_comment_neg,
				COUNT(${evaluation_narratives.comment_neg}) as average_comment_neg_n,
				AVG(${evaluation_narratives.comment_neu}) as average_comment_neu,
				COUNT(${evaluation_narratives.comment_neu}) as average_comment_neu_n,
				AVG(${evaluation_narratives.comment_pos}) as average_comment_pos,
				COUNT(${evaluation_narratives.comment_pos}) as average_comment_pos_n,
				AVG(${evaluation_narratives.comment_compound}) as average_comment_compound,
				COUNT(${evaluation_narratives.comment_compound}) as average_comment_compound_n
			FROM ${evaluation_narratives}
			GROUP BY ${evaluation_narratives.course_id}
		)
		UPDATE ${courses}
			SET
				average_comment_neg = (SELECT average_comment_neg FROM average_comments WHERE ${courses.course_id} = average_comments.course_id),
				average_comment_neg_n = (SELECT average_comment_neg_n FROM average_comments WHERE ${courses.course_id} = average_comments.course_id),
				average_comment_neu = (SELECT average_comment_neu FROM average_comments WHERE ${courses.course_id} = average_comments.course_id),
				average_comment_neu_n = (SELECT average_comment_neu_n FROM average_comments WHERE ${courses.course_id} = average_comments.course_id),
				average_comment_pos = (SELECT average_comment_pos FROM average_comments WHERE ${courses.course_id} = average_comments.course_id),
				average_comment_pos_n = (SELECT average_comment_pos_n FROM average_comments WHERE ${courses.course_id} = average_comments.course_id),
				average_comment_compound = (SELECT average_comment_compound FROM average_comments WHERE ${courses.course_id} = average_comments.course_id);
				average_comment_compound_n = (SELECT average_comment_compound_n FROM average_comments WHERE ${courses.course_id} = average_comments.course_id);
		`);
	} catch (e) {
		console.error(e);
	}
}
