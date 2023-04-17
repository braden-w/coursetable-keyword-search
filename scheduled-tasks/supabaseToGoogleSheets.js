const VITE_SUPABASE_URL = "https://mxfsblceatcvkcvakwvl.supabase.co"
const VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14ZnNibGNlYXRjdmtjdmFrd3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNTAwODEsImV4cCI6MTk5NjkyNjA4MX0.6_F4Ey_eMyUEwiL96cfOrKD3O1sKAYEzwPz0exERfpk"

const allHeaders = ['id',
'comment',
'comment_compound',
'all_course_codes',
'areas',
'average_gut_rating',
'average_professor',
'average_rating',
'average_workload',
'average_rating_same_professors',
'average_workload_same_professors',
'classnotes',
'course_code',
'credits',
'crn',
'description',
'enrolled',
'extra_info',
'final_exam',
'flag_info',
'fysem',
'last_enrollment',
'last_enrollment_same_professors',
'listing_id',
'locations_summary',
'number',
'professor_ids',
'professor_names',
'regnotes',
'requirements',
'rp_attr',
'same_course_id',
'same_course_and_profs_id',
'last_offered_course_id',
'school',
'season_code',
'section',
'skills',
'subject',
'syllabus_url',
'times_by_day',
'times_summary',
'title'];

const headers = ['all_course_codes',
'skills',
'areas',
'comment_compound'
// 'comment',
// 'title'
];
const writeHeadersOnThisRow = 1
const writeDataStartingOnThisRow = writeHeadersOnThisRow + 1

function myFunction() {
  clearEntireSpreadsheet();
  writeHeadersOnRow(writeHeadersOnThisRow);
  const url = `${VITE_SUPABASE_URL}/rest/v1/EvaluationNarrativesToCourses202303?select=${headers.join(',')}`;
  const options = {
      headers: {
        Apikey: VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      },
      method: 'get',
    }
  const response = UrlFetchApp.fetch(url, options);
  const json = response.getContentText()
  Logger.log(JSON.stringify(json));
  const data = JSON.parse(json);
  Logger.log(data);

  // The following code is modified from https://stackoverflow.com/questions/17982546/google-script-json-into-google-sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  const rows = data.map((row) => {
    return headers.map((column) =>
      row.hasOwnProperty(column) ? row[column] : ''
    );
  });

  dataRange = sheet.getRange(writeDataStartingOnThisRow, 1, rows.length, rows[0].length);
  dataRange.setValues(rows);
}

function clearEntireSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  sheet.clear();
}

function writeHeadersOnRow(rowNumber) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  sheet.getRange(rowNumber, 1, 1, headers.length).setValues([headers]);
}