/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  json: any;
  jsonb: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_Info = {
  __typename?: 'computed_listing_info';
  all_course_codes: Scalars['jsonb'];
  areas: Scalars['jsonb'];
  average_gut_rating?: Maybe<Scalars['float8']>;
  average_professor?: Maybe<Scalars['float8']>;
  average_rating?: Maybe<Scalars['float8']>;
  average_rating_n?: Maybe<Scalars['Int']>;
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  average_workload?: Maybe<Scalars['float8']>;
  average_workload_n?: Maybe<Scalars['Int']>;
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  classnotes?: Maybe<Scalars['String']>;
  colsem?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  course: Courses;
  course_code: Scalars['String'];
  course_id: Scalars['Int'];
  credits?: Maybe<Scalars['float8']>;
  crn: Scalars['Int'];
  declined?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  enrolled?: Maybe<Scalars['Int']>;
  enrollment?: Maybe<Scalars['Int']>;
  extra_info: Scalars['String'];
  final_exam?: Maybe<Scalars['String']>;
  flag_info: Scalars['jsonb'];
  fysem?: Maybe<Scalars['Boolean']>;
  last_enrollment?: Maybe<Scalars['Int']>;
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  last_enrollment_same_professors?: Maybe<Scalars['Boolean']>;
  last_enrollment_season_code?: Maybe<Scalars['String']>;
  last_offered_course_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  listing: Listings;
  listing_id: Scalars['Int'];
  locations_summary: Scalars['String'];
  no_response?: Maybe<Scalars['Int']>;
  number: Scalars['String'];
  professor_ids: Scalars['jsonb'];
  professor_info: Scalars['jsonb'];
  professor_names: Scalars['jsonb'];
  regnotes?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  responses?: Maybe<Scalars['Int']>;
  rp_attr?: Maybe<Scalars['String']>;
  same_course_and_profs_id: Scalars['Int'];
  same_course_id: Scalars['Int'];
  school?: Maybe<Scalars['String']>;
  season_code: Scalars['String'];
  section: Scalars['String'];
  skills: Scalars['jsonb'];
  subject: Scalars['String'];
  syllabus_url?: Maybe<Scalars['String']>;
  sysem?: Maybe<Scalars['Boolean']>;
  times_by_day: Scalars['json'];
  times_summary: Scalars['String'];
  title: Scalars['String'];
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoAll_Course_CodesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoAreasArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoFlag_InfoArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoProfessor_IdsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoProfessor_InfoArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoProfessor_NamesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoSkillsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "computed_listing_info" */
export type Computed_Listing_InfoTimes_By_DayArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "computed_listing_info" */
export type Computed_Listing_Info_Aggregate = {
  __typename?: 'computed_listing_info_aggregate';
  aggregate?: Maybe<Computed_Listing_Info_Aggregate_Fields>;
  nodes: Array<Computed_Listing_Info>;
};

/** aggregate fields of "computed_listing_info" */
export type Computed_Listing_Info_Aggregate_Fields = {
  __typename?: 'computed_listing_info_aggregate_fields';
  avg?: Maybe<Computed_Listing_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Computed_Listing_Info_Max_Fields>;
  min?: Maybe<Computed_Listing_Info_Min_Fields>;
  stddev?: Maybe<Computed_Listing_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Computed_Listing_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Computed_Listing_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Computed_Listing_Info_Sum_Fields>;
  var_pop?: Maybe<Computed_Listing_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Computed_Listing_Info_Var_Samp_Fields>;
  variance?: Maybe<Computed_Listing_Info_Variance_Fields>;
};


/** aggregate fields of "computed_listing_info" */
export type Computed_Listing_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "computed_listing_info" */
export type Computed_Listing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Computed_Listing_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Computed_Listing_Info_Max_Order_By>;
  min?: InputMaybe<Computed_Listing_Info_Min_Order_By>;
  stddev?: InputMaybe<Computed_Listing_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Computed_Listing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Computed_Listing_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Computed_Listing_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Computed_Listing_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Computed_Listing_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Computed_Listing_Info_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Computed_Listing_Info_Avg_Fields = {
  __typename?: 'computed_listing_info_avg_fields';
  average_gut_rating?: Maybe<Scalars['Float']>;
  average_professor?: Maybe<Scalars['Float']>;
  average_rating?: Maybe<Scalars['Float']>;
  average_rating_n?: Maybe<Scalars['Float']>;
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  average_workload?: Maybe<Scalars['Float']>;
  average_workload_n?: Maybe<Scalars['Float']>;
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  crn?: Maybe<Scalars['Float']>;
  declined?: Maybe<Scalars['Float']>;
  enrolled?: Maybe<Scalars['Float']>;
  enrollment?: Maybe<Scalars['Float']>;
  last_enrollment?: Maybe<Scalars['Float']>;
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  last_offered_course_id?: Maybe<Scalars['Float']>;
  listing_id?: Maybe<Scalars['Float']>;
  no_response?: Maybe<Scalars['Float']>;
  responses?: Maybe<Scalars['Float']>;
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Avg_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "computed_listing_info". All fields are combined with a logical 'AND'. */
export type Computed_Listing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Computed_Listing_Info_Bool_Exp>>;
  _not?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Computed_Listing_Info_Bool_Exp>>;
  all_course_codes?: InputMaybe<Jsonb_Comparison_Exp>;
  areas?: InputMaybe<Jsonb_Comparison_Exp>;
  average_gut_rating?: InputMaybe<Float8_Comparison_Exp>;
  average_professor?: InputMaybe<Float8_Comparison_Exp>;
  average_rating?: InputMaybe<Float8_Comparison_Exp>;
  average_rating_n?: InputMaybe<Int_Comparison_Exp>;
  average_rating_same_professors?: InputMaybe<Float8_Comparison_Exp>;
  average_rating_same_professors_n?: InputMaybe<Int_Comparison_Exp>;
  average_workload?: InputMaybe<Float8_Comparison_Exp>;
  average_workload_n?: InputMaybe<Int_Comparison_Exp>;
  average_workload_same_professors?: InputMaybe<Float8_Comparison_Exp>;
  average_workload_same_professors_n?: InputMaybe<Int_Comparison_Exp>;
  classnotes?: InputMaybe<String_Comparison_Exp>;
  colsem?: InputMaybe<Boolean_Comparison_Exp>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_code?: InputMaybe<String_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  credits?: InputMaybe<Float8_Comparison_Exp>;
  crn?: InputMaybe<Int_Comparison_Exp>;
  declined?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  enrolled?: InputMaybe<Int_Comparison_Exp>;
  enrollment?: InputMaybe<Int_Comparison_Exp>;
  extra_info?: InputMaybe<String_Comparison_Exp>;
  final_exam?: InputMaybe<String_Comparison_Exp>;
  flag_info?: InputMaybe<Jsonb_Comparison_Exp>;
  fysem?: InputMaybe<Boolean_Comparison_Exp>;
  last_enrollment?: InputMaybe<Int_Comparison_Exp>;
  last_enrollment_course_id?: InputMaybe<Int_Comparison_Exp>;
  last_enrollment_same_professors?: InputMaybe<Boolean_Comparison_Exp>;
  last_enrollment_season_code?: InputMaybe<String_Comparison_Exp>;
  last_offered_course_id?: InputMaybe<Int_Comparison_Exp>;
  listing?: InputMaybe<Listings_Bool_Exp>;
  listing_id?: InputMaybe<Int_Comparison_Exp>;
  locations_summary?: InputMaybe<String_Comparison_Exp>;
  no_response?: InputMaybe<Int_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
  professor_ids?: InputMaybe<Jsonb_Comparison_Exp>;
  professor_info?: InputMaybe<Jsonb_Comparison_Exp>;
  professor_names?: InputMaybe<Jsonb_Comparison_Exp>;
  regnotes?: InputMaybe<String_Comparison_Exp>;
  requirements?: InputMaybe<String_Comparison_Exp>;
  responses?: InputMaybe<Int_Comparison_Exp>;
  rp_attr?: InputMaybe<String_Comparison_Exp>;
  same_course_and_profs_id?: InputMaybe<Int_Comparison_Exp>;
  same_course_id?: InputMaybe<Int_Comparison_Exp>;
  school?: InputMaybe<String_Comparison_Exp>;
  season_code?: InputMaybe<String_Comparison_Exp>;
  section?: InputMaybe<String_Comparison_Exp>;
  skills?: InputMaybe<Jsonb_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  syllabus_url?: InputMaybe<String_Comparison_Exp>;
  sysem?: InputMaybe<Boolean_Comparison_Exp>;
  times_by_day?: InputMaybe<Json_Comparison_Exp>;
  times_summary?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Computed_Listing_Info_Max_Fields = {
  __typename?: 'computed_listing_info_max_fields';
  average_gut_rating?: Maybe<Scalars['float8']>;
  average_professor?: Maybe<Scalars['float8']>;
  average_rating?: Maybe<Scalars['float8']>;
  average_rating_n?: Maybe<Scalars['Int']>;
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  average_workload?: Maybe<Scalars['float8']>;
  average_workload_n?: Maybe<Scalars['Int']>;
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  classnotes?: Maybe<Scalars['String']>;
  course_code?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  credits?: Maybe<Scalars['float8']>;
  crn?: Maybe<Scalars['Int']>;
  declined?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  enrolled?: Maybe<Scalars['Int']>;
  enrollment?: Maybe<Scalars['Int']>;
  extra_info?: Maybe<Scalars['String']>;
  final_exam?: Maybe<Scalars['String']>;
  last_enrollment?: Maybe<Scalars['Int']>;
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  last_enrollment_season_code?: Maybe<Scalars['String']>;
  last_offered_course_id?: Maybe<Scalars['Int']>;
  listing_id?: Maybe<Scalars['Int']>;
  locations_summary?: Maybe<Scalars['String']>;
  no_response?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  regnotes?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  responses?: Maybe<Scalars['Int']>;
  rp_attr?: Maybe<Scalars['String']>;
  same_course_and_profs_id?: Maybe<Scalars['Int']>;
  same_course_id?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
  season_code?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  syllabus_url?: Maybe<Scalars['String']>;
  times_summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Max_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  classnotes?: InputMaybe<Order_By>;
  course_code?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  extra_info?: InputMaybe<Order_By>;
  final_exam?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_enrollment_season_code?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  locations_summary?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regnotes?: InputMaybe<Order_By>;
  requirements?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  rp_attr?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
  school?: InputMaybe<Order_By>;
  season_code?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  syllabus_url?: InputMaybe<Order_By>;
  times_summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Computed_Listing_Info_Min_Fields = {
  __typename?: 'computed_listing_info_min_fields';
  average_gut_rating?: Maybe<Scalars['float8']>;
  average_professor?: Maybe<Scalars['float8']>;
  average_rating?: Maybe<Scalars['float8']>;
  average_rating_n?: Maybe<Scalars['Int']>;
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  average_workload?: Maybe<Scalars['float8']>;
  average_workload_n?: Maybe<Scalars['Int']>;
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  classnotes?: Maybe<Scalars['String']>;
  course_code?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  credits?: Maybe<Scalars['float8']>;
  crn?: Maybe<Scalars['Int']>;
  declined?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  enrolled?: Maybe<Scalars['Int']>;
  enrollment?: Maybe<Scalars['Int']>;
  extra_info?: Maybe<Scalars['String']>;
  final_exam?: Maybe<Scalars['String']>;
  last_enrollment?: Maybe<Scalars['Int']>;
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  last_enrollment_season_code?: Maybe<Scalars['String']>;
  last_offered_course_id?: Maybe<Scalars['Int']>;
  listing_id?: Maybe<Scalars['Int']>;
  locations_summary?: Maybe<Scalars['String']>;
  no_response?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  regnotes?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  responses?: Maybe<Scalars['Int']>;
  rp_attr?: Maybe<Scalars['String']>;
  same_course_and_profs_id?: Maybe<Scalars['Int']>;
  same_course_id?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
  season_code?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  syllabus_url?: Maybe<Scalars['String']>;
  times_summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Min_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  classnotes?: InputMaybe<Order_By>;
  course_code?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  extra_info?: InputMaybe<Order_By>;
  final_exam?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_enrollment_season_code?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  locations_summary?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regnotes?: InputMaybe<Order_By>;
  requirements?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  rp_attr?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
  school?: InputMaybe<Order_By>;
  season_code?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  syllabus_url?: InputMaybe<Order_By>;
  times_summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "computed_listing_info". */
export type Computed_Listing_Info_Order_By = {
  all_course_codes?: InputMaybe<Order_By>;
  areas?: InputMaybe<Order_By>;
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  classnotes?: InputMaybe<Order_By>;
  colsem?: InputMaybe<Order_By>;
  course?: InputMaybe<Courses_Order_By>;
  course_code?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  extra_info?: InputMaybe<Order_By>;
  final_exam?: InputMaybe<Order_By>;
  flag_info?: InputMaybe<Order_By>;
  fysem?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_enrollment_same_professors?: InputMaybe<Order_By>;
  last_enrollment_season_code?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing?: InputMaybe<Listings_Order_By>;
  listing_id?: InputMaybe<Order_By>;
  locations_summary?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  professor_ids?: InputMaybe<Order_By>;
  professor_info?: InputMaybe<Order_By>;
  professor_names?: InputMaybe<Order_By>;
  regnotes?: InputMaybe<Order_By>;
  requirements?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  rp_attr?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
  school?: InputMaybe<Order_By>;
  season_code?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
  skills?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  syllabus_url?: InputMaybe<Order_By>;
  sysem?: InputMaybe<Order_By>;
  times_by_day?: InputMaybe<Order_By>;
  times_summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "computed_listing_info" */
export enum Computed_Listing_Info_Select_Column {
  /** column name */
  AllCourseCodes = 'all_course_codes',
  /** column name */
  Areas = 'areas',
  /** column name */
  AverageGutRating = 'average_gut_rating',
  /** column name */
  AverageProfessor = 'average_professor',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  AverageRatingN = 'average_rating_n',
  /** column name */
  AverageRatingSameProfessors = 'average_rating_same_professors',
  /** column name */
  AverageRatingSameProfessorsN = 'average_rating_same_professors_n',
  /** column name */
  AverageWorkload = 'average_workload',
  /** column name */
  AverageWorkloadN = 'average_workload_n',
  /** column name */
  AverageWorkloadSameProfessors = 'average_workload_same_professors',
  /** column name */
  AverageWorkloadSameProfessorsN = 'average_workload_same_professors_n',
  /** column name */
  Classnotes = 'classnotes',
  /** column name */
  Colsem = 'colsem',
  /** column name */
  CourseCode = 'course_code',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Credits = 'credits',
  /** column name */
  Crn = 'crn',
  /** column name */
  Declined = 'declined',
  /** column name */
  Description = 'description',
  /** column name */
  Enrolled = 'enrolled',
  /** column name */
  Enrollment = 'enrollment',
  /** column name */
  ExtraInfo = 'extra_info',
  /** column name */
  FinalExam = 'final_exam',
  /** column name */
  FlagInfo = 'flag_info',
  /** column name */
  Fysem = 'fysem',
  /** column name */
  LastEnrollment = 'last_enrollment',
  /** column name */
  LastEnrollmentCourseId = 'last_enrollment_course_id',
  /** column name */
  LastEnrollmentSameProfessors = 'last_enrollment_same_professors',
  /** column name */
  LastEnrollmentSeasonCode = 'last_enrollment_season_code',
  /** column name */
  LastOfferedCourseId = 'last_offered_course_id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  LocationsSummary = 'locations_summary',
  /** column name */
  NoResponse = 'no_response',
  /** column name */
  Number = 'number',
  /** column name */
  ProfessorIds = 'professor_ids',
  /** column name */
  ProfessorInfo = 'professor_info',
  /** column name */
  ProfessorNames = 'professor_names',
  /** column name */
  Regnotes = 'regnotes',
  /** column name */
  Requirements = 'requirements',
  /** column name */
  Responses = 'responses',
  /** column name */
  RpAttr = 'rp_attr',
  /** column name */
  SameCourseAndProfsId = 'same_course_and_profs_id',
  /** column name */
  SameCourseId = 'same_course_id',
  /** column name */
  School = 'school',
  /** column name */
  SeasonCode = 'season_code',
  /** column name */
  Section = 'section',
  /** column name */
  Skills = 'skills',
  /** column name */
  Subject = 'subject',
  /** column name */
  SyllabusUrl = 'syllabus_url',
  /** column name */
  Sysem = 'sysem',
  /** column name */
  TimesByDay = 'times_by_day',
  /** column name */
  TimesSummary = 'times_summary',
  /** column name */
  Title = 'title'
}

/** aggregate stddev on columns */
export type Computed_Listing_Info_Stddev_Fields = {
  __typename?: 'computed_listing_info_stddev_fields';
  average_gut_rating?: Maybe<Scalars['Float']>;
  average_professor?: Maybe<Scalars['Float']>;
  average_rating?: Maybe<Scalars['Float']>;
  average_rating_n?: Maybe<Scalars['Float']>;
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  average_workload?: Maybe<Scalars['Float']>;
  average_workload_n?: Maybe<Scalars['Float']>;
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  crn?: Maybe<Scalars['Float']>;
  declined?: Maybe<Scalars['Float']>;
  enrolled?: Maybe<Scalars['Float']>;
  enrollment?: Maybe<Scalars['Float']>;
  last_enrollment?: Maybe<Scalars['Float']>;
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  last_offered_course_id?: Maybe<Scalars['Float']>;
  listing_id?: Maybe<Scalars['Float']>;
  no_response?: Maybe<Scalars['Float']>;
  responses?: Maybe<Scalars['Float']>;
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Stddev_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Computed_Listing_Info_Stddev_Pop_Fields = {
  __typename?: 'computed_listing_info_stddev_pop_fields';
  average_gut_rating?: Maybe<Scalars['Float']>;
  average_professor?: Maybe<Scalars['Float']>;
  average_rating?: Maybe<Scalars['Float']>;
  average_rating_n?: Maybe<Scalars['Float']>;
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  average_workload?: Maybe<Scalars['Float']>;
  average_workload_n?: Maybe<Scalars['Float']>;
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  crn?: Maybe<Scalars['Float']>;
  declined?: Maybe<Scalars['Float']>;
  enrolled?: Maybe<Scalars['Float']>;
  enrollment?: Maybe<Scalars['Float']>;
  last_enrollment?: Maybe<Scalars['Float']>;
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  last_offered_course_id?: Maybe<Scalars['Float']>;
  listing_id?: Maybe<Scalars['Float']>;
  no_response?: Maybe<Scalars['Float']>;
  responses?: Maybe<Scalars['Float']>;
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Stddev_Pop_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Computed_Listing_Info_Stddev_Samp_Fields = {
  __typename?: 'computed_listing_info_stddev_samp_fields';
  average_gut_rating?: Maybe<Scalars['Float']>;
  average_professor?: Maybe<Scalars['Float']>;
  average_rating?: Maybe<Scalars['Float']>;
  average_rating_n?: Maybe<Scalars['Float']>;
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  average_workload?: Maybe<Scalars['Float']>;
  average_workload_n?: Maybe<Scalars['Float']>;
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  crn?: Maybe<Scalars['Float']>;
  declined?: Maybe<Scalars['Float']>;
  enrolled?: Maybe<Scalars['Float']>;
  enrollment?: Maybe<Scalars['Float']>;
  last_enrollment?: Maybe<Scalars['Float']>;
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  last_offered_course_id?: Maybe<Scalars['Float']>;
  listing_id?: Maybe<Scalars['Float']>;
  no_response?: Maybe<Scalars['Float']>;
  responses?: Maybe<Scalars['Float']>;
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Stddev_Samp_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Computed_Listing_Info_Sum_Fields = {
  __typename?: 'computed_listing_info_sum_fields';
  average_gut_rating?: Maybe<Scalars['float8']>;
  average_professor?: Maybe<Scalars['float8']>;
  average_rating?: Maybe<Scalars['float8']>;
  average_rating_n?: Maybe<Scalars['Int']>;
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  average_workload?: Maybe<Scalars['float8']>;
  average_workload_n?: Maybe<Scalars['Int']>;
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  course_id?: Maybe<Scalars['Int']>;
  credits?: Maybe<Scalars['float8']>;
  crn?: Maybe<Scalars['Int']>;
  declined?: Maybe<Scalars['Int']>;
  enrolled?: Maybe<Scalars['Int']>;
  enrollment?: Maybe<Scalars['Int']>;
  last_enrollment?: Maybe<Scalars['Int']>;
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  last_offered_course_id?: Maybe<Scalars['Int']>;
  listing_id?: Maybe<Scalars['Int']>;
  no_response?: Maybe<Scalars['Int']>;
  responses?: Maybe<Scalars['Int']>;
  same_course_and_profs_id?: Maybe<Scalars['Int']>;
  same_course_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Sum_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Computed_Listing_Info_Var_Pop_Fields = {
  __typename?: 'computed_listing_info_var_pop_fields';
  average_gut_rating?: Maybe<Scalars['Float']>;
  average_professor?: Maybe<Scalars['Float']>;
  average_rating?: Maybe<Scalars['Float']>;
  average_rating_n?: Maybe<Scalars['Float']>;
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  average_workload?: Maybe<Scalars['Float']>;
  average_workload_n?: Maybe<Scalars['Float']>;
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  crn?: Maybe<Scalars['Float']>;
  declined?: Maybe<Scalars['Float']>;
  enrolled?: Maybe<Scalars['Float']>;
  enrollment?: Maybe<Scalars['Float']>;
  last_enrollment?: Maybe<Scalars['Float']>;
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  last_offered_course_id?: Maybe<Scalars['Float']>;
  listing_id?: Maybe<Scalars['Float']>;
  no_response?: Maybe<Scalars['Float']>;
  responses?: Maybe<Scalars['Float']>;
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Var_Pop_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Computed_Listing_Info_Var_Samp_Fields = {
  __typename?: 'computed_listing_info_var_samp_fields';
  average_gut_rating?: Maybe<Scalars['Float']>;
  average_professor?: Maybe<Scalars['Float']>;
  average_rating?: Maybe<Scalars['Float']>;
  average_rating_n?: Maybe<Scalars['Float']>;
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  average_workload?: Maybe<Scalars['Float']>;
  average_workload_n?: Maybe<Scalars['Float']>;
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  crn?: Maybe<Scalars['Float']>;
  declined?: Maybe<Scalars['Float']>;
  enrolled?: Maybe<Scalars['Float']>;
  enrollment?: Maybe<Scalars['Float']>;
  last_enrollment?: Maybe<Scalars['Float']>;
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  last_offered_course_id?: Maybe<Scalars['Float']>;
  listing_id?: Maybe<Scalars['Float']>;
  no_response?: Maybe<Scalars['Float']>;
  responses?: Maybe<Scalars['Float']>;
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Var_Samp_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Computed_Listing_Info_Variance_Fields = {
  __typename?: 'computed_listing_info_variance_fields';
  average_gut_rating?: Maybe<Scalars['Float']>;
  average_professor?: Maybe<Scalars['Float']>;
  average_rating?: Maybe<Scalars['Float']>;
  average_rating_n?: Maybe<Scalars['Float']>;
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  average_workload?: Maybe<Scalars['Float']>;
  average_workload_n?: Maybe<Scalars['Float']>;
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  crn?: Maybe<Scalars['Float']>;
  declined?: Maybe<Scalars['Float']>;
  enrolled?: Maybe<Scalars['Float']>;
  enrollment?: Maybe<Scalars['Float']>;
  last_enrollment?: Maybe<Scalars['Float']>;
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  last_offered_course_id?: Maybe<Scalars['Float']>;
  listing_id?: Maybe<Scalars['Float']>;
  no_response?: Maybe<Scalars['Float']>;
  responses?: Maybe<Scalars['Float']>;
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "computed_listing_info" */
export type Computed_Listing_Info_Variance_Order_By = {
  average_gut_rating?: InputMaybe<Order_By>;
  average_professor?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "course_discussions" */
export type Course_Discussions = {
  __typename?: 'course_discussions';
  /** An object relationship */
  course: Courses;
  course_id: Scalars['Int'];
  /** An object relationship */
  discussion: Discussions;
  discussion_id: Scalars['Int'];
};

/** aggregated selection of "course_discussions" */
export type Course_Discussions_Aggregate = {
  __typename?: 'course_discussions_aggregate';
  aggregate?: Maybe<Course_Discussions_Aggregate_Fields>;
  nodes: Array<Course_Discussions>;
};

/** aggregate fields of "course_discussions" */
export type Course_Discussions_Aggregate_Fields = {
  __typename?: 'course_discussions_aggregate_fields';
  avg?: Maybe<Course_Discussions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Course_Discussions_Max_Fields>;
  min?: Maybe<Course_Discussions_Min_Fields>;
  stddev?: Maybe<Course_Discussions_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Discussions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Discussions_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Discussions_Sum_Fields>;
  var_pop?: Maybe<Course_Discussions_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Discussions_Var_Samp_Fields>;
  variance?: Maybe<Course_Discussions_Variance_Fields>;
};


/** aggregate fields of "course_discussions" */
export type Course_Discussions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_discussions" */
export type Course_Discussions_Aggregate_Order_By = {
  avg?: InputMaybe<Course_Discussions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Course_Discussions_Max_Order_By>;
  min?: InputMaybe<Course_Discussions_Min_Order_By>;
  stddev?: InputMaybe<Course_Discussions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Course_Discussions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Course_Discussions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Course_Discussions_Sum_Order_By>;
  var_pop?: InputMaybe<Course_Discussions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Course_Discussions_Var_Samp_Order_By>;
  variance?: InputMaybe<Course_Discussions_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Course_Discussions_Avg_Fields = {
  __typename?: 'course_discussions_avg_fields';
  course_id?: Maybe<Scalars['Float']>;
  discussion_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_discussions" */
export type Course_Discussions_Avg_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_discussions". All fields are combined with a logical 'AND'. */
export type Course_Discussions_Bool_Exp = {
  _and?: InputMaybe<Array<Course_Discussions_Bool_Exp>>;
  _not?: InputMaybe<Course_Discussions_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Discussions_Bool_Exp>>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  discussion?: InputMaybe<Discussions_Bool_Exp>;
  discussion_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Course_Discussions_Max_Fields = {
  __typename?: 'course_discussions_max_fields';
  course_id?: Maybe<Scalars['Int']>;
  discussion_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "course_discussions" */
export type Course_Discussions_Max_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Discussions_Min_Fields = {
  __typename?: 'course_discussions_min_fields';
  course_id?: Maybe<Scalars['Int']>;
  discussion_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "course_discussions" */
export type Course_Discussions_Min_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "course_discussions". */
export type Course_Discussions_Order_By = {
  course?: InputMaybe<Courses_Order_By>;
  course_id?: InputMaybe<Order_By>;
  discussion?: InputMaybe<Discussions_Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** select columns of table "course_discussions" */
export enum Course_Discussions_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  DiscussionId = 'discussion_id'
}

/** aggregate stddev on columns */
export type Course_Discussions_Stddev_Fields = {
  __typename?: 'course_discussions_stddev_fields';
  course_id?: Maybe<Scalars['Float']>;
  discussion_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_discussions" */
export type Course_Discussions_Stddev_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Discussions_Stddev_Pop_Fields = {
  __typename?: 'course_discussions_stddev_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  discussion_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_discussions" */
export type Course_Discussions_Stddev_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Discussions_Stddev_Samp_Fields = {
  __typename?: 'course_discussions_stddev_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  discussion_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_discussions" */
export type Course_Discussions_Stddev_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Discussions_Sum_Fields = {
  __typename?: 'course_discussions_sum_fields';
  course_id?: Maybe<Scalars['Int']>;
  discussion_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_discussions" */
export type Course_Discussions_Sum_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Course_Discussions_Var_Pop_Fields = {
  __typename?: 'course_discussions_var_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  discussion_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_discussions" */
export type Course_Discussions_Var_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Discussions_Var_Samp_Fields = {
  __typename?: 'course_discussions_var_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  discussion_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_discussions" */
export type Course_Discussions_Var_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Discussions_Variance_Fields = {
  __typename?: 'course_discussions_variance_fields';
  course_id?: Maybe<Scalars['Float']>;
  discussion_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_discussions" */
export type Course_Discussions_Variance_Order_By = {
  course_id?: InputMaybe<Order_By>;
  discussion_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "course_flags" */
export type Course_Flags = {
  __typename?: 'course_flags';
  /** An object relationship */
  course: Courses;
  course_id: Scalars['Int'];
  /** An object relationship */
  flag: Flags;
  flag_id: Scalars['Int'];
};

/** aggregated selection of "course_flags" */
export type Course_Flags_Aggregate = {
  __typename?: 'course_flags_aggregate';
  aggregate?: Maybe<Course_Flags_Aggregate_Fields>;
  nodes: Array<Course_Flags>;
};

/** aggregate fields of "course_flags" */
export type Course_Flags_Aggregate_Fields = {
  __typename?: 'course_flags_aggregate_fields';
  avg?: Maybe<Course_Flags_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Course_Flags_Max_Fields>;
  min?: Maybe<Course_Flags_Min_Fields>;
  stddev?: Maybe<Course_Flags_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Flags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Flags_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Flags_Sum_Fields>;
  var_pop?: Maybe<Course_Flags_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Flags_Var_Samp_Fields>;
  variance?: Maybe<Course_Flags_Variance_Fields>;
};


/** aggregate fields of "course_flags" */
export type Course_Flags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Flags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_flags" */
export type Course_Flags_Aggregate_Order_By = {
  avg?: InputMaybe<Course_Flags_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Course_Flags_Max_Order_By>;
  min?: InputMaybe<Course_Flags_Min_Order_By>;
  stddev?: InputMaybe<Course_Flags_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Course_Flags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Course_Flags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Course_Flags_Sum_Order_By>;
  var_pop?: InputMaybe<Course_Flags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Course_Flags_Var_Samp_Order_By>;
  variance?: InputMaybe<Course_Flags_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Course_Flags_Avg_Fields = {
  __typename?: 'course_flags_avg_fields';
  course_id?: Maybe<Scalars['Float']>;
  flag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_flags" */
export type Course_Flags_Avg_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_flags". All fields are combined with a logical 'AND'. */
export type Course_Flags_Bool_Exp = {
  _and?: InputMaybe<Array<Course_Flags_Bool_Exp>>;
  _not?: InputMaybe<Course_Flags_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Flags_Bool_Exp>>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  flag?: InputMaybe<Flags_Bool_Exp>;
  flag_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Course_Flags_Max_Fields = {
  __typename?: 'course_flags_max_fields';
  course_id?: Maybe<Scalars['Int']>;
  flag_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "course_flags" */
export type Course_Flags_Max_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Flags_Min_Fields = {
  __typename?: 'course_flags_min_fields';
  course_id?: Maybe<Scalars['Int']>;
  flag_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "course_flags" */
export type Course_Flags_Min_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "course_flags". */
export type Course_Flags_Order_By = {
  course?: InputMaybe<Courses_Order_By>;
  course_id?: InputMaybe<Order_By>;
  flag?: InputMaybe<Flags_Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** select columns of table "course_flags" */
export enum Course_Flags_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  FlagId = 'flag_id'
}

/** aggregate stddev on columns */
export type Course_Flags_Stddev_Fields = {
  __typename?: 'course_flags_stddev_fields';
  course_id?: Maybe<Scalars['Float']>;
  flag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_flags" */
export type Course_Flags_Stddev_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Flags_Stddev_Pop_Fields = {
  __typename?: 'course_flags_stddev_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  flag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_flags" */
export type Course_Flags_Stddev_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Flags_Stddev_Samp_Fields = {
  __typename?: 'course_flags_stddev_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  flag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_flags" */
export type Course_Flags_Stddev_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Flags_Sum_Fields = {
  __typename?: 'course_flags_sum_fields';
  course_id?: Maybe<Scalars['Int']>;
  flag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_flags" */
export type Course_Flags_Sum_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Course_Flags_Var_Pop_Fields = {
  __typename?: 'course_flags_var_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  flag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_flags" */
export type Course_Flags_Var_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Flags_Var_Samp_Fields = {
  __typename?: 'course_flags_var_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  flag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_flags" */
export type Course_Flags_Var_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Flags_Variance_Fields = {
  __typename?: 'course_flags_variance_fields';
  course_id?: Maybe<Scalars['Float']>;
  flag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_flags" */
export type Course_Flags_Variance_Order_By = {
  course_id?: InputMaybe<Order_By>;
  flag_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "course_professors" */
export type Course_Professors = {
  __typename?: 'course_professors';
  /** An object relationship */
  course: Courses;
  course_id: Scalars['Int'];
  /** An object relationship */
  professor: Professors;
  professor_id: Scalars['Int'];
};

/** aggregated selection of "course_professors" */
export type Course_Professors_Aggregate = {
  __typename?: 'course_professors_aggregate';
  aggregate?: Maybe<Course_Professors_Aggregate_Fields>;
  nodes: Array<Course_Professors>;
};

/** aggregate fields of "course_professors" */
export type Course_Professors_Aggregate_Fields = {
  __typename?: 'course_professors_aggregate_fields';
  avg?: Maybe<Course_Professors_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Course_Professors_Max_Fields>;
  min?: Maybe<Course_Professors_Min_Fields>;
  stddev?: Maybe<Course_Professors_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Professors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Professors_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Professors_Sum_Fields>;
  var_pop?: Maybe<Course_Professors_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Professors_Var_Samp_Fields>;
  variance?: Maybe<Course_Professors_Variance_Fields>;
};


/** aggregate fields of "course_professors" */
export type Course_Professors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Professors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_professors" */
export type Course_Professors_Aggregate_Order_By = {
  avg?: InputMaybe<Course_Professors_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Course_Professors_Max_Order_By>;
  min?: InputMaybe<Course_Professors_Min_Order_By>;
  stddev?: InputMaybe<Course_Professors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Course_Professors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Course_Professors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Course_Professors_Sum_Order_By>;
  var_pop?: InputMaybe<Course_Professors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Course_Professors_Var_Samp_Order_By>;
  variance?: InputMaybe<Course_Professors_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Course_Professors_Avg_Fields = {
  __typename?: 'course_professors_avg_fields';
  course_id?: Maybe<Scalars['Float']>;
  professor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_professors" */
export type Course_Professors_Avg_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_professors". All fields are combined with a logical 'AND'. */
export type Course_Professors_Bool_Exp = {
  _and?: InputMaybe<Array<Course_Professors_Bool_Exp>>;
  _not?: InputMaybe<Course_Professors_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Professors_Bool_Exp>>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  professor?: InputMaybe<Professors_Bool_Exp>;
  professor_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Course_Professors_Max_Fields = {
  __typename?: 'course_professors_max_fields';
  course_id?: Maybe<Scalars['Int']>;
  professor_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "course_professors" */
export type Course_Professors_Max_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Professors_Min_Fields = {
  __typename?: 'course_professors_min_fields';
  course_id?: Maybe<Scalars['Int']>;
  professor_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "course_professors" */
export type Course_Professors_Min_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "course_professors". */
export type Course_Professors_Order_By = {
  course?: InputMaybe<Courses_Order_By>;
  course_id?: InputMaybe<Order_By>;
  professor?: InputMaybe<Professors_Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** select columns of table "course_professors" */
export enum Course_Professors_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  ProfessorId = 'professor_id'
}

/** aggregate stddev on columns */
export type Course_Professors_Stddev_Fields = {
  __typename?: 'course_professors_stddev_fields';
  course_id?: Maybe<Scalars['Float']>;
  professor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_professors" */
export type Course_Professors_Stddev_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Professors_Stddev_Pop_Fields = {
  __typename?: 'course_professors_stddev_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  professor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_professors" */
export type Course_Professors_Stddev_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Professors_Stddev_Samp_Fields = {
  __typename?: 'course_professors_stddev_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  professor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_professors" */
export type Course_Professors_Stddev_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Professors_Sum_Fields = {
  __typename?: 'course_professors_sum_fields';
  course_id?: Maybe<Scalars['Int']>;
  professor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_professors" */
export type Course_Professors_Sum_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Course_Professors_Var_Pop_Fields = {
  __typename?: 'course_professors_var_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  professor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_professors" */
export type Course_Professors_Var_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Professors_Var_Samp_Fields = {
  __typename?: 'course_professors_var_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  professor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_professors" */
export type Course_Professors_Var_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Professors_Variance_Fields = {
  __typename?: 'course_professors_variance_fields';
  course_id?: Maybe<Scalars['Float']>;
  professor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_professors" */
export type Course_Professors_Variance_Order_By = {
  course_id?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "courses" */
export type Courses = {
  __typename?: 'courses';
  /** Course areas (humanities, social sciences, sciences) */
  areas?: Maybe<Scalars['json']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  /** Additional class notes */
  classnotes?: Maybe<Scalars['String']>;
  /** True if the course is a college seminar. False otherwise. */
  colsem?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  computed_listing_infos: Array<Computed_Listing_Info>;
  /** An aggregate relationship */
  computed_listing_infos_aggregate: Computed_Listing_Info_Aggregate;
  /** An object relationship */
  course?: Maybe<Courses>;
  /** An object relationship */
  courseByLastOfferedCourseId?: Maybe<Courses>;
  /** An array relationship */
  course_discussions: Array<Course_Discussions>;
  /** An aggregate relationship */
  course_discussions_aggregate: Course_Discussions_Aggregate;
  /** An array relationship */
  course_flags: Array<Course_Flags>;
  /** An aggregate relationship */
  course_flags_aggregate: Course_Flags_Aggregate;
  /** Link to the course homepage */
  course_home_url?: Maybe<Scalars['String']>;
  course_id: Scalars['Int'];
  /** An array relationship */
  course_professors: Array<Course_Professors>;
  /** An aggregate relationship */
  course_professors_aggregate: Course_Professors_Aggregate;
  /** An array relationship */
  courses: Array<Courses>;
  /** An array relationship */
  coursesByLastOfferedCourseId: Array<Courses>;
  /** An aggregate relationship */
  coursesByLastOfferedCourseId_aggregate: Courses_Aggregate;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  /** Number of course credits */
  credits?: Maybe<Scalars['float8']>;
  /** An object relationship */
  demand_statistic?: Maybe<Demand_Statistics>;
  /** Course description */
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  evaluation_narratives: Array<Evaluation_Narratives>;
  /** An aggregate relationship */
  evaluation_narratives_aggregate: Evaluation_Narratives_Aggregate;
  /** An array relationship */
  evaluation_ratings: Array<Evaluation_Ratings>;
  /** An aggregate relationship */
  evaluation_ratings_aggregate: Evaluation_Ratings_Aggregate;
  /** An object relationship */
  evaluation_statistic?: Maybe<Evaluation_Statistics>;
  /** Additional information (indicates if class has been cancelled) */
  extra_info?: Maybe<Scalars['String']>;
  /** An array relationship */
  fasttextSimilarsByTarget: Array<Fasttext_Similars>;
  /** An aggregate relationship */
  fasttextSimilarsByTarget_aggregate: Fasttext_Similars_Aggregate;
  /** An array relationship */
  fasttext_similars: Array<Fasttext_Similars>;
  /** An aggregate relationship */
  fasttext_similars_aggregate: Fasttext_Similars_Aggregate;
  /** Final exam information */
  final_exam?: Maybe<Scalars['String']>;
  /** True if the course is a first-year seminar. False otherwise. */
  fysem?: Maybe<Scalars['Boolean']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Int']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  /**
   * [computed] Whether last enrollment offering
   *         is with same professor as current.
   */
  last_enrollment_same_professors?: Maybe<Scalars['Boolean']>;
  /** [computed] Season in which last enrollment offering is from */
  last_enrollment_season_code?: Maybe<Scalars['String']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  listings: Array<Listings>;
  /** An aggregate relationship */
  listings_aggregate: Listings_Aggregate;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Displayed in the "Locations" column
   *         in CourseTable.
   */
  locations_summary?: Maybe<Scalars['String']>;
  /**
   * Registrar's notes (e.g. preference selection links,
   *         optional writing credits, etc.)
   */
  regnotes?: Maybe<Scalars['String']>;
  /** Recommended requirements/prerequisites for the course */
  requirements?: Maybe<Scalars['String']>;
  /** Reading period notes */
  rp_attr?: Maybe<Scalars['String']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id: Scalars['Int'];
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id: Scalars['Int'];
  /** An object relationship */
  season?: Maybe<Seasons>;
  /** An object relationship */
  seasonBySeasonCode: Seasons;
  /** The season the course is being taught in */
  season_code: Scalars['String'];
  /**
   * Shortened course title (first 29 characters + "...")
   *         if the length exceeds 32, otherwise just the title itself
   */
  short_title?: Maybe<Scalars['String']>;
  /**
   * Skills that the course fulfills (e.g. writing,
   *         quantitative reasoning, language levels)
   */
  skills?: Maybe<Scalars['json']>;
  /** Link to the syllabus */
  syllabus_url?: Maybe<Scalars['String']>;
  /** True if the course is a sophomore seminar. False otherwise. */
  sysem?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  tfidfSimilarsByTarget: Array<Tfidf_Similars>;
  /** An aggregate relationship */
  tfidfSimilarsByTarget_aggregate: Tfidf_Similars_Aggregate;
  /** An array relationship */
  tfidf_similars: Array<Tfidf_Similars>;
  /** An aggregate relationship */
  tfidf_similars_aggregate: Tfidf_Similars_Aggregate;
  /**
   * Course meeting times by day, with days as keys and
   *         tuples of `(start_time, end_time, location)`
   */
  times_by_day?: Maybe<Scalars['json']>;
  /**
   * Course times and locations, displayed in the "Meets"
   *          row in CourseTable course modals
   */
  times_long_summary?: Maybe<Scalars['String']>;
  /** Course times, displayed in the "Times" column in CourseTable */
  times_summary?: Maybe<Scalars['String']>;
  /** Complete course title */
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "courses" */
export type CoursesAreasArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "courses" */
export type CoursesComputed_Listing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesComputed_Listing_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCourse_DiscussionsArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCourse_Discussions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCourse_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCourse_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCourse_ProfessorsArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCourse_Professors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCoursesArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCoursesByLastOfferedCourseIdArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCoursesByLastOfferedCourseId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesEvaluation_NarrativesArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesEvaluation_Narratives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesEvaluation_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesEvaluation_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesFasttextSimilarsByTargetArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesFasttextSimilarsByTarget_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesFasttext_SimilarsArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesFasttext_Similars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesListingsArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesSkillsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "courses" */
export type CoursesTfidfSimilarsByTargetArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesTfidfSimilarsByTarget_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesTfidf_SimilarsArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesTfidf_Similars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesTimes_By_DayArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "courses" */
export type Courses_Aggregate = {
  __typename?: 'courses_aggregate';
  aggregate?: Maybe<Courses_Aggregate_Fields>;
  nodes: Array<Courses>;
};

/** aggregate fields of "courses" */
export type Courses_Aggregate_Fields = {
  __typename?: 'courses_aggregate_fields';
  avg?: Maybe<Courses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Courses_Max_Fields>;
  min?: Maybe<Courses_Min_Fields>;
  stddev?: Maybe<Courses_Stddev_Fields>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Fields>;
  sum?: Maybe<Courses_Sum_Fields>;
  var_pop?: Maybe<Courses_Var_Pop_Fields>;
  var_samp?: Maybe<Courses_Var_Samp_Fields>;
  variance?: Maybe<Courses_Variance_Fields>;
};


/** aggregate fields of "courses" */
export type Courses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Courses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses" */
export type Courses_Aggregate_Order_By = {
  avg?: InputMaybe<Courses_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Courses_Max_Order_By>;
  min?: InputMaybe<Courses_Min_Order_By>;
  stddev?: InputMaybe<Courses_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Courses_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Courses_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Courses_Sum_Order_By>;
  var_pop?: InputMaybe<Courses_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Courses_Var_Samp_Order_By>;
  variance?: InputMaybe<Courses_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Courses_Avg_Fields = {
  __typename?: 'courses_avg_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['Float']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Float']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "courses" */
export type Courses_Avg_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "courses". All fields are combined with a logical 'AND'. */
export type Courses_Bool_Exp = {
  _and?: InputMaybe<Array<Courses_Bool_Exp>>;
  _not?: InputMaybe<Courses_Bool_Exp>;
  _or?: InputMaybe<Array<Courses_Bool_Exp>>;
  areas?: InputMaybe<Json_Comparison_Exp>;
  average_rating?: InputMaybe<Float8_Comparison_Exp>;
  average_rating_n?: InputMaybe<Int_Comparison_Exp>;
  average_rating_same_professors?: InputMaybe<Float8_Comparison_Exp>;
  average_rating_same_professors_n?: InputMaybe<Int_Comparison_Exp>;
  average_workload?: InputMaybe<Float8_Comparison_Exp>;
  average_workload_n?: InputMaybe<Int_Comparison_Exp>;
  average_workload_same_professors?: InputMaybe<Float8_Comparison_Exp>;
  average_workload_same_professors_n?: InputMaybe<Int_Comparison_Exp>;
  classnotes?: InputMaybe<String_Comparison_Exp>;
  colsem?: InputMaybe<Boolean_Comparison_Exp>;
  computed_listing_infos?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
  course?: InputMaybe<Courses_Bool_Exp>;
  courseByLastOfferedCourseId?: InputMaybe<Courses_Bool_Exp>;
  course_discussions?: InputMaybe<Course_Discussions_Bool_Exp>;
  course_flags?: InputMaybe<Course_Flags_Bool_Exp>;
  course_home_url?: InputMaybe<String_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  course_professors?: InputMaybe<Course_Professors_Bool_Exp>;
  courses?: InputMaybe<Courses_Bool_Exp>;
  coursesByLastOfferedCourseId?: InputMaybe<Courses_Bool_Exp>;
  credits?: InputMaybe<Float8_Comparison_Exp>;
  demand_statistic?: InputMaybe<Demand_Statistics_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  evaluation_narratives?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
  evaluation_ratings?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
  evaluation_statistic?: InputMaybe<Evaluation_Statistics_Bool_Exp>;
  extra_info?: InputMaybe<String_Comparison_Exp>;
  fasttextSimilarsByTarget?: InputMaybe<Fasttext_Similars_Bool_Exp>;
  fasttext_similars?: InputMaybe<Fasttext_Similars_Bool_Exp>;
  final_exam?: InputMaybe<String_Comparison_Exp>;
  fysem?: InputMaybe<Boolean_Comparison_Exp>;
  last_enrollment?: InputMaybe<Int_Comparison_Exp>;
  last_enrollment_course_id?: InputMaybe<Int_Comparison_Exp>;
  last_enrollment_same_professors?: InputMaybe<Boolean_Comparison_Exp>;
  last_enrollment_season_code?: InputMaybe<String_Comparison_Exp>;
  last_offered_course_id?: InputMaybe<Int_Comparison_Exp>;
  listings?: InputMaybe<Listings_Bool_Exp>;
  locations_summary?: InputMaybe<String_Comparison_Exp>;
  regnotes?: InputMaybe<String_Comparison_Exp>;
  requirements?: InputMaybe<String_Comparison_Exp>;
  rp_attr?: InputMaybe<String_Comparison_Exp>;
  same_course_and_profs_id?: InputMaybe<Int_Comparison_Exp>;
  same_course_id?: InputMaybe<Int_Comparison_Exp>;
  season?: InputMaybe<Seasons_Bool_Exp>;
  seasonBySeasonCode?: InputMaybe<Seasons_Bool_Exp>;
  season_code?: InputMaybe<String_Comparison_Exp>;
  short_title?: InputMaybe<String_Comparison_Exp>;
  skills?: InputMaybe<Json_Comparison_Exp>;
  syllabus_url?: InputMaybe<String_Comparison_Exp>;
  sysem?: InputMaybe<Boolean_Comparison_Exp>;
  tfidfSimilarsByTarget?: InputMaybe<Tfidf_Similars_Bool_Exp>;
  tfidf_similars?: InputMaybe<Tfidf_Similars_Bool_Exp>;
  times_by_day?: InputMaybe<Json_Comparison_Exp>;
  times_long_summary?: InputMaybe<String_Comparison_Exp>;
  times_summary?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Courses_Max_Fields = {
  __typename?: 'courses_max_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  /** Additional class notes */
  classnotes?: Maybe<Scalars['String']>;
  /** Link to the course homepage */
  course_home_url?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['float8']>;
  /** Course description */
  description?: Maybe<Scalars['String']>;
  /** Additional information (indicates if class has been cancelled) */
  extra_info?: Maybe<Scalars['String']>;
  /** Final exam information */
  final_exam?: Maybe<Scalars['String']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Int']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  /** [computed] Season in which last enrollment offering is from */
  last_enrollment_season_code?: Maybe<Scalars['String']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Int']>;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Displayed in the "Locations" column
   *         in CourseTable.
   */
  locations_summary?: Maybe<Scalars['String']>;
  /**
   * Registrar's notes (e.g. preference selection links,
   *         optional writing credits, etc.)
   */
  regnotes?: Maybe<Scalars['String']>;
  /** Recommended requirements/prerequisites for the course */
  requirements?: Maybe<Scalars['String']>;
  /** Reading period notes */
  rp_attr?: Maybe<Scalars['String']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Int']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Int']>;
  /** The season the course is being taught in */
  season_code?: Maybe<Scalars['String']>;
  /**
   * Shortened course title (first 29 characters + "...")
   *         if the length exceeds 32, otherwise just the title itself
   */
  short_title?: Maybe<Scalars['String']>;
  /** Link to the syllabus */
  syllabus_url?: Maybe<Scalars['String']>;
  /**
   * Course times and locations, displayed in the "Meets"
   *          row in CourseTable course modals
   */
  times_long_summary?: Maybe<Scalars['String']>;
  /** Course times, displayed in the "Times" column in CourseTable */
  times_summary?: Maybe<Scalars['String']>;
  /** Complete course title */
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "courses" */
export type Courses_Max_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  /** Additional class notes */
  classnotes?: InputMaybe<Order_By>;
  /** Link to the course homepage */
  course_home_url?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** Course description */
  description?: InputMaybe<Order_By>;
  /** Additional information (indicates if class has been cancelled) */
  extra_info?: InputMaybe<Order_By>;
  /** Final exam information */
  final_exam?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /** [computed] Season in which last enrollment offering is from */
  last_enrollment_season_code?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Displayed in the "Locations" column
   *         in CourseTable.
   */
  locations_summary?: InputMaybe<Order_By>;
  /**
   * Registrar's notes (e.g. preference selection links,
   *         optional writing credits, etc.)
   */
  regnotes?: InputMaybe<Order_By>;
  /** Recommended requirements/prerequisites for the course */
  requirements?: InputMaybe<Order_By>;
  /** Reading period notes */
  rp_attr?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
  /** The season the course is being taught in */
  season_code?: InputMaybe<Order_By>;
  /**
   * Shortened course title (first 29 characters + "...")
   *         if the length exceeds 32, otherwise just the title itself
   */
  short_title?: InputMaybe<Order_By>;
  /** Link to the syllabus */
  syllabus_url?: InputMaybe<Order_By>;
  /**
   * Course times and locations, displayed in the "Meets"
   *          row in CourseTable course modals
   */
  times_long_summary?: InputMaybe<Order_By>;
  /** Course times, displayed in the "Times" column in CourseTable */
  times_summary?: InputMaybe<Order_By>;
  /** Complete course title */
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Min_Fields = {
  __typename?: 'courses_min_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  /** Additional class notes */
  classnotes?: Maybe<Scalars['String']>;
  /** Link to the course homepage */
  course_home_url?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['float8']>;
  /** Course description */
  description?: Maybe<Scalars['String']>;
  /** Additional information (indicates if class has been cancelled) */
  extra_info?: Maybe<Scalars['String']>;
  /** Final exam information */
  final_exam?: Maybe<Scalars['String']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Int']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  /** [computed] Season in which last enrollment offering is from */
  last_enrollment_season_code?: Maybe<Scalars['String']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Int']>;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Displayed in the "Locations" column
   *         in CourseTable.
   */
  locations_summary?: Maybe<Scalars['String']>;
  /**
   * Registrar's notes (e.g. preference selection links,
   *         optional writing credits, etc.)
   */
  regnotes?: Maybe<Scalars['String']>;
  /** Recommended requirements/prerequisites for the course */
  requirements?: Maybe<Scalars['String']>;
  /** Reading period notes */
  rp_attr?: Maybe<Scalars['String']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Int']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Int']>;
  /** The season the course is being taught in */
  season_code?: Maybe<Scalars['String']>;
  /**
   * Shortened course title (first 29 characters + "...")
   *         if the length exceeds 32, otherwise just the title itself
   */
  short_title?: Maybe<Scalars['String']>;
  /** Link to the syllabus */
  syllabus_url?: Maybe<Scalars['String']>;
  /**
   * Course times and locations, displayed in the "Meets"
   *          row in CourseTable course modals
   */
  times_long_summary?: Maybe<Scalars['String']>;
  /** Course times, displayed in the "Times" column in CourseTable */
  times_summary?: Maybe<Scalars['String']>;
  /** Complete course title */
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "courses" */
export type Courses_Min_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  /** Additional class notes */
  classnotes?: InputMaybe<Order_By>;
  /** Link to the course homepage */
  course_home_url?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** Course description */
  description?: InputMaybe<Order_By>;
  /** Additional information (indicates if class has been cancelled) */
  extra_info?: InputMaybe<Order_By>;
  /** Final exam information */
  final_exam?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /** [computed] Season in which last enrollment offering is from */
  last_enrollment_season_code?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Displayed in the "Locations" column
   *         in CourseTable.
   */
  locations_summary?: InputMaybe<Order_By>;
  /**
   * Registrar's notes (e.g. preference selection links,
   *         optional writing credits, etc.)
   */
  regnotes?: InputMaybe<Order_By>;
  /** Recommended requirements/prerequisites for the course */
  requirements?: InputMaybe<Order_By>;
  /** Reading period notes */
  rp_attr?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
  /** The season the course is being taught in */
  season_code?: InputMaybe<Order_By>;
  /**
   * Shortened course title (first 29 characters + "...")
   *         if the length exceeds 32, otherwise just the title itself
   */
  short_title?: InputMaybe<Order_By>;
  /** Link to the syllabus */
  syllabus_url?: InputMaybe<Order_By>;
  /**
   * Course times and locations, displayed in the "Meets"
   *          row in CourseTable course modals
   */
  times_long_summary?: InputMaybe<Order_By>;
  /** Course times, displayed in the "Times" column in CourseTable */
  times_summary?: InputMaybe<Order_By>;
  /** Complete course title */
  title?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "courses". */
export type Courses_Order_By = {
  areas?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  average_rating_same_professors?: InputMaybe<Order_By>;
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  average_workload?: InputMaybe<Order_By>;
  average_workload_n?: InputMaybe<Order_By>;
  average_workload_same_professors?: InputMaybe<Order_By>;
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  classnotes?: InputMaybe<Order_By>;
  colsem?: InputMaybe<Order_By>;
  computed_listing_infos_aggregate?: InputMaybe<Computed_Listing_Info_Aggregate_Order_By>;
  course?: InputMaybe<Courses_Order_By>;
  courseByLastOfferedCourseId?: InputMaybe<Courses_Order_By>;
  course_discussions_aggregate?: InputMaybe<Course_Discussions_Aggregate_Order_By>;
  course_flags_aggregate?: InputMaybe<Course_Flags_Aggregate_Order_By>;
  course_home_url?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  course_professors_aggregate?: InputMaybe<Course_Professors_Aggregate_Order_By>;
  coursesByLastOfferedCourseId_aggregate?: InputMaybe<Courses_Aggregate_Order_By>;
  courses_aggregate?: InputMaybe<Courses_Aggregate_Order_By>;
  credits?: InputMaybe<Order_By>;
  demand_statistic?: InputMaybe<Demand_Statistics_Order_By>;
  description?: InputMaybe<Order_By>;
  evaluation_narratives_aggregate?: InputMaybe<Evaluation_Narratives_Aggregate_Order_By>;
  evaluation_ratings_aggregate?: InputMaybe<Evaluation_Ratings_Aggregate_Order_By>;
  evaluation_statistic?: InputMaybe<Evaluation_Statistics_Order_By>;
  extra_info?: InputMaybe<Order_By>;
  fasttextSimilarsByTarget_aggregate?: InputMaybe<Fasttext_Similars_Aggregate_Order_By>;
  fasttext_similars_aggregate?: InputMaybe<Fasttext_Similars_Aggregate_Order_By>;
  final_exam?: InputMaybe<Order_By>;
  fysem?: InputMaybe<Order_By>;
  last_enrollment?: InputMaybe<Order_By>;
  last_enrollment_course_id?: InputMaybe<Order_By>;
  last_enrollment_same_professors?: InputMaybe<Order_By>;
  last_enrollment_season_code?: InputMaybe<Order_By>;
  last_offered_course_id?: InputMaybe<Order_By>;
  listings_aggregate?: InputMaybe<Listings_Aggregate_Order_By>;
  locations_summary?: InputMaybe<Order_By>;
  regnotes?: InputMaybe<Order_By>;
  requirements?: InputMaybe<Order_By>;
  rp_attr?: InputMaybe<Order_By>;
  same_course_and_profs_id?: InputMaybe<Order_By>;
  same_course_id?: InputMaybe<Order_By>;
  season?: InputMaybe<Seasons_Order_By>;
  seasonBySeasonCode?: InputMaybe<Seasons_Order_By>;
  season_code?: InputMaybe<Order_By>;
  short_title?: InputMaybe<Order_By>;
  skills?: InputMaybe<Order_By>;
  syllabus_url?: InputMaybe<Order_By>;
  sysem?: InputMaybe<Order_By>;
  tfidfSimilarsByTarget_aggregate?: InputMaybe<Tfidf_Similars_Aggregate_Order_By>;
  tfidf_similars_aggregate?: InputMaybe<Tfidf_Similars_Aggregate_Order_By>;
  times_by_day?: InputMaybe<Order_By>;
  times_long_summary?: InputMaybe<Order_By>;
  times_summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "courses" */
export enum Courses_Select_Column {
  /** column name */
  Areas = 'areas',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  AverageRatingN = 'average_rating_n',
  /** column name */
  AverageRatingSameProfessors = 'average_rating_same_professors',
  /** column name */
  AverageRatingSameProfessorsN = 'average_rating_same_professors_n',
  /** column name */
  AverageWorkload = 'average_workload',
  /** column name */
  AverageWorkloadN = 'average_workload_n',
  /** column name */
  AverageWorkloadSameProfessors = 'average_workload_same_professors',
  /** column name */
  AverageWorkloadSameProfessorsN = 'average_workload_same_professors_n',
  /** column name */
  Classnotes = 'classnotes',
  /** column name */
  Colsem = 'colsem',
  /** column name */
  CourseHomeUrl = 'course_home_url',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Credits = 'credits',
  /** column name */
  Description = 'description',
  /** column name */
  ExtraInfo = 'extra_info',
  /** column name */
  FinalExam = 'final_exam',
  /** column name */
  Fysem = 'fysem',
  /** column name */
  LastEnrollment = 'last_enrollment',
  /** column name */
  LastEnrollmentCourseId = 'last_enrollment_course_id',
  /** column name */
  LastEnrollmentSameProfessors = 'last_enrollment_same_professors',
  /** column name */
  LastEnrollmentSeasonCode = 'last_enrollment_season_code',
  /** column name */
  LastOfferedCourseId = 'last_offered_course_id',
  /** column name */
  LocationsSummary = 'locations_summary',
  /** column name */
  Regnotes = 'regnotes',
  /** column name */
  Requirements = 'requirements',
  /** column name */
  RpAttr = 'rp_attr',
  /** column name */
  SameCourseAndProfsId = 'same_course_and_profs_id',
  /** column name */
  SameCourseId = 'same_course_id',
  /** column name */
  SeasonCode = 'season_code',
  /** column name */
  ShortTitle = 'short_title',
  /** column name */
  Skills = 'skills',
  /** column name */
  SyllabusUrl = 'syllabus_url',
  /** column name */
  Sysem = 'sysem',
  /** column name */
  TimesByDay = 'times_by_day',
  /** column name */
  TimesLongSummary = 'times_long_summary',
  /** column name */
  TimesSummary = 'times_summary',
  /** column name */
  Title = 'title'
}

/** aggregate stddev on columns */
export type Courses_Stddev_Fields = {
  __typename?: 'courses_stddev_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['Float']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Float']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "courses" */
export type Courses_Stddev_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Courses_Stddev_Pop_Fields = {
  __typename?: 'courses_stddev_pop_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['Float']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Float']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "courses" */
export type Courses_Stddev_Pop_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Courses_Stddev_Samp_Fields = {
  __typename?: 'courses_stddev_samp_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['Float']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Float']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "courses" */
export type Courses_Stddev_Samp_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Courses_Sum_Fields = {
  __typename?: 'courses_sum_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Int']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['float8']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Int']>;
  course_id?: Maybe<Scalars['Int']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['float8']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Int']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Int']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Int']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Int']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "courses" */
export type Courses_Sum_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Courses_Var_Pop_Fields = {
  __typename?: 'courses_var_pop_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['Float']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Float']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "courses" */
export type Courses_Var_Pop_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Courses_Var_Samp_Fields = {
  __typename?: 'courses_var_samp_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['Float']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Float']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "courses" */
export type Courses_Var_Samp_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Courses_Variance_Fields = {
  __typename?: 'courses_variance_fields';
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: Maybe<Scalars['Float']>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: Maybe<Scalars['Float']>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  /** Number of course credits */
  credits?: Maybe<Scalars['Float']>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: Maybe<Scalars['Float']>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: Maybe<Scalars['Float']>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "courses" */
export type Courses_Variance_Order_By = {
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings
   */
  average_rating?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average course rating for this course code,
   *         aggregated across all cross-listings with same set of professors
   */
  average_rating_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_rating_same_professors`
   */
  average_rating_same_professors_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings
   */
  average_workload?: InputMaybe<Order_By>;
  /** [computed] Number of courses used to compute `average_workload` */
  average_workload_n?: InputMaybe<Order_By>;
  /**
   * [computed] Historical average workload rating,
   *         aggregated across all cross-listings with same set of professors
   */
  average_workload_same_professors?: InputMaybe<Order_By>;
  /**
   * [computed] Number of courses used to compute
   *         `average_workload_same_professors`
   */
  average_workload_same_professors_n?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  /** Number of course credits */
  credits?: InputMaybe<Order_By>;
  /** [computed] Number of students enrolled in last offering of course */
  last_enrollment?: InputMaybe<Order_By>;
  /** [computed] Course from which last enrollment offering was pulled */
  last_enrollment_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Most recent previous offering of
   *         course (excluding future ones)
   */
  last_offered_course_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *         Same as 'same_course_id' with the constraint that all courses in a group were
   *         taught by the same professors.
   *
   */
  same_course_and_profs_id?: InputMaybe<Order_By>;
  /**
   * [computed] Unique ID for grouping courses by historical offering.
   *         All courses with a given ID are identical offerings across different semesters.
   *
   */
  same_course_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "demand_statistics" */
export type Demand_Statistics = {
  __typename?: 'demand_statistics';
  /** An object relationship */
  course: Courses;
  /** The course to which these demand statistics apply */
  course_id: Scalars['Int'];
  /** JSON dict containing demand stats by day */
  demand?: Maybe<Scalars['json']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Int']>;
  /** Latest demand date */
  latest_demand_date?: Maybe<Scalars['String']>;
};


/** columns and relationships of "demand_statistics" */
export type Demand_StatisticsDemandArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "demand_statistics" */
export type Demand_Statistics_Aggregate = {
  __typename?: 'demand_statistics_aggregate';
  aggregate?: Maybe<Demand_Statistics_Aggregate_Fields>;
  nodes: Array<Demand_Statistics>;
};

/** aggregate fields of "demand_statistics" */
export type Demand_Statistics_Aggregate_Fields = {
  __typename?: 'demand_statistics_aggregate_fields';
  avg?: Maybe<Demand_Statistics_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Demand_Statistics_Max_Fields>;
  min?: Maybe<Demand_Statistics_Min_Fields>;
  stddev?: Maybe<Demand_Statistics_Stddev_Fields>;
  stddev_pop?: Maybe<Demand_Statistics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Demand_Statistics_Stddev_Samp_Fields>;
  sum?: Maybe<Demand_Statistics_Sum_Fields>;
  var_pop?: Maybe<Demand_Statistics_Var_Pop_Fields>;
  var_samp?: Maybe<Demand_Statistics_Var_Samp_Fields>;
  variance?: Maybe<Demand_Statistics_Variance_Fields>;
};


/** aggregate fields of "demand_statistics" */
export type Demand_Statistics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Demand_Statistics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Demand_Statistics_Avg_Fields = {
  __typename?: 'demand_statistics_avg_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Float']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "demand_statistics". All fields are combined with a logical 'AND'. */
export type Demand_Statistics_Bool_Exp = {
  _and?: InputMaybe<Array<Demand_Statistics_Bool_Exp>>;
  _not?: InputMaybe<Demand_Statistics_Bool_Exp>;
  _or?: InputMaybe<Array<Demand_Statistics_Bool_Exp>>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  demand?: InputMaybe<Json_Comparison_Exp>;
  latest_demand?: InputMaybe<Int_Comparison_Exp>;
  latest_demand_date?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Demand_Statistics_Max_Fields = {
  __typename?: 'demand_statistics_max_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Int']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Int']>;
  /** Latest demand date */
  latest_demand_date?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Demand_Statistics_Min_Fields = {
  __typename?: 'demand_statistics_min_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Int']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Int']>;
  /** Latest demand date */
  latest_demand_date?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "demand_statistics". */
export type Demand_Statistics_Order_By = {
  course?: InputMaybe<Courses_Order_By>;
  course_id?: InputMaybe<Order_By>;
  demand?: InputMaybe<Order_By>;
  latest_demand?: InputMaybe<Order_By>;
  latest_demand_date?: InputMaybe<Order_By>;
};

/** select columns of table "demand_statistics" */
export enum Demand_Statistics_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Demand = 'demand',
  /** column name */
  LatestDemand = 'latest_demand',
  /** column name */
  LatestDemandDate = 'latest_demand_date'
}

/** aggregate stddev on columns */
export type Demand_Statistics_Stddev_Fields = {
  __typename?: 'demand_statistics_stddev_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Float']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Demand_Statistics_Stddev_Pop_Fields = {
  __typename?: 'demand_statistics_stddev_pop_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Float']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Demand_Statistics_Stddev_Samp_Fields = {
  __typename?: 'demand_statistics_stddev_samp_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Float']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Demand_Statistics_Sum_Fields = {
  __typename?: 'demand_statistics_sum_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Int']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Demand_Statistics_Var_Pop_Fields = {
  __typename?: 'demand_statistics_var_pop_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Float']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Demand_Statistics_Var_Samp_Fields = {
  __typename?: 'demand_statistics_var_samp_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Float']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Demand_Statistics_Variance_Fields = {
  __typename?: 'demand_statistics_variance_fields';
  /** The course to which these demand statistics apply */
  course_id?: Maybe<Scalars['Float']>;
  /** Latest demand count */
  latest_demand?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "discussions" */
export type Discussions = {
  __typename?: 'discussions';
  /** An array relationship */
  course_discussions: Array<Course_Discussions>;
  /** An aggregate relationship */
  course_discussions_aggregate: Course_Discussions_Aggregate;
  /** Discussion section ID */
  discussion_id: Scalars['Int'];
  /** Additional discussion section notes */
  info?: Maybe<Scalars['String']>;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Same format as for courses.
   */
  locations_summary?: Maybe<Scalars['String']>;
  /** Discussion section number */
  number: Scalars['String'];
  /** Discussion section subject */
  subject: Scalars['String'];
  /**
   * Course meeting times by day, with days as keys and
   *         tuples of `(start_time, end_time, location)`. Same format as for courses.
   */
  times_by_day?: Maybe<Scalars['json']>;
  /** Course times and locations. Same format as for courses. */
  times_long_summary?: Maybe<Scalars['String']>;
  /** Course times. Same format as for courses. */
  times_summary?: Maybe<Scalars['String']>;
};


/** columns and relationships of "discussions" */
export type DiscussionsCourse_DiscussionsArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


/** columns and relationships of "discussions" */
export type DiscussionsCourse_Discussions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


/** columns and relationships of "discussions" */
export type DiscussionsTimes_By_DayArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "discussions" */
export type Discussions_Aggregate = {
  __typename?: 'discussions_aggregate';
  aggregate?: Maybe<Discussions_Aggregate_Fields>;
  nodes: Array<Discussions>;
};

/** aggregate fields of "discussions" */
export type Discussions_Aggregate_Fields = {
  __typename?: 'discussions_aggregate_fields';
  avg?: Maybe<Discussions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Discussions_Max_Fields>;
  min?: Maybe<Discussions_Min_Fields>;
  stddev?: Maybe<Discussions_Stddev_Fields>;
  stddev_pop?: Maybe<Discussions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Discussions_Stddev_Samp_Fields>;
  sum?: Maybe<Discussions_Sum_Fields>;
  var_pop?: Maybe<Discussions_Var_Pop_Fields>;
  var_samp?: Maybe<Discussions_Var_Samp_Fields>;
  variance?: Maybe<Discussions_Variance_Fields>;
};


/** aggregate fields of "discussions" */
export type Discussions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Discussions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Discussions_Avg_Fields = {
  __typename?: 'discussions_avg_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "discussions". All fields are combined with a logical 'AND'. */
export type Discussions_Bool_Exp = {
  _and?: InputMaybe<Array<Discussions_Bool_Exp>>;
  _not?: InputMaybe<Discussions_Bool_Exp>;
  _or?: InputMaybe<Array<Discussions_Bool_Exp>>;
  course_discussions?: InputMaybe<Course_Discussions_Bool_Exp>;
  discussion_id?: InputMaybe<Int_Comparison_Exp>;
  info?: InputMaybe<String_Comparison_Exp>;
  locations_summary?: InputMaybe<String_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  times_by_day?: InputMaybe<Json_Comparison_Exp>;
  times_long_summary?: InputMaybe<String_Comparison_Exp>;
  times_summary?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Discussions_Max_Fields = {
  __typename?: 'discussions_max_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Int']>;
  /** Additional discussion section notes */
  info?: Maybe<Scalars['String']>;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Same format as for courses.
   */
  locations_summary?: Maybe<Scalars['String']>;
  /** Discussion section number */
  number?: Maybe<Scalars['String']>;
  /** Discussion section subject */
  subject?: Maybe<Scalars['String']>;
  /** Course times and locations. Same format as for courses. */
  times_long_summary?: Maybe<Scalars['String']>;
  /** Course times. Same format as for courses. */
  times_summary?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Discussions_Min_Fields = {
  __typename?: 'discussions_min_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Int']>;
  /** Additional discussion section notes */
  info?: Maybe<Scalars['String']>;
  /**
   * If single location, is `<location>`; otherwise is
   *         `<location> + <n_other_locations>` where the first location is the one
   *         with the greatest number of days. Same format as for courses.
   */
  locations_summary?: Maybe<Scalars['String']>;
  /** Discussion section number */
  number?: Maybe<Scalars['String']>;
  /** Discussion section subject */
  subject?: Maybe<Scalars['String']>;
  /** Course times and locations. Same format as for courses. */
  times_long_summary?: Maybe<Scalars['String']>;
  /** Course times. Same format as for courses. */
  times_summary?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "discussions". */
export type Discussions_Order_By = {
  course_discussions_aggregate?: InputMaybe<Course_Discussions_Aggregate_Order_By>;
  discussion_id?: InputMaybe<Order_By>;
  info?: InputMaybe<Order_By>;
  locations_summary?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  times_by_day?: InputMaybe<Order_By>;
  times_long_summary?: InputMaybe<Order_By>;
  times_summary?: InputMaybe<Order_By>;
};

/** select columns of table "discussions" */
export enum Discussions_Select_Column {
  /** column name */
  DiscussionId = 'discussion_id',
  /** column name */
  Info = 'info',
  /** column name */
  LocationsSummary = 'locations_summary',
  /** column name */
  Number = 'number',
  /** column name */
  Subject = 'subject',
  /** column name */
  TimesByDay = 'times_by_day',
  /** column name */
  TimesLongSummary = 'times_long_summary',
  /** column name */
  TimesSummary = 'times_summary'
}

/** aggregate stddev on columns */
export type Discussions_Stddev_Fields = {
  __typename?: 'discussions_stddev_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Discussions_Stddev_Pop_Fields = {
  __typename?: 'discussions_stddev_pop_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Discussions_Stddev_Samp_Fields = {
  __typename?: 'discussions_stddev_samp_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Discussions_Sum_Fields = {
  __typename?: 'discussions_sum_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Discussions_Var_Pop_Fields = {
  __typename?: 'discussions_var_pop_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Discussions_Var_Samp_Fields = {
  __typename?: 'discussions_var_samp_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Discussions_Variance_Fields = {
  __typename?: 'discussions_variance_fields';
  /** Discussion section ID */
  discussion_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "evaluation_narratives" */
export type Evaluation_Narratives = {
  __typename?: 'evaluation_narratives';
  /** Response to the question */
  comment?: Maybe<Scalars['String']>;
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['float8']>;
  /** An object relationship */
  course: Courses;
  /** The course to which this narrative comment applies */
  course_id: Scalars['Int'];
  /** An object relationship */
  evaluation_question: Evaluation_Questions;
  id: Scalars['Int'];
  /** Question to which this narrative comment responds */
  question_code: Scalars['String'];
};

/** aggregated selection of "evaluation_narratives" */
export type Evaluation_Narratives_Aggregate = {
  __typename?: 'evaluation_narratives_aggregate';
  aggregate?: Maybe<Evaluation_Narratives_Aggregate_Fields>;
  nodes: Array<Evaluation_Narratives>;
};

/** aggregate fields of "evaluation_narratives" */
export type Evaluation_Narratives_Aggregate_Fields = {
  __typename?: 'evaluation_narratives_aggregate_fields';
  avg?: Maybe<Evaluation_Narratives_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Evaluation_Narratives_Max_Fields>;
  min?: Maybe<Evaluation_Narratives_Min_Fields>;
  stddev?: Maybe<Evaluation_Narratives_Stddev_Fields>;
  stddev_pop?: Maybe<Evaluation_Narratives_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Evaluation_Narratives_Stddev_Samp_Fields>;
  sum?: Maybe<Evaluation_Narratives_Sum_Fields>;
  var_pop?: Maybe<Evaluation_Narratives_Var_Pop_Fields>;
  var_samp?: Maybe<Evaluation_Narratives_Var_Samp_Fields>;
  variance?: Maybe<Evaluation_Narratives_Variance_Fields>;
};


/** aggregate fields of "evaluation_narratives" */
export type Evaluation_Narratives_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "evaluation_narratives" */
export type Evaluation_Narratives_Aggregate_Order_By = {
  avg?: InputMaybe<Evaluation_Narratives_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Evaluation_Narratives_Max_Order_By>;
  min?: InputMaybe<Evaluation_Narratives_Min_Order_By>;
  stddev?: InputMaybe<Evaluation_Narratives_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Evaluation_Narratives_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Evaluation_Narratives_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Evaluation_Narratives_Sum_Order_By>;
  var_pop?: InputMaybe<Evaluation_Narratives_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Evaluation_Narratives_Var_Samp_Order_By>;
  variance?: InputMaybe<Evaluation_Narratives_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Evaluation_Narratives_Avg_Fields = {
  __typename?: 'evaluation_narratives_avg_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['Float']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Avg_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "evaluation_narratives". All fields are combined with a logical 'AND'. */
export type Evaluation_Narratives_Bool_Exp = {
  _and?: InputMaybe<Array<Evaluation_Narratives_Bool_Exp>>;
  _not?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
  _or?: InputMaybe<Array<Evaluation_Narratives_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  comment_compound?: InputMaybe<Float8_Comparison_Exp>;
  comment_neg?: InputMaybe<Float8_Comparison_Exp>;
  comment_neu?: InputMaybe<Float8_Comparison_Exp>;
  comment_pos?: InputMaybe<Float8_Comparison_Exp>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  evaluation_question?: InputMaybe<Evaluation_Questions_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  question_code?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Evaluation_Narratives_Max_Fields = {
  __typename?: 'evaluation_narratives_max_fields';
  /** Response to the question */
  comment?: Maybe<Scalars['String']>;
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['float8']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Question to which this narrative comment responds */
  question_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Max_Order_By = {
  /** Response to the question */
  comment?: InputMaybe<Order_By>;
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Question to which this narrative comment responds */
  question_code?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Evaluation_Narratives_Min_Fields = {
  __typename?: 'evaluation_narratives_min_fields';
  /** Response to the question */
  comment?: Maybe<Scalars['String']>;
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['float8']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Question to which this narrative comment responds */
  question_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Min_Order_By = {
  /** Response to the question */
  comment?: InputMaybe<Order_By>;
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Question to which this narrative comment responds */
  question_code?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "evaluation_narratives". */
export type Evaluation_Narratives_Order_By = {
  comment?: InputMaybe<Order_By>;
  comment_compound?: InputMaybe<Order_By>;
  comment_neg?: InputMaybe<Order_By>;
  comment_neu?: InputMaybe<Order_By>;
  comment_pos?: InputMaybe<Order_By>;
  course?: InputMaybe<Courses_Order_By>;
  course_id?: InputMaybe<Order_By>;
  evaluation_question?: InputMaybe<Evaluation_Questions_Order_By>;
  id?: InputMaybe<Order_By>;
  question_code?: InputMaybe<Order_By>;
};

/** select columns of table "evaluation_narratives" */
export enum Evaluation_Narratives_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CommentCompound = 'comment_compound',
  /** column name */
  CommentNeg = 'comment_neg',
  /** column name */
  CommentNeu = 'comment_neu',
  /** column name */
  CommentPos = 'comment_pos',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionCode = 'question_code'
}

/** aggregate stddev on columns */
export type Evaluation_Narratives_Stddev_Fields = {
  __typename?: 'evaluation_narratives_stddev_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['Float']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Stddev_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Evaluation_Narratives_Stddev_Pop_Fields = {
  __typename?: 'evaluation_narratives_stddev_pop_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['Float']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Stddev_Pop_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Evaluation_Narratives_Stddev_Samp_Fields = {
  __typename?: 'evaluation_narratives_stddev_samp_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['Float']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Stddev_Samp_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Evaluation_Narratives_Sum_Fields = {
  __typename?: 'evaluation_narratives_sum_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['float8']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['float8']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Sum_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Evaluation_Narratives_Var_Pop_Fields = {
  __typename?: 'evaluation_narratives_var_pop_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['Float']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Var_Pop_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Evaluation_Narratives_Var_Samp_Fields = {
  __typename?: 'evaluation_narratives_var_samp_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['Float']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Var_Samp_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Evaluation_Narratives_Variance_Fields = {
  __typename?: 'evaluation_narratives_variance_fields';
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: Maybe<Scalars['Float']>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: Maybe<Scalars['Float']>;
  /** The course to which this narrative comment applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "evaluation_narratives" */
export type Evaluation_Narratives_Variance_Order_By = {
  /** VADER sentiment 'compound' score (valence aggregate of neg, neu, pos) */
  comment_compound?: InputMaybe<Order_By>;
  /** VADER sentiment 'neg' score (negativity) */
  comment_neg?: InputMaybe<Order_By>;
  /** VADER sentiment 'neu' score (neutrality) */
  comment_neu?: InputMaybe<Order_By>;
  /** VADER sentiment 'pos' score (positivity) */
  comment_pos?: InputMaybe<Order_By>;
  /** The course to which this narrative comment applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "evaluation_questions" */
export type Evaluation_Questions = {
  __typename?: 'evaluation_questions';
  /** An array relationship */
  evaluation_narratives: Array<Evaluation_Narratives>;
  /** An aggregate relationship */
  evaluation_narratives_aggregate: Evaluation_Narratives_Aggregate;
  /** An array relationship */
  evaluation_ratings: Array<Evaluation_Ratings>;
  /** An aggregate relationship */
  evaluation_ratings_aggregate: Evaluation_Ratings_Aggregate;
  /**
   * True if the question has narrative responses.
   *         False if the question has categorica/numerical responses
   */
  is_narrative?: Maybe<Scalars['Boolean']>;
  /** JSON array of possible responses (only if the question is not a narrative */
  options?: Maybe<Scalars['json']>;
  /** Question code from OCE (e.g. "YC402") */
  question_code: Scalars['String'];
  /** The question text */
  question_text?: Maybe<Scalars['String']>;
  /**
   * [computed] Question type (used for computing ratings, since one
   *         question may be coded differently for different respondants)
   */
  tag?: Maybe<Scalars['String']>;
};


/** columns and relationships of "evaluation_questions" */
export type Evaluation_QuestionsEvaluation_NarrativesArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


/** columns and relationships of "evaluation_questions" */
export type Evaluation_QuestionsEvaluation_Narratives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


/** columns and relationships of "evaluation_questions" */
export type Evaluation_QuestionsEvaluation_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


/** columns and relationships of "evaluation_questions" */
export type Evaluation_QuestionsEvaluation_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


/** columns and relationships of "evaluation_questions" */
export type Evaluation_QuestionsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "evaluation_questions" */
export type Evaluation_Questions_Aggregate = {
  __typename?: 'evaluation_questions_aggregate';
  aggregate?: Maybe<Evaluation_Questions_Aggregate_Fields>;
  nodes: Array<Evaluation_Questions>;
};

/** aggregate fields of "evaluation_questions" */
export type Evaluation_Questions_Aggregate_Fields = {
  __typename?: 'evaluation_questions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Evaluation_Questions_Max_Fields>;
  min?: Maybe<Evaluation_Questions_Min_Fields>;
};


/** aggregate fields of "evaluation_questions" */
export type Evaluation_Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Evaluation_Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "evaluation_questions". All fields are combined with a logical 'AND'. */
export type Evaluation_Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Evaluation_Questions_Bool_Exp>>;
  _not?: InputMaybe<Evaluation_Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Evaluation_Questions_Bool_Exp>>;
  evaluation_narratives?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
  evaluation_ratings?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
  is_narrative?: InputMaybe<Boolean_Comparison_Exp>;
  options?: InputMaybe<Json_Comparison_Exp>;
  question_code?: InputMaybe<String_Comparison_Exp>;
  question_text?: InputMaybe<String_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Evaluation_Questions_Max_Fields = {
  __typename?: 'evaluation_questions_max_fields';
  /** Question code from OCE (e.g. "YC402") */
  question_code?: Maybe<Scalars['String']>;
  /** The question text */
  question_text?: Maybe<Scalars['String']>;
  /**
   * [computed] Question type (used for computing ratings, since one
   *         question may be coded differently for different respondants)
   */
  tag?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Evaluation_Questions_Min_Fields = {
  __typename?: 'evaluation_questions_min_fields';
  /** Question code from OCE (e.g. "YC402") */
  question_code?: Maybe<Scalars['String']>;
  /** The question text */
  question_text?: Maybe<Scalars['String']>;
  /**
   * [computed] Question type (used for computing ratings, since one
   *         question may be coded differently for different respondants)
   */
  tag?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "evaluation_questions". */
export type Evaluation_Questions_Order_By = {
  evaluation_narratives_aggregate?: InputMaybe<Evaluation_Narratives_Aggregate_Order_By>;
  evaluation_ratings_aggregate?: InputMaybe<Evaluation_Ratings_Aggregate_Order_By>;
  is_narrative?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  question_code?: InputMaybe<Order_By>;
  question_text?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
};

/** select columns of table "evaluation_questions" */
export enum Evaluation_Questions_Select_Column {
  /** column name */
  IsNarrative = 'is_narrative',
  /** column name */
  Options = 'options',
  /** column name */
  QuestionCode = 'question_code',
  /** column name */
  QuestionText = 'question_text',
  /** column name */
  Tag = 'tag'
}

/** columns and relationships of "evaluation_ratings" */
export type Evaluation_Ratings = {
  __typename?: 'evaluation_ratings';
  /** An object relationship */
  course: Courses;
  /** The course to which this rating applies */
  course_id: Scalars['Int'];
  /** An object relationship */
  evaluation_question: Evaluation_Questions;
  id: Scalars['Int'];
  /** Question to which this rating responds */
  question_code: Scalars['String'];
  /** JSON array of the response counts for each option */
  rating?: Maybe<Scalars['json']>;
};


/** columns and relationships of "evaluation_ratings" */
export type Evaluation_RatingsRatingArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "evaluation_ratings" */
export type Evaluation_Ratings_Aggregate = {
  __typename?: 'evaluation_ratings_aggregate';
  aggregate?: Maybe<Evaluation_Ratings_Aggregate_Fields>;
  nodes: Array<Evaluation_Ratings>;
};

/** aggregate fields of "evaluation_ratings" */
export type Evaluation_Ratings_Aggregate_Fields = {
  __typename?: 'evaluation_ratings_aggregate_fields';
  avg?: Maybe<Evaluation_Ratings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Evaluation_Ratings_Max_Fields>;
  min?: Maybe<Evaluation_Ratings_Min_Fields>;
  stddev?: Maybe<Evaluation_Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Evaluation_Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Evaluation_Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Evaluation_Ratings_Sum_Fields>;
  var_pop?: Maybe<Evaluation_Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Evaluation_Ratings_Var_Samp_Fields>;
  variance?: Maybe<Evaluation_Ratings_Variance_Fields>;
};


/** aggregate fields of "evaluation_ratings" */
export type Evaluation_Ratings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "evaluation_ratings" */
export type Evaluation_Ratings_Aggregate_Order_By = {
  avg?: InputMaybe<Evaluation_Ratings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Evaluation_Ratings_Max_Order_By>;
  min?: InputMaybe<Evaluation_Ratings_Min_Order_By>;
  stddev?: InputMaybe<Evaluation_Ratings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Evaluation_Ratings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Evaluation_Ratings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Evaluation_Ratings_Sum_Order_By>;
  var_pop?: InputMaybe<Evaluation_Ratings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Evaluation_Ratings_Var_Samp_Order_By>;
  variance?: InputMaybe<Evaluation_Ratings_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Evaluation_Ratings_Avg_Fields = {
  __typename?: 'evaluation_ratings_avg_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Avg_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "evaluation_ratings". All fields are combined with a logical 'AND'. */
export type Evaluation_Ratings_Bool_Exp = {
  _and?: InputMaybe<Array<Evaluation_Ratings_Bool_Exp>>;
  _not?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
  _or?: InputMaybe<Array<Evaluation_Ratings_Bool_Exp>>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  evaluation_question?: InputMaybe<Evaluation_Questions_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  question_code?: InputMaybe<String_Comparison_Exp>;
  rating?: InputMaybe<Json_Comparison_Exp>;
};

/** aggregate max on columns */
export type Evaluation_Ratings_Max_Fields = {
  __typename?: 'evaluation_ratings_max_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Question to which this rating responds */
  question_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Max_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Question to which this rating responds */
  question_code?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Evaluation_Ratings_Min_Fields = {
  __typename?: 'evaluation_ratings_min_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Question to which this rating responds */
  question_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Min_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Question to which this rating responds */
  question_code?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "evaluation_ratings". */
export type Evaluation_Ratings_Order_By = {
  course?: InputMaybe<Courses_Order_By>;
  course_id?: InputMaybe<Order_By>;
  evaluation_question?: InputMaybe<Evaluation_Questions_Order_By>;
  id?: InputMaybe<Order_By>;
  question_code?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** select columns of table "evaluation_ratings" */
export enum Evaluation_Ratings_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionCode = 'question_code',
  /** column name */
  Rating = 'rating'
}

/** aggregate stddev on columns */
export type Evaluation_Ratings_Stddev_Fields = {
  __typename?: 'evaluation_ratings_stddev_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Stddev_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Evaluation_Ratings_Stddev_Pop_Fields = {
  __typename?: 'evaluation_ratings_stddev_pop_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Stddev_Pop_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Evaluation_Ratings_Stddev_Samp_Fields = {
  __typename?: 'evaluation_ratings_stddev_samp_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Stddev_Samp_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Evaluation_Ratings_Sum_Fields = {
  __typename?: 'evaluation_ratings_sum_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Sum_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Evaluation_Ratings_Var_Pop_Fields = {
  __typename?: 'evaluation_ratings_var_pop_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Var_Pop_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Evaluation_Ratings_Var_Samp_Fields = {
  __typename?: 'evaluation_ratings_var_samp_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Var_Samp_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Evaluation_Ratings_Variance_Fields = {
  __typename?: 'evaluation_ratings_variance_fields';
  /** The course to which this rating applies */
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "evaluation_ratings" */
export type Evaluation_Ratings_Variance_Order_By = {
  /** The course to which this rating applies */
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "evaluation_statistics" */
export type Evaluation_Statistics = {
  __typename?: 'evaluation_statistics';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['float8']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['float8']>;
  /** An object relationship */
  course: Courses;
  /** The course associated with these statistics */
  course_id: Scalars['Int'];
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Int']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Int']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Int']>;
  /** Arbitrary additional information attached to an evaluation */
  extras?: Maybe<Scalars['json']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Int']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "evaluation_statistics" */
export type Evaluation_StatisticsExtrasArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "evaluation_statistics" */
export type Evaluation_Statistics_Aggregate = {
  __typename?: 'evaluation_statistics_aggregate';
  aggregate?: Maybe<Evaluation_Statistics_Aggregate_Fields>;
  nodes: Array<Evaluation_Statistics>;
};

/** aggregate fields of "evaluation_statistics" */
export type Evaluation_Statistics_Aggregate_Fields = {
  __typename?: 'evaluation_statistics_aggregate_fields';
  avg?: Maybe<Evaluation_Statistics_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Evaluation_Statistics_Max_Fields>;
  min?: Maybe<Evaluation_Statistics_Min_Fields>;
  stddev?: Maybe<Evaluation_Statistics_Stddev_Fields>;
  stddev_pop?: Maybe<Evaluation_Statistics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Evaluation_Statistics_Stddev_Samp_Fields>;
  sum?: Maybe<Evaluation_Statistics_Sum_Fields>;
  var_pop?: Maybe<Evaluation_Statistics_Var_Pop_Fields>;
  var_samp?: Maybe<Evaluation_Statistics_Var_Samp_Fields>;
  variance?: Maybe<Evaluation_Statistics_Variance_Fields>;
};


/** aggregate fields of "evaluation_statistics" */
export type Evaluation_Statistics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Evaluation_Statistics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Evaluation_Statistics_Avg_Fields = {
  __typename?: 'evaluation_statistics_avg_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['Float']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['Float']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Float']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Float']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Float']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Float']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Float']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "evaluation_statistics". All fields are combined with a logical 'AND'. */
export type Evaluation_Statistics_Bool_Exp = {
  _and?: InputMaybe<Array<Evaluation_Statistics_Bool_Exp>>;
  _not?: InputMaybe<Evaluation_Statistics_Bool_Exp>;
  _or?: InputMaybe<Array<Evaluation_Statistics_Bool_Exp>>;
  avg_rating?: InputMaybe<Float8_Comparison_Exp>;
  avg_workload?: InputMaybe<Float8_Comparison_Exp>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  declined?: InputMaybe<Int_Comparison_Exp>;
  enrolled?: InputMaybe<Int_Comparison_Exp>;
  enrollment?: InputMaybe<Int_Comparison_Exp>;
  extras?: InputMaybe<Json_Comparison_Exp>;
  no_response?: InputMaybe<Int_Comparison_Exp>;
  responses?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Evaluation_Statistics_Max_Fields = {
  __typename?: 'evaluation_statistics_max_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['float8']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['float8']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Int']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Int']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Int']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Int']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Int']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Evaluation_Statistics_Min_Fields = {
  __typename?: 'evaluation_statistics_min_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['float8']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['float8']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Int']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Int']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Int']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Int']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Int']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "evaluation_statistics". */
export type Evaluation_Statistics_Order_By = {
  avg_rating?: InputMaybe<Order_By>;
  avg_workload?: InputMaybe<Order_By>;
  course?: InputMaybe<Courses_Order_By>;
  course_id?: InputMaybe<Order_By>;
  declined?: InputMaybe<Order_By>;
  enrolled?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  extras?: InputMaybe<Order_By>;
  no_response?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
};

/** select columns of table "evaluation_statistics" */
export enum Evaluation_Statistics_Select_Column {
  /** column name */
  AvgRating = 'avg_rating',
  /** column name */
  AvgWorkload = 'avg_workload',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Declined = 'declined',
  /** column name */
  Enrolled = 'enrolled',
  /** column name */
  Enrollment = 'enrollment',
  /** column name */
  Extras = 'extras',
  /** column name */
  NoResponse = 'no_response',
  /** column name */
  Responses = 'responses'
}

/** aggregate stddev on columns */
export type Evaluation_Statistics_Stddev_Fields = {
  __typename?: 'evaluation_statistics_stddev_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['Float']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['Float']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Float']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Float']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Float']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Float']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Float']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Evaluation_Statistics_Stddev_Pop_Fields = {
  __typename?: 'evaluation_statistics_stddev_pop_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['Float']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['Float']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Float']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Float']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Float']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Float']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Float']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Evaluation_Statistics_Stddev_Samp_Fields = {
  __typename?: 'evaluation_statistics_stddev_samp_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['Float']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['Float']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Float']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Float']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Float']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Float']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Float']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Evaluation_Statistics_Sum_Fields = {
  __typename?: 'evaluation_statistics_sum_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['float8']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['float8']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Int']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Int']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Int']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Int']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Int']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Evaluation_Statistics_Var_Pop_Fields = {
  __typename?: 'evaluation_statistics_var_pop_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['Float']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['Float']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Float']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Float']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Float']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Float']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Float']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Evaluation_Statistics_Var_Samp_Fields = {
  __typename?: 'evaluation_statistics_var_samp_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['Float']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['Float']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Float']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Float']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Float']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Float']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Float']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Evaluation_Statistics_Variance_Fields = {
  __typename?: 'evaluation_statistics_variance_fields';
  /** [computed] Average overall rating */
  avg_rating?: Maybe<Scalars['Float']>;
  /** [computed] Average workload rating */
  avg_workload?: Maybe<Scalars['Float']>;
  /** The course associated with these statistics */
  course_id?: Maybe<Scalars['Float']>;
  /** Number of students who declined to respond */
  declined?: Maybe<Scalars['Float']>;
  /** Number of students enrolled in course */
  enrolled?: Maybe<Scalars['Float']>;
  /** Placeholder for compatibility (previously held JSON for enrollment) */
  enrollment?: Maybe<Scalars['Float']>;
  /** Number of students who did not respond */
  no_response?: Maybe<Scalars['Float']>;
  /** Number of responses */
  responses?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "fasttext_similars" */
export type Fasttext_Similars = {
  __typename?: 'fasttext_similars';
  /** An object relationship */
  course: Courses;
  /** An object relationship */
  courseByTarget: Courses;
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source: Scalars['Int'];
  target: Scalars['Int'];
};

/** aggregated selection of "fasttext_similars" */
export type Fasttext_Similars_Aggregate = {
  __typename?: 'fasttext_similars_aggregate';
  aggregate?: Maybe<Fasttext_Similars_Aggregate_Fields>;
  nodes: Array<Fasttext_Similars>;
};

/** aggregate fields of "fasttext_similars" */
export type Fasttext_Similars_Aggregate_Fields = {
  __typename?: 'fasttext_similars_aggregate_fields';
  avg?: Maybe<Fasttext_Similars_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Fasttext_Similars_Max_Fields>;
  min?: Maybe<Fasttext_Similars_Min_Fields>;
  stddev?: Maybe<Fasttext_Similars_Stddev_Fields>;
  stddev_pop?: Maybe<Fasttext_Similars_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fasttext_Similars_Stddev_Samp_Fields>;
  sum?: Maybe<Fasttext_Similars_Sum_Fields>;
  var_pop?: Maybe<Fasttext_Similars_Var_Pop_Fields>;
  var_samp?: Maybe<Fasttext_Similars_Var_Samp_Fields>;
  variance?: Maybe<Fasttext_Similars_Variance_Fields>;
};


/** aggregate fields of "fasttext_similars" */
export type Fasttext_Similars_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fasttext_similars" */
export type Fasttext_Similars_Aggregate_Order_By = {
  avg?: InputMaybe<Fasttext_Similars_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fasttext_Similars_Max_Order_By>;
  min?: InputMaybe<Fasttext_Similars_Min_Order_By>;
  stddev?: InputMaybe<Fasttext_Similars_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fasttext_Similars_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fasttext_Similars_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fasttext_Similars_Sum_Order_By>;
  var_pop?: InputMaybe<Fasttext_Similars_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fasttext_Similars_Var_Samp_Order_By>;
  variance?: InputMaybe<Fasttext_Similars_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Fasttext_Similars_Avg_Fields = {
  __typename?: 'fasttext_similars_avg_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Avg_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fasttext_similars". All fields are combined with a logical 'AND'. */
export type Fasttext_Similars_Bool_Exp = {
  _and?: InputMaybe<Array<Fasttext_Similars_Bool_Exp>>;
  _not?: InputMaybe<Fasttext_Similars_Bool_Exp>;
  _or?: InputMaybe<Array<Fasttext_Similars_Bool_Exp>>;
  course?: InputMaybe<Courses_Bool_Exp>;
  courseByTarget?: InputMaybe<Courses_Bool_Exp>;
  rank?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
  target?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Fasttext_Similars_Max_Fields = {
  __typename?: 'fasttext_similars_max_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Max_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fasttext_Similars_Min_Fields = {
  __typename?: 'fasttext_similars_min_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Min_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "fasttext_similars". */
export type Fasttext_Similars_Order_By = {
  course?: InputMaybe<Courses_Order_By>;
  courseByTarget?: InputMaybe<Courses_Order_By>;
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** select columns of table "fasttext_similars" */
export enum Fasttext_Similars_Select_Column {
  /** column name */
  Rank = 'rank',
  /** column name */
  Source = 'source',
  /** column name */
  Target = 'target'
}

/** aggregate stddev on columns */
export type Fasttext_Similars_Stddev_Fields = {
  __typename?: 'fasttext_similars_stddev_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Stddev_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fasttext_Similars_Stddev_Pop_Fields = {
  __typename?: 'fasttext_similars_stddev_pop_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Stddev_Pop_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fasttext_Similars_Stddev_Samp_Fields = {
  __typename?: 'fasttext_similars_stddev_samp_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Stddev_Samp_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Fasttext_Similars_Sum_Fields = {
  __typename?: 'fasttext_similars_sum_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Sum_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Fasttext_Similars_Var_Pop_Fields = {
  __typename?: 'fasttext_similars_var_pop_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Var_Pop_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fasttext_Similars_Var_Samp_Fields = {
  __typename?: 'fasttext_similars_var_samp_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Var_Samp_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fasttext_Similars_Variance_Fields = {
  __typename?: 'fasttext_similars_variance_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "fasttext_similars" */
export type Fasttext_Similars_Variance_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** columns and relationships of "flags" */
export type Flags = {
  __typename?: 'flags';
  /** An array relationship */
  course_flags: Array<Course_Flags>;
  /** An aggregate relationship */
  course_flags_aggregate: Course_Flags_Aggregate;
  /** Flag ID */
  flag_id: Scalars['Int'];
  /** Flag text */
  flag_text: Scalars['String'];
};


/** columns and relationships of "flags" */
export type FlagsCourse_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};


/** columns and relationships of "flags" */
export type FlagsCourse_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};

/** aggregated selection of "flags" */
export type Flags_Aggregate = {
  __typename?: 'flags_aggregate';
  aggregate?: Maybe<Flags_Aggregate_Fields>;
  nodes: Array<Flags>;
};

/** aggregate fields of "flags" */
export type Flags_Aggregate_Fields = {
  __typename?: 'flags_aggregate_fields';
  avg?: Maybe<Flags_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Flags_Max_Fields>;
  min?: Maybe<Flags_Min_Fields>;
  stddev?: Maybe<Flags_Stddev_Fields>;
  stddev_pop?: Maybe<Flags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Flags_Stddev_Samp_Fields>;
  sum?: Maybe<Flags_Sum_Fields>;
  var_pop?: Maybe<Flags_Var_Pop_Fields>;
  var_samp?: Maybe<Flags_Var_Samp_Fields>;
  variance?: Maybe<Flags_Variance_Fields>;
};


/** aggregate fields of "flags" */
export type Flags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Flags_Avg_Fields = {
  __typename?: 'flags_avg_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "flags". All fields are combined with a logical 'AND'. */
export type Flags_Bool_Exp = {
  _and?: InputMaybe<Array<Flags_Bool_Exp>>;
  _not?: InputMaybe<Flags_Bool_Exp>;
  _or?: InputMaybe<Array<Flags_Bool_Exp>>;
  course_flags?: InputMaybe<Course_Flags_Bool_Exp>;
  flag_id?: InputMaybe<Int_Comparison_Exp>;
  flag_text?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Flags_Max_Fields = {
  __typename?: 'flags_max_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Int']>;
  /** Flag text */
  flag_text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Flags_Min_Fields = {
  __typename?: 'flags_min_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Int']>;
  /** Flag text */
  flag_text?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "flags". */
export type Flags_Order_By = {
  course_flags_aggregate?: InputMaybe<Course_Flags_Aggregate_Order_By>;
  flag_id?: InputMaybe<Order_By>;
  flag_text?: InputMaybe<Order_By>;
};

/** select columns of table "flags" */
export enum Flags_Select_Column {
  /** column name */
  FlagId = 'flag_id',
  /** column name */
  FlagText = 'flag_text'
}

/** aggregate stddev on columns */
export type Flags_Stddev_Fields = {
  __typename?: 'flags_stddev_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Flags_Stddev_Pop_Fields = {
  __typename?: 'flags_stddev_pop_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Flags_Stddev_Samp_Fields = {
  __typename?: 'flags_stddev_samp_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Flags_Sum_Fields = {
  __typename?: 'flags_sum_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Flags_Var_Pop_Fields = {
  __typename?: 'flags_var_pop_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Flags_Var_Samp_Fields = {
  __typename?: 'flags_var_samp_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Flags_Variance_Fields = {
  __typename?: 'flags_variance_fields';
  /** Flag ID */
  flag_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "listings" */
export type Listings = {
  __typename?: 'listings';
  /** An array relationship */
  computed_listing_infos: Array<Computed_Listing_Info>;
  /** An aggregate relationship */
  computed_listing_infos_aggregate: Computed_Listing_Info_Aggregate;
  /** An object relationship */
  course: Courses;
  /** [computed] subject + number (e.g. "AMST 312") */
  course_code?: Maybe<Scalars['String']>;
  /** Course that the listing refers to */
  course_id: Scalars['Int'];
  /** The CRN associated with this listing */
  crn: Scalars['Int'];
  /** Listing ID */
  listing_id: Scalars['Int'];
  /** Course number in the given subject (e.g. "120" or "S120") */
  number: Scalars['String'];
  /** School (e.g. YC, GS, MG) that the course is listed under */
  school?: Maybe<Scalars['String']>;
  /** An object relationship */
  season: Seasons;
  /** When the course/listing is being taught, mapping to `seasons` */
  season_code: Scalars['String'];
  /** Course section for the given subject and number */
  section: Scalars['String'];
  /** Subject the course is listed under (e.g. "AMST") */
  subject: Scalars['String'];
};


/** columns and relationships of "listings" */
export type ListingsComputed_Listing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};


/** columns and relationships of "listings" */
export type ListingsComputed_Listing_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};

/** aggregated selection of "listings" */
export type Listings_Aggregate = {
  __typename?: 'listings_aggregate';
  aggregate?: Maybe<Listings_Aggregate_Fields>;
  nodes: Array<Listings>;
};

/** aggregate fields of "listings" */
export type Listings_Aggregate_Fields = {
  __typename?: 'listings_aggregate_fields';
  avg?: Maybe<Listings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Listings_Max_Fields>;
  min?: Maybe<Listings_Min_Fields>;
  stddev?: Maybe<Listings_Stddev_Fields>;
  stddev_pop?: Maybe<Listings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Listings_Stddev_Samp_Fields>;
  sum?: Maybe<Listings_Sum_Fields>;
  var_pop?: Maybe<Listings_Var_Pop_Fields>;
  var_samp?: Maybe<Listings_Var_Samp_Fields>;
  variance?: Maybe<Listings_Variance_Fields>;
};


/** aggregate fields of "listings" */
export type Listings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Listings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "listings" */
export type Listings_Aggregate_Order_By = {
  avg?: InputMaybe<Listings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Listings_Max_Order_By>;
  min?: InputMaybe<Listings_Min_Order_By>;
  stddev?: InputMaybe<Listings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Listings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Listings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Listings_Sum_Order_By>;
  var_pop?: InputMaybe<Listings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Listings_Var_Samp_Order_By>;
  variance?: InputMaybe<Listings_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Listings_Avg_Fields = {
  __typename?: 'listings_avg_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Float']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Float']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "listings" */
export type Listings_Avg_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "listings". All fields are combined with a logical 'AND'. */
export type Listings_Bool_Exp = {
  _and?: InputMaybe<Array<Listings_Bool_Exp>>;
  _not?: InputMaybe<Listings_Bool_Exp>;
  _or?: InputMaybe<Array<Listings_Bool_Exp>>;
  computed_listing_infos?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
  course?: InputMaybe<Courses_Bool_Exp>;
  course_code?: InputMaybe<String_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  crn?: InputMaybe<Int_Comparison_Exp>;
  listing_id?: InputMaybe<Int_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
  school?: InputMaybe<String_Comparison_Exp>;
  season?: InputMaybe<Seasons_Bool_Exp>;
  season_code?: InputMaybe<String_Comparison_Exp>;
  section?: InputMaybe<String_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Listings_Max_Fields = {
  __typename?: 'listings_max_fields';
  /** [computed] subject + number (e.g. "AMST 312") */
  course_code?: Maybe<Scalars['String']>;
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Int']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Int']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Int']>;
  /** Course number in the given subject (e.g. "120" or "S120") */
  number?: Maybe<Scalars['String']>;
  /** School (e.g. YC, GS, MG) that the course is listed under */
  school?: Maybe<Scalars['String']>;
  /** When the course/listing is being taught, mapping to `seasons` */
  season_code?: Maybe<Scalars['String']>;
  /** Course section for the given subject and number */
  section?: Maybe<Scalars['String']>;
  /** Subject the course is listed under (e.g. "AMST") */
  subject?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "listings" */
export type Listings_Max_Order_By = {
  /** [computed] subject + number (e.g. "AMST 312") */
  course_code?: InputMaybe<Order_By>;
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
  /** Course number in the given subject (e.g. "120" or "S120") */
  number?: InputMaybe<Order_By>;
  /** School (e.g. YC, GS, MG) that the course is listed under */
  school?: InputMaybe<Order_By>;
  /** When the course/listing is being taught, mapping to `seasons` */
  season_code?: InputMaybe<Order_By>;
  /** Course section for the given subject and number */
  section?: InputMaybe<Order_By>;
  /** Subject the course is listed under (e.g. "AMST") */
  subject?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Listings_Min_Fields = {
  __typename?: 'listings_min_fields';
  /** [computed] subject + number (e.g. "AMST 312") */
  course_code?: Maybe<Scalars['String']>;
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Int']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Int']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Int']>;
  /** Course number in the given subject (e.g. "120" or "S120") */
  number?: Maybe<Scalars['String']>;
  /** School (e.g. YC, GS, MG) that the course is listed under */
  school?: Maybe<Scalars['String']>;
  /** When the course/listing is being taught, mapping to `seasons` */
  season_code?: Maybe<Scalars['String']>;
  /** Course section for the given subject and number */
  section?: Maybe<Scalars['String']>;
  /** Subject the course is listed under (e.g. "AMST") */
  subject?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "listings" */
export type Listings_Min_Order_By = {
  /** [computed] subject + number (e.g. "AMST 312") */
  course_code?: InputMaybe<Order_By>;
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
  /** Course number in the given subject (e.g. "120" or "S120") */
  number?: InputMaybe<Order_By>;
  /** School (e.g. YC, GS, MG) that the course is listed under */
  school?: InputMaybe<Order_By>;
  /** When the course/listing is being taught, mapping to `seasons` */
  season_code?: InputMaybe<Order_By>;
  /** Course section for the given subject and number */
  section?: InputMaybe<Order_By>;
  /** Subject the course is listed under (e.g. "AMST") */
  subject?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "listings". */
export type Listings_Order_By = {
  computed_listing_infos_aggregate?: InputMaybe<Computed_Listing_Info_Aggregate_Order_By>;
  course?: InputMaybe<Courses_Order_By>;
  course_code?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  school?: InputMaybe<Order_By>;
  season?: InputMaybe<Seasons_Order_By>;
  season_code?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
};

/** select columns of table "listings" */
export enum Listings_Select_Column {
  /** column name */
  CourseCode = 'course_code',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Crn = 'crn',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  Number = 'number',
  /** column name */
  School = 'school',
  /** column name */
  SeasonCode = 'season_code',
  /** column name */
  Section = 'section',
  /** column name */
  Subject = 'subject'
}

/** aggregate stddev on columns */
export type Listings_Stddev_Fields = {
  __typename?: 'listings_stddev_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Float']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Float']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "listings" */
export type Listings_Stddev_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Listings_Stddev_Pop_Fields = {
  __typename?: 'listings_stddev_pop_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Float']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Float']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "listings" */
export type Listings_Stddev_Pop_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Listings_Stddev_Samp_Fields = {
  __typename?: 'listings_stddev_samp_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Float']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Float']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "listings" */
export type Listings_Stddev_Samp_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Listings_Sum_Fields = {
  __typename?: 'listings_sum_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Int']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Int']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "listings" */
export type Listings_Sum_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Listings_Var_Pop_Fields = {
  __typename?: 'listings_var_pop_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Float']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Float']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "listings" */
export type Listings_Var_Pop_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Listings_Var_Samp_Fields = {
  __typename?: 'listings_var_samp_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Float']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Float']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "listings" */
export type Listings_Var_Samp_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Listings_Variance_Fields = {
  __typename?: 'listings_variance_fields';
  /** Course that the listing refers to */
  course_id?: Maybe<Scalars['Float']>;
  /** The CRN associated with this listing */
  crn?: Maybe<Scalars['Float']>;
  /** Listing ID */
  listing_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "listings" */
export type Listings_Variance_Order_By = {
  /** Course that the listing refers to */
  course_id?: InputMaybe<Order_By>;
  /** The CRN associated with this listing */
  crn?: InputMaybe<Order_By>;
  /** Listing ID */
  listing_id?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "professors" */
export type Professors = {
  __typename?: 'professors';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /** An array relationship */
  course_professors: Array<Course_Professors>;
  /** An aggregate relationship */
  course_professors_aggregate: Course_Professors_Aggregate;
  /** Email address of the professor */
  email?: Maybe<Scalars['String']>;
  /** Name of the professor */
  name: Scalars['String'];
  /** Professor ID */
  professor_id: Scalars['Int'];
};


/** columns and relationships of "professors" */
export type ProfessorsCourse_ProfessorsArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};


/** columns and relationships of "professors" */
export type ProfessorsCourse_Professors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};

/** aggregated selection of "professors" */
export type Professors_Aggregate = {
  __typename?: 'professors_aggregate';
  aggregate?: Maybe<Professors_Aggregate_Fields>;
  nodes: Array<Professors>;
};

/** aggregate fields of "professors" */
export type Professors_Aggregate_Fields = {
  __typename?: 'professors_aggregate_fields';
  avg?: Maybe<Professors_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Professors_Max_Fields>;
  min?: Maybe<Professors_Min_Fields>;
  stddev?: Maybe<Professors_Stddev_Fields>;
  stddev_pop?: Maybe<Professors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Professors_Stddev_Samp_Fields>;
  sum?: Maybe<Professors_Sum_Fields>;
  var_pop?: Maybe<Professors_Var_Pop_Fields>;
  var_samp?: Maybe<Professors_Var_Samp_Fields>;
  variance?: Maybe<Professors_Variance_Fields>;
};


/** aggregate fields of "professors" */
export type Professors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Professors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Professors_Avg_Fields = {
  __typename?: 'professors_avg_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "professors". All fields are combined with a logical 'AND'. */
export type Professors_Bool_Exp = {
  _and?: InputMaybe<Array<Professors_Bool_Exp>>;
  _not?: InputMaybe<Professors_Bool_Exp>;
  _or?: InputMaybe<Array<Professors_Bool_Exp>>;
  average_rating?: InputMaybe<Float8_Comparison_Exp>;
  average_rating_n?: InputMaybe<Int_Comparison_Exp>;
  course_professors?: InputMaybe<Course_Professors_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  professor_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Professors_Max_Fields = {
  __typename?: 'professors_max_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /** Email address of the professor */
  email?: Maybe<Scalars['String']>;
  /** Name of the professor */
  name?: Maybe<Scalars['String']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Professors_Min_Fields = {
  __typename?: 'professors_min_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /** Email address of the professor */
  email?: Maybe<Scalars['String']>;
  /** Name of the professor */
  name?: Maybe<Scalars['String']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "professors". */
export type Professors_Order_By = {
  average_rating?: InputMaybe<Order_By>;
  average_rating_n?: InputMaybe<Order_By>;
  course_professors_aggregate?: InputMaybe<Course_Professors_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  professor_id?: InputMaybe<Order_By>;
};

/** select columns of table "professors" */
export enum Professors_Select_Column {
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  AverageRatingN = 'average_rating_n',
  /** column name */
  Email = 'email',
  /** column name */
  Name = 'name',
  /** column name */
  ProfessorId = 'professor_id'
}

/** aggregate stddev on columns */
export type Professors_Stddev_Fields = {
  __typename?: 'professors_stddev_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Professors_Stddev_Pop_Fields = {
  __typename?: 'professors_stddev_pop_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Professors_Stddev_Samp_Fields = {
  __typename?: 'professors_stddev_samp_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Professors_Sum_Fields = {
  __typename?: 'professors_sum_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['float8']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Int']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Professors_Var_Pop_Fields = {
  __typename?: 'professors_var_pop_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Professors_Var_Samp_Fields = {
  __typename?: 'professors_var_samp_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Professors_Variance_Fields = {
  __typename?: 'professors_variance_fields';
  /**
   * [computed] Average rating of the professor assessed via
   *         the "Overall assessment" question in courses taught
   */
  average_rating?: Maybe<Scalars['Float']>;
  /** [computed] Number of courses used to compute `average_rating` */
  average_rating_n?: Maybe<Scalars['Float']>;
  /** Professor ID */
  professor_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "computed_listing_info" */
  computed_listing_info: Array<Computed_Listing_Info>;
  /** fetch aggregated fields from the table: "computed_listing_info" */
  computed_listing_info_aggregate: Computed_Listing_Info_Aggregate;
  /** An array relationship */
  course_discussions: Array<Course_Discussions>;
  /** An aggregate relationship */
  course_discussions_aggregate: Course_Discussions_Aggregate;
  /** fetch data from the table: "course_discussions" using primary key columns */
  course_discussions_by_pk?: Maybe<Course_Discussions>;
  /** An array relationship */
  course_flags: Array<Course_Flags>;
  /** An aggregate relationship */
  course_flags_aggregate: Course_Flags_Aggregate;
  /** fetch data from the table: "course_flags" using primary key columns */
  course_flags_by_pk?: Maybe<Course_Flags>;
  /** An array relationship */
  course_professors: Array<Course_Professors>;
  /** An aggregate relationship */
  course_professors_aggregate: Course_Professors_Aggregate;
  /** fetch data from the table: "course_professors" using primary key columns */
  course_professors_by_pk?: Maybe<Course_Professors>;
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** fetch data from the table: "demand_statistics" */
  demand_statistics: Array<Demand_Statistics>;
  /** fetch aggregated fields from the table: "demand_statistics" */
  demand_statistics_aggregate: Demand_Statistics_Aggregate;
  /** fetch data from the table: "demand_statistics" using primary key columns */
  demand_statistics_by_pk?: Maybe<Demand_Statistics>;
  /** fetch data from the table: "discussions" */
  discussions: Array<Discussions>;
  /** fetch aggregated fields from the table: "discussions" */
  discussions_aggregate: Discussions_Aggregate;
  /** fetch data from the table: "discussions" using primary key columns */
  discussions_by_pk?: Maybe<Discussions>;
  /** An array relationship */
  evaluation_narratives: Array<Evaluation_Narratives>;
  /** An aggregate relationship */
  evaluation_narratives_aggregate: Evaluation_Narratives_Aggregate;
  /** fetch data from the table: "evaluation_narratives" using primary key columns */
  evaluation_narratives_by_pk?: Maybe<Evaluation_Narratives>;
  /** fetch data from the table: "evaluation_questions" */
  evaluation_questions: Array<Evaluation_Questions>;
  /** fetch aggregated fields from the table: "evaluation_questions" */
  evaluation_questions_aggregate: Evaluation_Questions_Aggregate;
  /** fetch data from the table: "evaluation_questions" using primary key columns */
  evaluation_questions_by_pk?: Maybe<Evaluation_Questions>;
  /** An array relationship */
  evaluation_ratings: Array<Evaluation_Ratings>;
  /** An aggregate relationship */
  evaluation_ratings_aggregate: Evaluation_Ratings_Aggregate;
  /** fetch data from the table: "evaluation_ratings" using primary key columns */
  evaluation_ratings_by_pk?: Maybe<Evaluation_Ratings>;
  /** fetch data from the table: "evaluation_statistics" */
  evaluation_statistics: Array<Evaluation_Statistics>;
  /** fetch aggregated fields from the table: "evaluation_statistics" */
  evaluation_statistics_aggregate: Evaluation_Statistics_Aggregate;
  /** fetch data from the table: "evaluation_statistics" using primary key columns */
  evaluation_statistics_by_pk?: Maybe<Evaluation_Statistics>;
  /** An array relationship */
  fasttext_similars: Array<Fasttext_Similars>;
  /** An aggregate relationship */
  fasttext_similars_aggregate: Fasttext_Similars_Aggregate;
  /** fetch data from the table: "fasttext_similars" using primary key columns */
  fasttext_similars_by_pk?: Maybe<Fasttext_Similars>;
  /** fetch data from the table: "flags" */
  flags: Array<Flags>;
  /** fetch aggregated fields from the table: "flags" */
  flags_aggregate: Flags_Aggregate;
  /** fetch data from the table: "flags" using primary key columns */
  flags_by_pk?: Maybe<Flags>;
  /** An array relationship */
  listings: Array<Listings>;
  /** An aggregate relationship */
  listings_aggregate: Listings_Aggregate;
  /** fetch data from the table: "listings" using primary key columns */
  listings_by_pk?: Maybe<Listings>;
  /** fetch data from the table: "professors" */
  professors: Array<Professors>;
  /** fetch aggregated fields from the table: "professors" */
  professors_aggregate: Professors_Aggregate;
  /** fetch data from the table: "professors" using primary key columns */
  professors_by_pk?: Maybe<Professors>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasons_aggregate: Seasons_Aggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasons_by_pk?: Maybe<Seasons>;
  /** An array relationship */
  tfidf_similars: Array<Tfidf_Similars>;
  /** An aggregate relationship */
  tfidf_similars_aggregate: Tfidf_Similars_Aggregate;
  /** fetch data from the table: "tfidf_similars" using primary key columns */
  tfidf_similars_by_pk?: Maybe<Tfidf_Similars>;
};


export type Query_RootComputed_Listing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};


export type Query_RootComputed_Listing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};


export type Query_RootCourse_DiscussionsArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


export type Query_RootCourse_Discussions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


export type Query_RootCourse_Discussions_By_PkArgs = {
  course_id: Scalars['Int'];
  discussion_id: Scalars['Int'];
};


export type Query_RootCourse_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};


export type Query_RootCourse_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};


export type Query_RootCourse_Flags_By_PkArgs = {
  course_id: Scalars['Int'];
  flag_id: Scalars['Int'];
};


export type Query_RootCourse_ProfessorsArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};


export type Query_RootCourse_Professors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};


export type Query_RootCourse_Professors_By_PkArgs = {
  course_id: Scalars['Int'];
  professor_id: Scalars['Int'];
};


export type Query_RootCoursesArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_By_PkArgs = {
  course_id: Scalars['Int'];
};


export type Query_RootDemand_StatisticsArgs = {
  distinct_on?: InputMaybe<Array<Demand_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Demand_Statistics_Order_By>>;
  where?: InputMaybe<Demand_Statistics_Bool_Exp>;
};


export type Query_RootDemand_Statistics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Demand_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Demand_Statistics_Order_By>>;
  where?: InputMaybe<Demand_Statistics_Bool_Exp>;
};


export type Query_RootDemand_Statistics_By_PkArgs = {
  course_id: Scalars['Int'];
};


export type Query_RootDiscussionsArgs = {
  distinct_on?: InputMaybe<Array<Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discussions_Order_By>>;
  where?: InputMaybe<Discussions_Bool_Exp>;
};


export type Query_RootDiscussions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discussions_Order_By>>;
  where?: InputMaybe<Discussions_Bool_Exp>;
};


export type Query_RootDiscussions_By_PkArgs = {
  discussion_id: Scalars['Int'];
};


export type Query_RootEvaluation_NarrativesArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


export type Query_RootEvaluation_Narratives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


export type Query_RootEvaluation_Narratives_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEvaluation_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Questions_Order_By>>;
  where?: InputMaybe<Evaluation_Questions_Bool_Exp>;
};


export type Query_RootEvaluation_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Questions_Order_By>>;
  where?: InputMaybe<Evaluation_Questions_Bool_Exp>;
};


export type Query_RootEvaluation_Questions_By_PkArgs = {
  question_code: Scalars['String'];
};


export type Query_RootEvaluation_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


export type Query_RootEvaluation_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


export type Query_RootEvaluation_Ratings_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEvaluation_StatisticsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Statistics_Order_By>>;
  where?: InputMaybe<Evaluation_Statistics_Bool_Exp>;
};


export type Query_RootEvaluation_Statistics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Statistics_Order_By>>;
  where?: InputMaybe<Evaluation_Statistics_Bool_Exp>;
};


export type Query_RootEvaluation_Statistics_By_PkArgs = {
  course_id: Scalars['Int'];
};


export type Query_RootFasttext_SimilarsArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


export type Query_RootFasttext_Similars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


export type Query_RootFasttext_Similars_By_PkArgs = {
  source: Scalars['Int'];
  target: Scalars['Int'];
};


export type Query_RootFlagsArgs = {
  distinct_on?: InputMaybe<Array<Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flags_Order_By>>;
  where?: InputMaybe<Flags_Bool_Exp>;
};


export type Query_RootFlags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flags_Order_By>>;
  where?: InputMaybe<Flags_Bool_Exp>;
};


export type Query_RootFlags_By_PkArgs = {
  flag_id: Scalars['Int'];
};


export type Query_RootListingsArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};


export type Query_RootListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};


export type Query_RootListings_By_PkArgs = {
  listing_id: Scalars['Int'];
};


export type Query_RootProfessorsArgs = {
  distinct_on?: InputMaybe<Array<Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Professors_Order_By>>;
  where?: InputMaybe<Professors_Bool_Exp>;
};


export type Query_RootProfessors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Professors_Order_By>>;
  where?: InputMaybe<Professors_Bool_Exp>;
};


export type Query_RootProfessors_By_PkArgs = {
  professor_id: Scalars['Int'];
};


export type Query_RootSeasonsArgs = {
  distinct_on?: InputMaybe<Array<Seasons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seasons_Order_By>>;
  where?: InputMaybe<Seasons_Bool_Exp>;
};


export type Query_RootSeasons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seasons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seasons_Order_By>>;
  where?: InputMaybe<Seasons_Bool_Exp>;
};


export type Query_RootSeasons_By_PkArgs = {
  season_code: Scalars['String'];
};


export type Query_RootTfidf_SimilarsArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


export type Query_RootTfidf_Similars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


export type Query_RootTfidf_Similars_By_PkArgs = {
  source: Scalars['Int'];
  target: Scalars['Int'];
};

/** columns and relationships of "seasons" */
export type Seasons = {
  __typename?: 'seasons';
  /** An array relationship */
  courses: Array<Courses>;
  /** An array relationship */
  coursesBySeasonCode: Array<Courses>;
  /** An aggregate relationship */
  coursesBySeasonCode_aggregate: Courses_Aggregate;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  /** An array relationship */
  listings: Array<Listings>;
  /** An aggregate relationship */
  listings_aggregate: Listings_Aggregate;
  /** Season code (e.g. '202001') */
  season_code: Scalars['String'];
  /** [computed] Season of the semester - one of spring, summer, or fall */
  term?: Maybe<Scalars['String']>;
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "seasons" */
export type SeasonsCoursesArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsCoursesBySeasonCodeArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsCoursesBySeasonCode_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsListingsArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};

/** aggregated selection of "seasons" */
export type Seasons_Aggregate = {
  __typename?: 'seasons_aggregate';
  aggregate?: Maybe<Seasons_Aggregate_Fields>;
  nodes: Array<Seasons>;
};

/** aggregate fields of "seasons" */
export type Seasons_Aggregate_Fields = {
  __typename?: 'seasons_aggregate_fields';
  avg?: Maybe<Seasons_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Seasons_Max_Fields>;
  min?: Maybe<Seasons_Min_Fields>;
  stddev?: Maybe<Seasons_Stddev_Fields>;
  stddev_pop?: Maybe<Seasons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Seasons_Stddev_Samp_Fields>;
  sum?: Maybe<Seasons_Sum_Fields>;
  var_pop?: Maybe<Seasons_Var_Pop_Fields>;
  var_samp?: Maybe<Seasons_Var_Samp_Fields>;
  variance?: Maybe<Seasons_Variance_Fields>;
};


/** aggregate fields of "seasons" */
export type Seasons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Seasons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Seasons_Avg_Fields = {
  __typename?: 'seasons_avg_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "seasons". All fields are combined with a logical 'AND'. */
export type Seasons_Bool_Exp = {
  _and?: InputMaybe<Array<Seasons_Bool_Exp>>;
  _not?: InputMaybe<Seasons_Bool_Exp>;
  _or?: InputMaybe<Array<Seasons_Bool_Exp>>;
  courses?: InputMaybe<Courses_Bool_Exp>;
  coursesBySeasonCode?: InputMaybe<Courses_Bool_Exp>;
  listings?: InputMaybe<Listings_Bool_Exp>;
  season_code?: InputMaybe<String_Comparison_Exp>;
  term?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Seasons_Max_Fields = {
  __typename?: 'seasons_max_fields';
  /** Season code (e.g. '202001') */
  season_code?: Maybe<Scalars['String']>;
  /** [computed] Season of the semester - one of spring, summer, or fall */
  term?: Maybe<Scalars['String']>;
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Seasons_Min_Fields = {
  __typename?: 'seasons_min_fields';
  /** Season code (e.g. '202001') */
  season_code?: Maybe<Scalars['String']>;
  /** [computed] Season of the semester - one of spring, summer, or fall */
  term?: Maybe<Scalars['String']>;
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "seasons". */
export type Seasons_Order_By = {
  coursesBySeasonCode_aggregate?: InputMaybe<Courses_Aggregate_Order_By>;
  courses_aggregate?: InputMaybe<Courses_Aggregate_Order_By>;
  listings_aggregate?: InputMaybe<Listings_Aggregate_Order_By>;
  season_code?: InputMaybe<Order_By>;
  term?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** select columns of table "seasons" */
export enum Seasons_Select_Column {
  /** column name */
  SeasonCode = 'season_code',
  /** column name */
  Term = 'term',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type Seasons_Stddev_Fields = {
  __typename?: 'seasons_stddev_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Seasons_Stddev_Pop_Fields = {
  __typename?: 'seasons_stddev_pop_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Seasons_Stddev_Samp_Fields = {
  __typename?: 'seasons_stddev_samp_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Seasons_Sum_Fields = {
  __typename?: 'seasons_sum_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Seasons_Var_Pop_Fields = {
  __typename?: 'seasons_var_pop_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Seasons_Var_Samp_Fields = {
  __typename?: 'seasons_var_samp_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Seasons_Variance_Fields = {
  __typename?: 'seasons_variance_fields';
  /** [computed] Year of the semester */
  year?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "computed_listing_info" */
  computed_listing_info: Array<Computed_Listing_Info>;
  /** fetch aggregated fields from the table: "computed_listing_info" */
  computed_listing_info_aggregate: Computed_Listing_Info_Aggregate;
  /** An array relationship */
  course_discussions: Array<Course_Discussions>;
  /** An aggregate relationship */
  course_discussions_aggregate: Course_Discussions_Aggregate;
  /** fetch data from the table: "course_discussions" using primary key columns */
  course_discussions_by_pk?: Maybe<Course_Discussions>;
  /** An array relationship */
  course_flags: Array<Course_Flags>;
  /** An aggregate relationship */
  course_flags_aggregate: Course_Flags_Aggregate;
  /** fetch data from the table: "course_flags" using primary key columns */
  course_flags_by_pk?: Maybe<Course_Flags>;
  /** An array relationship */
  course_professors: Array<Course_Professors>;
  /** An aggregate relationship */
  course_professors_aggregate: Course_Professors_Aggregate;
  /** fetch data from the table: "course_professors" using primary key columns */
  course_professors_by_pk?: Maybe<Course_Professors>;
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** fetch data from the table: "demand_statistics" */
  demand_statistics: Array<Demand_Statistics>;
  /** fetch aggregated fields from the table: "demand_statistics" */
  demand_statistics_aggregate: Demand_Statistics_Aggregate;
  /** fetch data from the table: "demand_statistics" using primary key columns */
  demand_statistics_by_pk?: Maybe<Demand_Statistics>;
  /** fetch data from the table: "discussions" */
  discussions: Array<Discussions>;
  /** fetch aggregated fields from the table: "discussions" */
  discussions_aggregate: Discussions_Aggregate;
  /** fetch data from the table: "discussions" using primary key columns */
  discussions_by_pk?: Maybe<Discussions>;
  /** An array relationship */
  evaluation_narratives: Array<Evaluation_Narratives>;
  /** An aggregate relationship */
  evaluation_narratives_aggregate: Evaluation_Narratives_Aggregate;
  /** fetch data from the table: "evaluation_narratives" using primary key columns */
  evaluation_narratives_by_pk?: Maybe<Evaluation_Narratives>;
  /** fetch data from the table: "evaluation_questions" */
  evaluation_questions: Array<Evaluation_Questions>;
  /** fetch aggregated fields from the table: "evaluation_questions" */
  evaluation_questions_aggregate: Evaluation_Questions_Aggregate;
  /** fetch data from the table: "evaluation_questions" using primary key columns */
  evaluation_questions_by_pk?: Maybe<Evaluation_Questions>;
  /** An array relationship */
  evaluation_ratings: Array<Evaluation_Ratings>;
  /** An aggregate relationship */
  evaluation_ratings_aggregate: Evaluation_Ratings_Aggregate;
  /** fetch data from the table: "evaluation_ratings" using primary key columns */
  evaluation_ratings_by_pk?: Maybe<Evaluation_Ratings>;
  /** fetch data from the table: "evaluation_statistics" */
  evaluation_statistics: Array<Evaluation_Statistics>;
  /** fetch aggregated fields from the table: "evaluation_statistics" */
  evaluation_statistics_aggregate: Evaluation_Statistics_Aggregate;
  /** fetch data from the table: "evaluation_statistics" using primary key columns */
  evaluation_statistics_by_pk?: Maybe<Evaluation_Statistics>;
  /** An array relationship */
  fasttext_similars: Array<Fasttext_Similars>;
  /** An aggregate relationship */
  fasttext_similars_aggregate: Fasttext_Similars_Aggregate;
  /** fetch data from the table: "fasttext_similars" using primary key columns */
  fasttext_similars_by_pk?: Maybe<Fasttext_Similars>;
  /** fetch data from the table: "flags" */
  flags: Array<Flags>;
  /** fetch aggregated fields from the table: "flags" */
  flags_aggregate: Flags_Aggregate;
  /** fetch data from the table: "flags" using primary key columns */
  flags_by_pk?: Maybe<Flags>;
  /** An array relationship */
  listings: Array<Listings>;
  /** An aggregate relationship */
  listings_aggregate: Listings_Aggregate;
  /** fetch data from the table: "listings" using primary key columns */
  listings_by_pk?: Maybe<Listings>;
  /** fetch data from the table: "professors" */
  professors: Array<Professors>;
  /** fetch aggregated fields from the table: "professors" */
  professors_aggregate: Professors_Aggregate;
  /** fetch data from the table: "professors" using primary key columns */
  professors_by_pk?: Maybe<Professors>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasons_aggregate: Seasons_Aggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasons_by_pk?: Maybe<Seasons>;
  /** An array relationship */
  tfidf_similars: Array<Tfidf_Similars>;
  /** An aggregate relationship */
  tfidf_similars_aggregate: Tfidf_Similars_Aggregate;
  /** fetch data from the table: "tfidf_similars" using primary key columns */
  tfidf_similars_by_pk?: Maybe<Tfidf_Similars>;
};


export type Subscription_RootComputed_Listing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};


export type Subscription_RootComputed_Listing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Computed_Listing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Computed_Listing_Info_Order_By>>;
  where?: InputMaybe<Computed_Listing_Info_Bool_Exp>;
};


export type Subscription_RootCourse_DiscussionsArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


export type Subscription_RootCourse_Discussions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Discussions_Order_By>>;
  where?: InputMaybe<Course_Discussions_Bool_Exp>;
};


export type Subscription_RootCourse_Discussions_By_PkArgs = {
  course_id: Scalars['Int'];
  discussion_id: Scalars['Int'];
};


export type Subscription_RootCourse_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};


export type Subscription_RootCourse_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Flags_Order_By>>;
  where?: InputMaybe<Course_Flags_Bool_Exp>;
};


export type Subscription_RootCourse_Flags_By_PkArgs = {
  course_id: Scalars['Int'];
  flag_id: Scalars['Int'];
};


export type Subscription_RootCourse_ProfessorsArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};


export type Subscription_RootCourse_Professors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Professors_Order_By>>;
  where?: InputMaybe<Course_Professors_Bool_Exp>;
};


export type Subscription_RootCourse_Professors_By_PkArgs = {
  course_id: Scalars['Int'];
  professor_id: Scalars['Int'];
};


export type Subscription_RootCoursesArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_By_PkArgs = {
  course_id: Scalars['Int'];
};


export type Subscription_RootDemand_StatisticsArgs = {
  distinct_on?: InputMaybe<Array<Demand_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Demand_Statistics_Order_By>>;
  where?: InputMaybe<Demand_Statistics_Bool_Exp>;
};


export type Subscription_RootDemand_Statistics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Demand_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Demand_Statistics_Order_By>>;
  where?: InputMaybe<Demand_Statistics_Bool_Exp>;
};


export type Subscription_RootDemand_Statistics_By_PkArgs = {
  course_id: Scalars['Int'];
};


export type Subscription_RootDiscussionsArgs = {
  distinct_on?: InputMaybe<Array<Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discussions_Order_By>>;
  where?: InputMaybe<Discussions_Bool_Exp>;
};


export type Subscription_RootDiscussions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discussions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discussions_Order_By>>;
  where?: InputMaybe<Discussions_Bool_Exp>;
};


export type Subscription_RootDiscussions_By_PkArgs = {
  discussion_id: Scalars['Int'];
};


export type Subscription_RootEvaluation_NarrativesArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


export type Subscription_RootEvaluation_Narratives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Narratives_Order_By>>;
  where?: InputMaybe<Evaluation_Narratives_Bool_Exp>;
};


export type Subscription_RootEvaluation_Narratives_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEvaluation_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Questions_Order_By>>;
  where?: InputMaybe<Evaluation_Questions_Bool_Exp>;
};


export type Subscription_RootEvaluation_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Questions_Order_By>>;
  where?: InputMaybe<Evaluation_Questions_Bool_Exp>;
};


export type Subscription_RootEvaluation_Questions_By_PkArgs = {
  question_code: Scalars['String'];
};


export type Subscription_RootEvaluation_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


export type Subscription_RootEvaluation_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Ratings_Order_By>>;
  where?: InputMaybe<Evaluation_Ratings_Bool_Exp>;
};


export type Subscription_RootEvaluation_Ratings_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEvaluation_StatisticsArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Statistics_Order_By>>;
  where?: InputMaybe<Evaluation_Statistics_Bool_Exp>;
};


export type Subscription_RootEvaluation_Statistics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evaluation_Statistics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evaluation_Statistics_Order_By>>;
  where?: InputMaybe<Evaluation_Statistics_Bool_Exp>;
};


export type Subscription_RootEvaluation_Statistics_By_PkArgs = {
  course_id: Scalars['Int'];
};


export type Subscription_RootFasttext_SimilarsArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


export type Subscription_RootFasttext_Similars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fasttext_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fasttext_Similars_Order_By>>;
  where?: InputMaybe<Fasttext_Similars_Bool_Exp>;
};


export type Subscription_RootFasttext_Similars_By_PkArgs = {
  source: Scalars['Int'];
  target: Scalars['Int'];
};


export type Subscription_RootFlagsArgs = {
  distinct_on?: InputMaybe<Array<Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flags_Order_By>>;
  where?: InputMaybe<Flags_Bool_Exp>;
};


export type Subscription_RootFlags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flags_Order_By>>;
  where?: InputMaybe<Flags_Bool_Exp>;
};


export type Subscription_RootFlags_By_PkArgs = {
  flag_id: Scalars['Int'];
};


export type Subscription_RootListingsArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};


export type Subscription_RootListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Listings_Order_By>>;
  where?: InputMaybe<Listings_Bool_Exp>;
};


export type Subscription_RootListings_By_PkArgs = {
  listing_id: Scalars['Int'];
};


export type Subscription_RootProfessorsArgs = {
  distinct_on?: InputMaybe<Array<Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Professors_Order_By>>;
  where?: InputMaybe<Professors_Bool_Exp>;
};


export type Subscription_RootProfessors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Professors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Professors_Order_By>>;
  where?: InputMaybe<Professors_Bool_Exp>;
};


export type Subscription_RootProfessors_By_PkArgs = {
  professor_id: Scalars['Int'];
};


export type Subscription_RootSeasonsArgs = {
  distinct_on?: InputMaybe<Array<Seasons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seasons_Order_By>>;
  where?: InputMaybe<Seasons_Bool_Exp>;
};


export type Subscription_RootSeasons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seasons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seasons_Order_By>>;
  where?: InputMaybe<Seasons_Bool_Exp>;
};


export type Subscription_RootSeasons_By_PkArgs = {
  season_code: Scalars['String'];
};


export type Subscription_RootTfidf_SimilarsArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


export type Subscription_RootTfidf_Similars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tfidf_Similars_Order_By>>;
  where?: InputMaybe<Tfidf_Similars_Bool_Exp>;
};


export type Subscription_RootTfidf_Similars_By_PkArgs = {
  source: Scalars['Int'];
  target: Scalars['Int'];
};

/** columns and relationships of "tfidf_similars" */
export type Tfidf_Similars = {
  __typename?: 'tfidf_similars';
  /** An object relationship */
  course: Courses;
  /** An object relationship */
  courseByTarget: Courses;
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source: Scalars['Int'];
  target: Scalars['Int'];
};

/** aggregated selection of "tfidf_similars" */
export type Tfidf_Similars_Aggregate = {
  __typename?: 'tfidf_similars_aggregate';
  aggregate?: Maybe<Tfidf_Similars_Aggregate_Fields>;
  nodes: Array<Tfidf_Similars>;
};

/** aggregate fields of "tfidf_similars" */
export type Tfidf_Similars_Aggregate_Fields = {
  __typename?: 'tfidf_similars_aggregate_fields';
  avg?: Maybe<Tfidf_Similars_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tfidf_Similars_Max_Fields>;
  min?: Maybe<Tfidf_Similars_Min_Fields>;
  stddev?: Maybe<Tfidf_Similars_Stddev_Fields>;
  stddev_pop?: Maybe<Tfidf_Similars_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tfidf_Similars_Stddev_Samp_Fields>;
  sum?: Maybe<Tfidf_Similars_Sum_Fields>;
  var_pop?: Maybe<Tfidf_Similars_Var_Pop_Fields>;
  var_samp?: Maybe<Tfidf_Similars_Var_Samp_Fields>;
  variance?: Maybe<Tfidf_Similars_Variance_Fields>;
};


/** aggregate fields of "tfidf_similars" */
export type Tfidf_Similars_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tfidf_Similars_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tfidf_similars" */
export type Tfidf_Similars_Aggregate_Order_By = {
  avg?: InputMaybe<Tfidf_Similars_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tfidf_Similars_Max_Order_By>;
  min?: InputMaybe<Tfidf_Similars_Min_Order_By>;
  stddev?: InputMaybe<Tfidf_Similars_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tfidf_Similars_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tfidf_Similars_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tfidf_Similars_Sum_Order_By>;
  var_pop?: InputMaybe<Tfidf_Similars_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tfidf_Similars_Var_Samp_Order_By>;
  variance?: InputMaybe<Tfidf_Similars_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Tfidf_Similars_Avg_Fields = {
  __typename?: 'tfidf_similars_avg_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Avg_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tfidf_similars". All fields are combined with a logical 'AND'. */
export type Tfidf_Similars_Bool_Exp = {
  _and?: InputMaybe<Array<Tfidf_Similars_Bool_Exp>>;
  _not?: InputMaybe<Tfidf_Similars_Bool_Exp>;
  _or?: InputMaybe<Array<Tfidf_Similars_Bool_Exp>>;
  course?: InputMaybe<Courses_Bool_Exp>;
  courseByTarget?: InputMaybe<Courses_Bool_Exp>;
  rank?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
  target?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Tfidf_Similars_Max_Fields = {
  __typename?: 'tfidf_similars_max_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Max_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tfidf_Similars_Min_Fields = {
  __typename?: 'tfidf_similars_min_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Min_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "tfidf_similars". */
export type Tfidf_Similars_Order_By = {
  course?: InputMaybe<Courses_Order_By>;
  courseByTarget?: InputMaybe<Courses_Order_By>;
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** select columns of table "tfidf_similars" */
export enum Tfidf_Similars_Select_Column {
  /** column name */
  Rank = 'rank',
  /** column name */
  Source = 'source',
  /** column name */
  Target = 'target'
}

/** aggregate stddev on columns */
export type Tfidf_Similars_Stddev_Fields = {
  __typename?: 'tfidf_similars_stddev_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Stddev_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tfidf_Similars_Stddev_Pop_Fields = {
  __typename?: 'tfidf_similars_stddev_pop_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Stddev_Pop_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tfidf_Similars_Stddev_Samp_Fields = {
  __typename?: 'tfidf_similars_stddev_samp_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Stddev_Samp_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Tfidf_Similars_Sum_Fields = {
  __typename?: 'tfidf_similars_sum_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Sum_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Tfidf_Similars_Var_Pop_Fields = {
  __typename?: 'tfidf_similars_var_pop_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Var_Pop_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tfidf_Similars_Var_Samp_Fields = {
  __typename?: 'tfidf_similars_var_samp_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Var_Samp_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tfidf_Similars_Variance_Fields = {
  __typename?: 'tfidf_similars_variance_fields';
  /** Target course similarity rank relative to all targets of a source */
  rank?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tfidf_similars" */
export type Tfidf_Similars_Variance_Order_By = {
  /** Target course similarity rank relative to all targets of a source */
  rank?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};
