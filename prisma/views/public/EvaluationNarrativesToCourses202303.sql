SELECT
  c2.all_course_codes,
  c2.title,
  en.comment,
  en.comment_compound,
  c2.areas,
  c2.skills
FROM
  (
    "EvaluationNarratives" en
    JOIN "Courses" c2 ON ((en.course_id = c2.course_id))
  )
WHERE
  (
    c2.course_id IN (
      SELECT
        c1.course_id
      FROM
        "Courses" c1
      WHERE
        (
          c1.same_course_id IN (
            SELECT
              c.same_course_id
            FROM
              "Courses" c
            WHERE
              (c.season_code = '202303' :: text)
          )
        )
    )
  );