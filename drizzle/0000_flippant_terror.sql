CREATE TABLE `course_discussions` (
	`course_id` integer,
	`discussion_id` integer,
	PRIMARY KEY(`course_id`, `discussion_id`)
);
--> statement-breakpoint
CREATE TABLE `course_flags` (
	`course_id` integer,
	`flag_id` integer,
	PRIMARY KEY(`course_id`, `flag_id`)
);
--> statement-breakpoint
CREATE TABLE `course_professors` (
	`course_id` integer,
	`professor_id` integer,
	PRIMARY KEY(`course_id`, `professor_id`)
);
--> statement-breakpoint
CREATE TABLE `courses` (
	`course_id` integer PRIMARY KEY NOT NULL,
	`season_code` text NOT NULL,
	`title` text,
	`short_title` text,
	`description` text,
	`requirements` text,
	`locations_summary` text,
	`times_long_summary` text,
	`times_summary` text,
	`times_by_day` text,
	`skills` text,
	`areas` text,
	`credits` real,
	`syllabus_url` text,
	`course_home_url` text,
	`regnotes` text,
	`extra_info` text,
	`rp_attr` text,
	`classnotes` text,
	`final_exam` text,
	`fysem` integer,
	`sysem` integer,
	`colsem` integer,
	`average_rating` real,
	`average_rating_n` integer,
	`average_workload` real,
	`average_workload_n` integer,
	`average_rating_same_professors` real,
	`average_rating_same_professors_n` integer,
	`average_workload_same_professors` real,
	`average_workload_same_professors_n` integer,
	`last_offered_course_id` integer,
	`same_course_id` integer NOT NULL,
	`same_course_and_profs_id` integer NOT NULL,
	`last_enrollment_course_id` integer,
	`last_enrollment` integer,
	`last_enrollment_season_code` text
);
--> statement-breakpoint
CREATE TABLE `demand_statistics` (
	`course_id` integer PRIMARY KEY NOT NULL,
	`latest_demand` integer,
	`latest_demand_date` text,
	`demand` text
);
--> statement-breakpoint
CREATE TABLE `discussions` (
	`discussion_id` integer PRIMARY KEY NOT NULL,
	`subject` text NOT NULL,
	`number` text NOT NULL,
	`info` text,
	`locations_summary` text,
	`times_long_summary` text,
	`times_summary` text,
	`times_by_day` text
);
--> statement-breakpoint
CREATE TABLE `evaluation_narratives` (
	`id` integer PRIMARY KEY NOT NULL,
	`course_id` integer NOT NULL,
	`question_code` text NOT NULL,
	`comment` text,
	`comment_neg` real,
	`comment_neu` real,
	`comment_pos` real,
	`comment_compound` real
);
--> statement-breakpoint
CREATE TABLE `evaluation_questions` (
	`question_code` text PRIMARY KEY NOT NULL,
	`is_narrative` integer,
	`question_text` text,
	`options` text,
	`tag` text
);
--> statement-breakpoint
CREATE TABLE `evaluation_ratings` (
	`id` integer PRIMARY KEY NOT NULL,
	`course_id` integer NOT NULL,
	`question_code` text NOT NULL,
	`rating` text
);
--> statement-breakpoint
CREATE TABLE `evaluation_statistics` (
	`course_id` integer PRIMARY KEY NOT NULL,
	`enrollment` integer,
	`enrolled` integer,
	`responses` integer,
	`declined` integer,
	`no_response` integer,
	`extras` text,
	`avg_rating` real,
	`avg_workload` real
);
--> statement-breakpoint
CREATE TABLE `fasttext_similars` (
	`source` integer,
	`target` integer,
	`rank` integer,
	PRIMARY KEY(`source`, `target`)
);
--> statement-breakpoint
CREATE TABLE `flags` (
	`flag_id` integer PRIMARY KEY NOT NULL,
	`flag_text` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `listings` (
	`listing_id` integer PRIMARY KEY NOT NULL,
	`course_id` integer NOT NULL,
	`school` text,
	`subject` text NOT NULL,
	`number` text NOT NULL,
	`course_code` text,
	`section` text NOT NULL,
	`season_code` text NOT NULL,
	`crn` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `professors` (
	`professor_id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text,
	`average_rating` real,
	`average_rating_n` integer
);
--> statement-breakpoint
CREATE TABLE `seasons` (
	`season_code` text PRIMARY KEY NOT NULL,
	`term` text,
	`year` integer
);
--> statement-breakpoint
CREATE TABLE `tfidf_similars` (
	`source` integer,
	`target` integer,
	`rank` integer,
	PRIMARY KEY(`source`, `target`)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_season_code_crn_unique` ON `listings` (`season_code`,`crn`);--> statement-breakpoint
CREATE INDEX `idx_season_course_section_unique` ON `listings` (`season_code`,`subject`,`number`,`section`);