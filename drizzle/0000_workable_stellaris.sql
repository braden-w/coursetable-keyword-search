-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `seasons` (
	`season_code` text PRIMARY KEY,
	`term` text,
	`year` integer
);
--> statement-breakpoint
CREATE TABLE `courses` (
	`course_id` integer PRIMARY KEY,
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
	`fysem` numeric,
	`sysem` numeric,
	`colsem` numeric,
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
	`last_enrollment_season_code` text,
	FOREIGN KEY (`last_enrollment_season_code`) REFERENCES `seasons`(`season_code`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_enrollment_course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_offered_course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`season_code`) REFERENCES `seasons`(`season_code`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `listings` (
	`listing_id` integer PRIMARY KEY,
	`course_id` integer NOT NULL,
	`school` text,
	`subject` text NOT NULL,
	`number` text NOT NULL,
	`course_code` text,
	`section` text NOT NULL,
	`season_code` text NOT NULL,
	`crn` integer NOT NULL,
	FOREIGN KEY (`season_code`) REFERENCES `seasons`(`season_code`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `discussions` (
	`discussion_id` integer PRIMARY KEY,
	`subject` text NOT NULL,
	`number` text NOT NULL,
	`info` text,
	`locations_summary` text,
	`times_long_summary` text,
	`times_summary` text,
	`times_by_day` text
);
--> statement-breakpoint
CREATE TABLE `flags` (
	`flag_id` integer PRIMARY KEY,
	`flag_text` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `demand_statistics` (
	`course_id` integer PRIMARY KEY,
	`latest_demand` integer,
	`latest_demand_date` text,
	`demand` text,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `professors` (
	`professor_id` integer PRIMARY KEY,
	`name` text NOT NULL,
	`email` text,
	`average_rating` real,
	`average_rating_n` integer
);
--> statement-breakpoint
CREATE TABLE `evaluation_statistics` (
	`course_id` integer PRIMARY KEY,
	`enrollment` integer,
	`enrolled` integer,
	`responses` integer,
	`declined` integer,
	`no_response` integer,
	`extras` text,
	`avg_rating` real,
	`avg_workload` real,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `evaluation_questions` (
	`question_code` text PRIMARY KEY,
	`is_narrative` numeric,
	`question_text` text,
	`options` text,
	`tag` text
);
--> statement-breakpoint
CREATE TABLE `evaluation_narratives` (
	`id` integer PRIMARY KEY,
	`course_id` integer NOT NULL,
	`question_code` text NOT NULL,
	`COMMENT` text,
	`comment_neg` real,
	`comment_neu` real,
	`comment_pos` real,
	`comment_compound` real,
	FOREIGN KEY (`question_code`) REFERENCES `evaluation_questions`(`question_code`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `evaluation_ratings` (
	`id` integer PRIMARY KEY,
	`course_id` integer NOT NULL,
	`question_code` text NOT NULL,
	`rating` text,
	FOREIGN KEY (`question_code`) REFERENCES `evaluation_questions`(`question_code`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `course_professors` (
	`course_id` integer,
	`professor_id` integer,
	PRIMARY KEY(`course_id`, `professor_id`),
	FOREIGN KEY (`professor_id`) REFERENCES `professors`(`professor_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `course_discussions` (
	`course_id` integer,
	`discussion_id` integer,
	PRIMARY KEY(`course_id`, `discussion_id`),
	FOREIGN KEY (`discussion_id`) REFERENCES `discussions`(`discussion_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `course_flags` (
	`course_id` integer,
	`flag_id` integer,
	PRIMARY KEY(`course_id`, `flag_id`),
	FOREIGN KEY (`flag_id`) REFERENCES `flags`(`flag_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `fasttext_similars` (
	`source` integer,
	`target` integer,
	`rank` integer,
	PRIMARY KEY(`source`, `target`),
	FOREIGN KEY (`target`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`source`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tfidf_similars` (
	`source` integer,
	`target` integer,
	`rank` integer,
	PRIMARY KEY(`source`, `target`),
	FOREIGN KEY (`target`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`source`) REFERENCES `courses`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_season_code_crn_unique` ON `listings` (`season_code`,`crn`);--> statement-breakpoint
CREATE INDEX `idx_season_course_section_unique` ON `listings` (`season_code`,`subject`,`number`,`section`);
*/