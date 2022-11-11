import type { PremadeQuery } from '$lib/types/Query';

// Shuffle the array
export function shuffleArray<T>(arr: T[]): T[] {
	const newArr = arr.slice();
	for (let i = newArr.length - 1; i > 0; i--) {
		const rand = Math.floor(Math.random() * (i + 1));
		[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
	}
	return newArr;
}

export const premadeQueries: PremadeQuery[] = [
	{
		title: 'Best of all time',
		keyword: 'best',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Easiest of all time',
		keyword: 'easiest',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Gutty science courses',
		keyword: 'gut',
		course_keyword: '',
		areas_skills_keyword: 'Sc'
	},
	{
		title: 'Favorite history courses',
		keyword: 'favorite',
		course_keyword: 'HIST',
		areas_skills_keyword: ''
	},
	{
		title: 'Best lecture of all time',
		keyword: 'best%lecture',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Highly recommended Philosophy Courses',
		keyword: 'high%recommend',
		course_keyword: 'PHIL',
		areas_skills_keyword: ''
	},
	{
		title: 'Love',
		keyword: 'love',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Favorite English 100 level courses',
		keyword: 'favorite',
		course_keyword: 'ENGL 1%',
		areas_skills_keyword: ''
	},
	{
		title: 'Best HSHM courses',
		keyword: 'best',
		course_keyword: 'HSHM',
		areas_skills_keyword: ''
	},
	{
		title: 'Highly recommended ECON 400 level courses',
		keyword: 'high%recommend',
		course_keyword: 'ECON 4%',
		areas_skills_keyword: ''
	},
	{
		title: 'Quintessential Yale courses',
		keyword: 'quintessential',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Gut',
		keyword: 'gut',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Important',
		keyword: 'important',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Best humanities courses',
		keyword: 'best',
		course_keyword: '',
		areas_skills_keyword: 'Hu'
	},
	{
		title: 'Must',
		keyword: 'must',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Helpful',
		keyword: 'helpful',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Useful',
		keyword: 'useful',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Influential',
		keyword: 'influential',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Avoid',
		keyword: 'avoid',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Worst',
		keyword: 'worst',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'One of',
		keyword: 'one of',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Of all',
		keyword: 'of all',
		course_keyword: '',
		areas_skills_keyword: ''
	},
	{
		title: 'Easy economics courses',
		keyword: 'easy',
		course_keyword: 'ECON',
		areas_skills_keyword: ''
	},
	{
		title: 'Peter Salovey',
		keyword: 'salovey',
		course_keyword: '',
		areas_skills_keyword: ''
	}
];
