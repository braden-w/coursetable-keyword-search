/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "courses" (
    "course_id" INTEGER NOT NULL,
    "all_course_codes" JSON NOT NULL,
    "areas" JSON NOT NULL,
    "average_gut_rating" DOUBLE PRECISION NOT NULL,
    "average_professor" DOUBLE PRECISION NOT NULL,
    "average_rating" DOUBLE PRECISION NOT NULL,
    "average_rating_n" INTEGER NOT NULL,
    "average_rating_same_professors" DOUBLE PRECISION NOT NULL,
    "average_rating_same_professors_n" INTEGER NOT NULL,
    "average_workload" DOUBLE PRECISION NOT NULL,
    "average_workload_n" INTEGER NOT NULL,
    "average_workload_same_professors" DOUBLE PRECISION NOT NULL,
    "average_workload_same_professors_n" INTEGER NOT NULL,
    "classnotes" TEXT,
    "colsem" BOOLEAN,
    "course_code" TEXT NOT NULL,
    "credits" DOUBLE PRECISION NOT NULL,
    "crn" INTEGER NOT NULL,
    "declined" INTEGER,
    "description" TEXT,
    "enrolled" INTEGER,
    "enrollment" INTEGER,
    "extra_info" TEXT NOT NULL,
    "final_exam" TEXT,
    "flag_info" JSON NOT NULL,
    "fysem" BOOLEAN,
    "last_enrollment" INTEGER,
    "last_enrollment_course_id" INTEGER,
    "last_enrollment_same_professors" BOOLEAN,
    "last_enrollment_season_code" TEXT,
    "last_offered_course_id" INTEGER,
    "listing_id" INTEGER NOT NULL,
    "locations_summary" TEXT NOT NULL,
    "no_response" INTEGER,
    "number" TEXT NOT NULL,
    "professor_ids" JSON NOT NULL,
    "professor_info" JSON NOT NULL,
    "professor_names" JSON NOT NULL,
    "regnotes" TEXT,
    "requirements" TEXT,
    "responses" INTEGER,
    "rp_attr" TEXT,
    "same_course_and_profs_id" INTEGER NOT NULL,
    "same_course_id" INTEGER NOT NULL,
    "school" TEXT,
    "season_code" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "skills" JSON NOT NULL,
    "subject" TEXT NOT NULL,
    "syllabus_url" TEXT,
    "sysem" BOOLEAN,
    "times_by_day" JSON NOT NULL,
    "times_summary" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("course_id")
);
