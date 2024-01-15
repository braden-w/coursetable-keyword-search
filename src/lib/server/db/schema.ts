import {
	foreignKey,
	index,
	integer,
	numeric,
	primaryKey,
	real,
	sqliteTable,
	text,
	uniqueIndex
} from 'drizzle-orm/sqlite-core';

export const seasons = sqliteTable('seasons', {
	seasonCode: text('season_code').primaryKey(),
	term: text('term'),
	year: integer('year')
});

export const courses = sqliteTable(
	'courses',
	{
		courseId: integer('course_id').primaryKey(),
		seasonCode: text('season_code')
			.notNull()
			.references(() => seasons.seasonCode),
		title: text('title'),
		shortTitle: text('short_title'),
		description: text('description'),
		requirements: text('requirements'),
		locationsSummary: text('locations_summary'),
		timesLongSummary: text('times_long_summary'),
		timesSummary: text('times_summary'),
		timesByDay: text('times_by_day'),
		skills: text('skills'),
		areas: text('areas'),
		credits: real('credits'),
		syllabusUrl: text('syllabus_url'),
		courseHomeUrl: text('course_home_url'),
		regnotes: text('regnotes'),
		extraInfo: text('extra_info'),
		rpAttr: text('rp_attr'),
		classnotes: text('classnotes'),
		finalExam: text('final_exam'),
		fysem: numeric('fysem'),
		sysem: numeric('sysem'),
		colsem: numeric('colsem'),
		averageRating: real('average_rating'),
		averageRatingN: integer('average_rating_n'),
		averageWorkload: real('average_workload'),
		averageWorkloadN: integer('average_workload_n'),
		averageRatingSameProfessors: real('average_rating_same_professors'),
		averageRatingSameProfessorsN: integer('average_rating_same_professors_n'),
		averageWorkloadSameProfessors: real('average_workload_same_professors'),
		averageWorkloadSameProfessorsN: integer('average_workload_same_professors_n'),
		lastOfferedCourseId: integer('last_offered_course_id'),
		sameCourseId: integer('same_course_id').notNull(),
		sameCourseAndProfsId: integer('same_course_and_profs_id').notNull(),
		lastEnrollmentCourseId: integer('last_enrollment_course_id'),
		lastEnrollment: integer('last_enrollment'),
		lastEnrollmentSeasonCode: text('last_enrollment_season_code').references(
			() => seasons.seasonCode
		)
	},
	(table) => {
		return {
			coursesLastOfferedCourseIdCoursesCourseIdFk: foreignKey({
				columns: [table.lastOfferedCourseId],
				foreignColumns: [table.courseId],
				name: 'courses_last_offered_course_id_courses_course_id_fk'
			}),
			coursesLastEnrollmentCourseIdCoursesCourseIdFk: foreignKey({
				columns: [table.lastEnrollmentCourseId],
				foreignColumns: [table.courseId],
				name: 'courses_last_enrollment_course_id_courses_course_id_fk'
			})
		};
	}
);

export const listings = sqliteTable(
	'listings',
	{
		listingId: integer('listing_id').primaryKey(),
		courseId: integer('course_id')
			.notNull()
			.references(() => courses.courseId),
		school: text('school'),
		subject: text('subject').notNull(),
		number: text('number').notNull(),
		courseCode: text('course_code'),
		section: text('section').notNull(),
		seasonCode: text('season_code')
			.notNull()
			.references(() => seasons.seasonCode),
		crn: integer('crn').notNull()
	},
	(table) => {
		return {
			idxSeasonCodeCrnUnique: uniqueIndex('idx_season_code_crn_unique').on(
				table.seasonCode,
				table.crn
			),
			idxSeasonCourseSectionUnique: index('idx_season_course_section_unique').on(
				table.seasonCode,
				table.subject,
				table.number,
				table.section
			)
		};
	}
);

export const discussions = sqliteTable('discussions', {
	discussionId: integer('discussion_id').primaryKey(),
	subject: text('subject').notNull(),
	number: text('number').notNull(),
	info: text('info'),
	locationsSummary: text('locations_summary'),
	timesLongSummary: text('times_long_summary'),
	timesSummary: text('times_summary'),
	timesByDay: text('times_by_day')
});

