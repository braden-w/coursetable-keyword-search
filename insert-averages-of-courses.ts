import { sql } from 'drizzle-orm';
import { db } from './src/lib/server/db';
import { courses, evaluation_narratives } from './src/lib/server/schema';

export async function insertAveragesOfCourses() {
	try {
		await db.run(sql`WITH avg_comments AS (
			SELECT
        course_id,
        AVG(comment_neg) AS avg_comment_neg,
        AVG(comment_neu) AS avg_comment_neu,
        AVG(comment_pos) AS avg_comment_pos,
        AVG(comment_compound) AS avg_comment_compound
			FROM evaluation_narratives
			GROUP BY course_id
		)
		UPDATE courses
			SET
				average_comment_neg = (SELECT avg_comment_neg FROM avg_comments WHERE courses.course_id = avg_comments.course_id),
				average_comment_neu = (SELECT avg_comment_neu FROM avg_comments WHERE courses.course_id = avg_comments.course_id),
				average_comment_pos = (SELECT avg_comment_pos FROM avg_comments WHERE courses.course_id = avg_comments.course_id),
				average_comment_compound = (SELECT avg_comment_compound FROM avg_comments WHERE courses.course_id = avg_comments.course_id);
		`);
	} catch (e) {
		console.error(e);
	}
}

insertAveragesOfCourses();
