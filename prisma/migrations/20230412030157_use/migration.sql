/*
  Warnings:

  - You are about to drop the `courses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "courses";

-- CreateTable
CREATE TABLE "Course" (
    "course_id" INTEGER NOT NULL,
    "all_course_codes" JSONB,
    "areas" JSONB,
    "average_gut_rating" DOUBLE PRECISION,
    "average_professor" DOUBLE PRECISION,
    "average_rating" DOUBLE PRECISION,
    "average_workload" DOUBLE PRECISION,
    "average_rating_same_professors" DOUBLE PRECISION,
    "average_workload_same_professors" DOUBLE PRECISION,
    "classnotes" TEXT,
    "course_code" TEXT,
    "credits" DOUBLE PRECISION,
    "crn" INTEGER,
    "description" TEXT,
    "enrolled" INTEGER,
    "extra_info" TEXT,
    "final_exam" TEXT,
    "flag_info" JSONB,
    "fysem" BOOLEAN,
    "last_enrollment" INTEGER,
    "last_enrollment_same_professors" BOOLEAN,
    "listing_id" INTEGER,
    "locations_summary" TEXT,
    "number" TEXT,
    "professor_ids" JSONB,
    "professor_names" JSONB,
    "regnotes" TEXT,
    "requirements" TEXT,
    "rp_attr" TEXT,
    "same_course_id" INTEGER,
    "same_course_and_profs_id" INTEGER,
    "last_offered_course_id" INTEGER,
    "school" TEXT,
    "season_code" TEXT,
    "section" TEXT,
    "skills" JSONB,
    "subject" TEXT,
    "syllabus_url" TEXT,
    "times_by_day" JSONB,
    "times_summary" TEXT,
    "title" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("course_id")
);
