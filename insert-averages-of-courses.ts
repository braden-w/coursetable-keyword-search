import { sql } from 'drizzle-orm';
import { db } from './src/lib/server/db/db';
import { courses, evaluation_narratives } from './src/lib/server/db/schema';

export async function insertAveragesOfCourses() {
	try {
		await db.run(sql`UPDATE ${courses}
			SET ${sql.raw(`average_comment_neg`)} = (
					SELECT AVG(${evaluation_narratives.comment_neg})
					FROM ${evaluation_narratives}
					WHERE ${courses.course_id} = ${evaluation_narratives.course_id}
			),
			${sql.raw(`average_comment_neu`)} = (
					SELECT AVG(${evaluation_narratives.comment_neu})
					FROM ${evaluation_narratives}
					WHERE ${courses.course_id} = ${evaluation_narratives.course_id}
			),
			${sql.raw(`average_comment_pos`)} = (
					SELECT AVG(${evaluation_narratives.comment_pos})
					FROM ${evaluation_narratives}
					WHERE ${courses.course_id} = ${evaluation_narratives.course_id}
			),
			${sql.raw(`average_comment_compound`)} = (
					SELECT AVG(${evaluation_narratives.comment_compound})
					FROM ${evaluation_narratives}
					WHERE ${courses.course_id} = ${evaluation_narratives.course_id}
			);
		`);
	} catch (e) {
		console.error(e);
	}
}

insertAveragesOfCourses();
