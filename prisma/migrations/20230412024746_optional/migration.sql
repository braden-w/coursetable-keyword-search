/*
  Warnings:

  - You are about to drop the column `subject` on the `courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "subject",
ALTER COLUMN "all_course_codes" DROP NOT NULL,
ALTER COLUMN "areas" DROP NOT NULL,
ALTER COLUMN "average_gut_rating" DROP NOT NULL,
ALTER COLUMN "average_professor" DROP NOT NULL,
ALTER COLUMN "average_rating" DROP NOT NULL,
ALTER COLUMN "average_rating_n" DROP NOT NULL,
ALTER COLUMN "average_rating_same_professors" DROP NOT NULL,
ALTER COLUMN "average_rating_same_professors_n" DROP NOT NULL,
ALTER COLUMN "average_workload" DROP NOT NULL,
ALTER COLUMN "average_workload_n" DROP NOT NULL,
ALTER COLUMN "average_workload_same_professors" DROP NOT NULL,
ALTER COLUMN "average_workload_same_professors_n" DROP NOT NULL,
ALTER COLUMN "course_code" DROP NOT NULL,
ALTER COLUMN "credits" DROP NOT NULL,
ALTER COLUMN "crn" DROP NOT NULL,
ALTER COLUMN "extra_info" DROP NOT NULL,
ALTER COLUMN "flag_info" DROP NOT NULL,
ALTER COLUMN "listing_id" DROP NOT NULL,
ALTER COLUMN "locations_summary" DROP NOT NULL,
ALTER COLUMN "number" DROP NOT NULL,
ALTER COLUMN "professor_ids" DROP NOT NULL,
ALTER COLUMN "professor_info" DROP NOT NULL,
ALTER COLUMN "professor_names" DROP NOT NULL,
ALTER COLUMN "same_course_and_profs_id" DROP NOT NULL,
ALTER COLUMN "same_course_id" DROP NOT NULL,
ALTER COLUMN "season_code" DROP NOT NULL,
ALTER COLUMN "section" DROP NOT NULL,
ALTER COLUMN "skills" DROP NOT NULL,
ALTER COLUMN "times_by_day" DROP NOT NULL,
ALTER COLUMN "times_summary" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;
