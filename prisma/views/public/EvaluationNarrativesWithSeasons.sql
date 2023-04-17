SELECT
  en.id,
  en.course_id,
  en.comment,
  en.comment_compound,
  c.same_course_id,
  array_agg(c_past.season_code) AS past_seasons
FROM
  (
    (
      "EvaluationNarratives" en
      JOIN "Courses" c ON ((en.course_id = c.course_id))
    )
    LEFT JOIN "Courses" c_past ON ((c.same_course_id = c_past.same_course_id))
  )
GROUP BY
  en.id,
  en.course_id,
  en.comment,
  en.comment_compound,
  c.same_course_id;