export const flags = sqliteTable('flags', {
	flagId: integer('flag_id').primaryKey(),
	flagText: text('flag_text').notNull()
});

export const demandStatistics = sqliteTable('demand_statistics', {
	courseId: integer('course_id')
		.primaryKey()
		.references(() => courses.courseId),
	latestDemand: integer('latest_demand'),
	latestDemandDate: text('latest_demand_date'),
	demand: text('demand')
});

export const professors = sqliteTable('professors', {
	professorId: integer('professor_id').primaryKey(),
	name: text('name').notNull(),
	email: text('email'),
	averageRating: real('average_rating'),
	averageRatingN: integer('average_rating_n')
});

export const evaluationStatistics = sqliteTable('evaluation_statistics', {
	courseId: integer('course_id')
		.primaryKey()
		.references(() => courses.courseId),
	enrollment: integer('enrollment'),
	enrolled: integer('enrolled'),
	responses: integer('responses'),
	declined: integer('declined'),
	noResponse: integer('no_response'),
	extras: text('extras'),
	avgRating: real('avg_rating'),
	avgWorkload: real('avg_workload')
});

export const evaluationQuestions = sqliteTable('evaluation_questions', {
	questionCode: text('question_code').primaryKey(),
	isNarrative: numeric('is_narrative'),
	questionText: text('question_text'),
	options: text('options'),
	tag: text('tag')
});

export const evaluationNarratives = sqliteTable('evaluation_narratives', {
	id: integer('id').primaryKey(),
	courseId: integer('course_id')
		.notNull()
		.references(() => courses.courseId),
	questionCode: text('question_code')
		.notNull()
		.references(() => evaluationQuestions.questionCode),
	comment: text('COMMENT'),
	commentNeg: real('comment_neg'),
	commentNeu: real('comment_neu'),
	commentPos: real('comment_pos'),
	commentCompound: real('comment_compound')
});

export const evaluationRatings = sqliteTable('evaluation_ratings', {
	id: integer('id').primaryKey(),
	courseId: integer('course_id')
		.notNull()
		.references(() => courses.courseId),
	questionCode: text('question_code')
		.notNull()
		.references(() => evaluationQuestions.questionCode),
	rating: text('rating')
});

export const courseProfessors = sqliteTable(
	'course_professors',
	{
		courseId: integer('course_id').references(() => courses.courseId),
		professorId: integer('professor_id').references(() => professors.professorId)
	},
	(table) => {
		return {
			pk0: primaryKey({
				columns: [table.courseId, table.professorId],
				name: 'course_professors_course_id_professor_id_pk'
			})
		};
	}
);

export const courseDiscussions = sqliteTable(
	'course_discussions',
	{
		courseId: integer('course_id').references(() => courses.courseId),
		discussionId: integer('discussion_id').references(() => discussions.discussionId)
	},
	(table) => {
		return {
			pk0: primaryKey({
				columns: [table.courseId, table.discussionId],
				name: 'course_discussions_course_id_discussion_id_pk'
			})
		};
	}
);

export const courseFlags = sqliteTable(
	'course_flags',
	{
		courseId: integer('course_id').references(() => courses.courseId),
		flagId: integer('flag_id').references(() => flags.flagId)
	},
	(table) => {
		return {
			pk0: primaryKey({
				columns: [table.courseId, table.flagId],
				name: 'course_flags_course_id_flag_id_pk'
			})
		};
	}
);

export const fasttextSimilars = sqliteTable(
	'fasttext_similars',
	{
		source: integer('source').references(() => courses.courseId),
		target: integer('target').references(() => courses.courseId),
		rank: integer('rank')
	},
	(table) => {
		return {
			pk0: primaryKey({
				columns: [table.source, table.target],
				name: 'fasttext_similars_source_target_pk'
			})
		};
	}
);

export const tfidfSimilars = sqliteTable(
	'tfidf_similars',
	{
		source: integer('source').references(() => courses.courseId),
		target: integer('target').references(() => courses.courseId),
		rank: integer('rank')
	},
	(table) => {
		return {
			pk0: primaryKey({
				columns: [table.source, table.target],
				name: 'tfidf_similars_source_target_pk'
			})
		};
	}
);
