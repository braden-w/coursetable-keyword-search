SELECT
  DISTINCT "Courses".same_course_id,
  "Courses".all_course_codes,
  "Courses".title
FROM
  "Courses"
WHERE
  ("Courses".season_code > '201601' :: text);