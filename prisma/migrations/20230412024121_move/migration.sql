/*
  Warnings:

  - The primary key for the `courses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `course_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" DROP CONSTRAINT "courses_pkey",
ADD COLUMN     "course_id" INTEGER NOT NULL,
ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("course_id");
