import { sql } from 'drizzle-orm';
import { db } from './src/lib/server/db';
import { courses, evaluation_narratives } from './src/lib/server/schema';

export async function insertAveragesOfCourses() {
	try {
		await db.run(sql`WITH avg_comments AS (
			SELECT
				${evaluation_narratives.course_id},
				AVG(${evaluation_narratives.comment_neg}) as avg_comment_neg,
				AVG(${evaluation_narratives.comment_neu}) as avg_comment_neu,
				AVG(${evaluation_narratives.comment_pos}) as avg_comment_pos,
				AVG(${evaluation_narratives.comment_compound}) as avg_comment_compound
			FROM ${evaluation_narratives}
			GROUP BY ${evaluation_narratives.course_id}
		)
		UPDATE ${courses}
			SET
				average_comment_neg = (SELECT avg_comment_neg FROM avg_comments WHERE ${courses.course_id} = avg_comments.course_id),
				average_comment_neu = (SELECT avg_comment_neu FROM avg_comments WHERE ${courses.course_id} = avg_comments.course_id),
				average_comment_pos = (SELECT avg_comment_pos FROM avg_comments WHERE ${courses.course_id} = avg_comments.course_id),
				average_comment_compound = (SELECT avg_comment_compound FROM avg_comments WHERE ${courses.course_id} = avg_comments.course_id);
		`);
	} catch (e) {
		console.error(e);
	}
}

insertAveragesOfCourses();
