-- Seasons table
CREATE TABLE seasons (
  season_code TEXT PRIMARY KEY,
  term TEXT,
  year INTEGER
);

-- Courses table
CREATE TABLE courses (
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
  FOREIGN KEY(season_code) REFERENCES seasons(season_code),
  FOREIGN KEY(last_offered_course_id) REFERENCES courses(course_id),
  FOREIGN KEY(last_enrollment_course_id) REFERENCES courses(course_id),
  FOREIGN KEY(last_enrollment_season_code) REFERENCES seasons(season_code)
);

-- Listings table
CREATE TABLE listings (
  listing_id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL,
  school TEXT,
  subject TEXT NOT NULL,
  number TEXT NOT NULL,
  course_code TEXT,
  section TEXT NOT NULL,
  season_code TEXT NOT NULL,
  crn INTEGER NOT NULL,
  FOREIGN KEY(course_id) REFERENCES courses(course_id),
  FOREIGN KEY(season_code) REFERENCES seasons(season_code)
);

-- Discussions table
CREATE TABLE discussions (
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
CREATE TABLE flags (
  flag_id INTEGER PRIMARY KEY,
  flag_text TEXT NOT NULL
);

-- DemandStatistics table
CREATE TABLE demand_statistics (
  course_id INTEGER PRIMARY KEY,
  latest_demand INTEGER,
  latest_demand_date TEXT,
  demand TEXT,
  FOREIGN KEY(course_id) REFERENCES courses(course_id)
);

-- Professors table
CREATE TABLE professors (
  professor_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  average_rating REAL,
  average_rating_n INTEGER
);

-- EvaluationStatistics table
CREATE TABLE evaluation_statistics (
  course_id INTEGER PRIMARY KEY,
  enrollment INTEGER,
  enrolled INTEGER,
  responses INTEGER,
  declined INTEGER,
  no_response INTEGER,
  extras TEXT,
  avg_rating REAL,
  avg_workload REAL,
  FOREIGN KEY(course_id) REFERENCES courses(course_id)
);

-- EvaluationQuestions table
CREATE TABLE evaluation_questions (
  question_code TEXT PRIMARY KEY,
  is_narrative BOOLEAN,
  question_text TEXT,
  options TEXT,
  tag TEXT
);

-- EvaluationNarratives table
CREATE TABLE evaluation_narratives (
  id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL,
  question_code TEXT NOT NULL,
  COMMENT TEXT,
  comment_neg REAL,
  comment_neu REAL,
  comment_pos REAL,
  comment_compound REAL,
  FOREIGN KEY(course_id) REFERENCES courses(course_id),
  FOREIGN KEY(question_code) REFERENCES evaluation_questions(question_code)
);

-- EvaluationRatings table
CREATE TABLE evaluation_ratings (
  id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL,
  question_code TEXT NOT NULL,
  rating TEXT,
  FOREIGN KEY(course_id) REFERENCES courses(course_id),
  FOREIGN KEY(question_code) REFERENCES evaluation_questions(question_code)
);

-- Junction table for Course-Professor
CREATE TABLE course_professors (
  course_id INTEGER,
  professor_id INTEGER,
  PRIMARY KEY (course_id, professor_id),
  FOREIGN KEY(course_id) REFERENCES courses(course_id),
  FOREIGN KEY(professor_id) REFERENCES professors(professor_id)
);

-- Junction table for Course-Discussion
CREATE TABLE course_discussions (
  course_id INTEGER,
  discussion_id INTEGER,
  PRIMARY KEY (course_id, discussion_id),
  FOREIGN KEY(course_id) REFERENCES courses(course_id),
  FOREIGN KEY(discussion_id) REFERENCES discussions(discussion_id)
);

-- Junction table for Course-Flag
CREATE TABLE course_flags (
  course_id INTEGER,
  flag_id INTEGER,
  PRIMARY KEY (course_id, flag_id),
  FOREIGN KEY(course_id) REFERENCES courses(course_id),
  FOREIGN KEY(flag_id) REFERENCES flags(flag_id)
);

-- Junction table for FastText Similars
CREATE TABLE fasttext_similars (
  source INTEGER,
  target INTEGER,
  rank INTEGER,
  PRIMARY KEY (source, target),
  FOREIGN KEY(source) REFERENCES courses(course_id),
  FOREIGN KEY(target) REFERENCES courses(course_id)
);

-- Junction table for TFIDF Similars
CREATE TABLE tfidf_similars (
  source INTEGER,
  target INTEGER,
  rank INTEGER,
  PRIMARY KEY (source, target),
  FOREIGN KEY(source) REFERENCES courses(course_id),
  FOREIGN KEY(target) REFERENCES courses(course_id)
);

CREATE INDEX idx_season_course_section_unique ON listings(season_code, subject, number, section);

CREATE UNIQUE INDEX idx_season_code_crn_unique ON listings(season_code, crn);