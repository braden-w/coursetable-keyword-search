/*
  Warnings:

  - The primary key for the `courses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `course_id` on the `courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "courses" DROP CONSTRAINT "courses_pkey",
DROP COLUMN "course_id",
ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("listing_id");
