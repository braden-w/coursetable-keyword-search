-- Seasons table
CREATE TABLE seasons_staged (
  season_code TEXT PRIMARY KEY,
  term TEXT,
  year INTEGER
);

-- Courses table
CREATE TABLE courses_staged (
  course_id INTEGER PRIMARY KEY,
  season_code TEXT NOT NULL,
  title TEXT,
  short_title TEXT,
  description TEXT,
  requirements TEXT,
  locations_summary TEXT,
  times_long_summary TEXT,
  times_summary TEXT,
  times_by_day TEXT,
  skills TEXT,
  areas TEXT,
  credits REAL,
  syllabus_url TEXT,
  course_home_url TEXT,
  regnotes TEXT,
  extra_info TEXT,
  rp_attr TEXT,
  classnotes TEXT,
  final_exam TEXT,
  fysem BOOLEAN,
  sysem BOOLEAN,
  colsem BOOLEAN,
  average_rating REAL,
  average_rating_n INTEGER,
  average_workload REAL,
  average_workload_n INTEGER,
  average_rating_same_professors REAL,
  average_rating_same_professors_n INTEGER,
  average_workload_same_professors REAL,
  average_workload_same_professors_n INTEGER,
  last_offered_course_id INTEGER,
  same_course_id INTEGER NOT NULL,
  same_course_and_profs_id INTEGER NOT NULL,
  last_enrollment_course_id INTEGER,
  last_enrollment INTEGER,
  last_enrollment_season_code TEXT,
  FOREIGN KEY(season_code) REFERENCES seasons_staged(season_code),
  FOREIGN KEY(last_offered_course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(last_enrollment_course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(last_enrollment_season_code) REFERENCES seasons_staged(season_code)
);

-- Listings table
CREATE TABLE listings_staged (
  listing_id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL,
  school TEXT,
  subject TEXT NOT NULL,
  number TEXT NOT NULL,
  course_code TEXT,
  section TEXT NOT NULL,
  season_code TEXT NOT NULL,
  crn INTEGER NOT NULL,
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(season_code) REFERENCES seasons_staged(season_code)
);

CREATE INDEX idx_season_course_section_unique_staged ON listings_staged(season_code, subject, number, section);

CREATE UNIQUE INDEX idx_season_code_crn_unique_staged ON listings_staged(season_code, crn);

-- Discussions table
CREATE TABLE discussions_staged (
  discussion_id INTEGER PRIMARY KEY,
  subject TEXT NOT NULL,
  number TEXT NOT NULL,
  info TEXT,
  locations_summary TEXT,
  times_long_summary TEXT,
  times_summary TEXT,
  times_by_day TEXT
);

-- Flags table
CREATE TABLE flags_staged (
  flag_id INTEGER PRIMARY KEY,
  flag_text TEXT NOT NULL
);

-- DemandStatistics table
CREATE TABLE demand_statistics_staged (
  course_id INTEGER PRIMARY KEY,
  latest_demand INTEGER,
  latest_demand_date TEXT,
  demand TEXT,
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id)
);

-- Professors table
CREATE TABLE professors_staged (
  professor_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  average_rating REAL,
  average_rating_n INTEGER
);

-- EvaluationStatistics table
CREATE TABLE evaluation_statistics_staged (
  course_id INTEGER PRIMARY KEY,
  enrollment INTEGER,
  enrolled INTEGER,
  responses INTEGER,
  declined INTEGER,
  no_response INTEGER,
  extras TEXT,
  avg_rating REAL,
  avg_workload REAL,
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id)
);

-- EvaluationQuestions table
CREATE TABLE evaluation_questions_staged (
  question_code TEXT PRIMARY KEY,
  is_narrative BOOLEAN,
  question_text TEXT,
  options TEXT,
  tag TEXT
);

-- EvaluationNarratives table
CREATE TABLE evaluation_narratives_staged (
  id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL,
  question_code TEXT NOT NULL,
  COMMENT TEXT,
  comment_neg REAL,
  comment_neu REAL,
  comment_pos REAL,
  comment_compound REAL,
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(question_code) REFERENCES evaluation_questions_staged(question_code)
);

-- EvaluationRatings table
CREATE TABLE evaluation_ratings_staged (
  id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL,
  question_code TEXT NOT NULL,
  rating TEXT,
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(question_code) REFERENCES evaluation_questions_staged(question_code)
);

-- Junction table for Course-Professor
CREATE TABLE course_professors_staged (
  course_id INTEGER,
  professor_id INTEGER,
  PRIMARY KEY (course_id, professor_id),
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(professor_id) REFERENCES professors_staged(professor_id)
);

-- Junction table for Course-Discussion
CREATE TABLE course_discussions_staged (
  course_id INTEGER,
  discussion_id INTEGER,
  PRIMARY KEY (course_id, discussion_id),
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(discussion_id) REFERENCES discussions_staged(discussion_id)
);

-- Junction table for Course-Flag
CREATE TABLE course_flags_staged (
  course_id INTEGER,
  flag_id INTEGER,
  PRIMARY KEY (course_id, flag_id),
  FOREIGN KEY(course_id) REFERENCES courses_staged(course_id),
  FOREIGN KEY(flag_id) REFERENCES flags_staged(flag_id)
);

-- Junction table for FastText Similars
CREATE TABLE fasttext_similars_staged (
  source INTEGER,
  target INTEGER,
  rank INTEGER,
  PRIMARY KEY (source, target),
  FOREIGN KEY(source) REFERENCES courses_staged(course_id),
  FOREIGN KEY(target) REFERENCES courses_staged(course_id)
);

-- Junction table for TFIDF Similars
CREATE TABLE tfidf_similars_staged (
  source INTEGER,
  target INTEGER,
  rank INTEGER,
  PRIMARY KEY (source, target),
  FOREIGN KEY(source) REFERENCES courses_staged(course_id),
  FOREIGN KEY(target) REFERENCES courses_staged(course_id)
);