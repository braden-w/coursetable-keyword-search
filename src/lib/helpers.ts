import type { Course } from './types/SearchResponse.d';
export function interpretSeasonCode(yearSeason: string) {
	const numbersToSeasons = {
		'01': 'Spring',
		'02': 'Summer',
		'03': 'Fall',
	};
	// Pop the first four characters off the season code into season
	const year = yearSeason.slice(0, 4);
	const season = yearSeason.slice(-2) as keyof typeof numbersToSeasons;
	return `${numbersToSeasons[season]} ${year}`;
}

export function getPercent(course: Course) {
	const {
		course: {
			evaluation_narratives_aggregate_filtered: {
				aggregate: { count: filtered_count },
			},
			evaluation_narratives_aggregate: {
				aggregate: { count: total_count },
			},
		},
	} = course;
	return (filtered_count / total_count) * 100;
}
