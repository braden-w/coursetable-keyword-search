-- Creating a single FTS virtual table for all text columns in 'courses'
CREATE VIRTUAL TABLE courses_fts USING fts5(
  course_id UNINDEXED,
  season_code,
  title,
  short_title,
  description,
  requirements,
  locations_summary,
  times_long_summary,
  times_summary,
  times_by_day,
  skills,
  areas,
  syllabus_url,
  course_home_url,
  regnotes,
  extra_info,
  rp_attr,
  classnotes,
  final_exam
);

-- Populating the FTS table with existing data
INSERT INTO
  courses_fts(
    rowid,
    season_code,
    title,
    short_title,
    description,
    requirements,
    locations_summary,
    times_long_summary,
    times_summary,
    times_by_day,
    skills,
    areas,
    syllabus_url,
    course_home_url,
    regnotes,
    extra_info,
    rp_attr,
    classnotes,
    final_exam
  )
SELECT
  course_id,
  season_code,
  title,
  short_title,
  description,
  requirements,
  locations_summary,
  times_long_summary,
  times_summary,
  times_by_day,
  skills,
  areas,
  syllabus_url,
  course_home_url,
  regnotes,
  extra_info,
  rp_attr,
  classnotes,
  final_exam
FROM
  courses;