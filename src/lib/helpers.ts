export function interpretSeasonCode(yearSeason: string) {
	const numbersToSeasons = {
		'01': 'Spring',
		'02': 'Summer',
		'03': 'Fall'
	};
	// Pop the first four characters off the season code into season
	const year = yearSeason.slice(0, 4);
	const season = yearSeason.slice(-2) as keyof typeof numbersToSeasons;
	return `${numbersToSeasons[season]} ${year}`;
}
