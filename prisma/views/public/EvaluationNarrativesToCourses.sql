SELECT
  en.id,
  en.comment,
  en.comment_compound,
  c.all_course_codes,
  c.areas,
  c.average_gut_rating,
  c.average_professor,
  c.average_rating,
  c.average_workload,
  c.average_rating_same_professors,
  c.average_workload_same_professors,
  c.classnotes,
  c.course_code,
  c.credits,
  c.crn,
  c.description,
  c.enrolled,
  c.extra_info,
  c.final_exam,
  c.flag_info,
  c.fysem,
  c.last_enrollment,
  c.last_enrollment_same_professors,
  c.listing_id,
  c.locations_summary,
  c.number,
  c.professor_ids,
  c.professor_names,
  c.regnotes,
  c.requirements,
  c.rp_attr,
  c.same_course_id,
  c.same_course_and_profs_id,
  c.last_offered_course_id,
  c.school,
  c.season_code,
  c.section,
  c.skills,
  c.subject,
  c.syllabus_url,
  c.times_by_day,
  c.times_summary,
  c.title
FROM
  (
    "EvaluationNarratives" en
    JOIN "Courses" c ON ((en.course_id = c.course_id))
  );