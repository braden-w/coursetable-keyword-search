const VITE_SUPABASE_URL = 'https://mxfsblceatcvkcvakwvl.supabase.co';
const VITE_SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14ZnNibGNlYXRjdmtjdmFrd3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNTAwODEsImV4cCI6MTk5NjkyNjA4MX0.6_F4Ey_eMyUEwiL96cfOrKD3O1sKAYEzwPz0exERfpk';

const headers = [
	'all_course_codes',
	'skills',
	'areas',
	'comment_compound'
	// 'comment',
	// 'title'
];
const writeHeadersOnThisRow = 1;
const writeDataStartingOnThisRow = writeHeadersOnThisRow + 1;

function myFunction() {
	clearEntireSpreadsheet();
	writeHeadersOnRow(writeHeadersOnThisRow);
	const url = `${VITE_SUPABASE_URL}/rest/v1/EvaluationNarrativesToCourses202303?select=${headers.join(
		','
	)}`;
	const options = {
		headers: {
			Apikey: VITE_SUPABASE_ANON_KEY,
			Authorization: `Bearer ${VITE_SUPABASE_ANON_KEY}`,
			'Content-Type': 'application/json'
		},
		method: 'get'
	};
	const response = UrlFetchApp.fetch(url, options);
	const json = response.getContentText();
	Logger.log(JSON.stringify(json));
	const data = JSON.parse(json);
	Logger.log(data);

	// The following code is modified from https://stackoverflow.com/questions/17982546/google-script-json-into-google-sheet
	const ss = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = ss.getActiveSheet();

	const rows = data.map((row) => {
		return headers.map((column) => (row.hasOwnProperty(column) ? row[column] : ''));
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
