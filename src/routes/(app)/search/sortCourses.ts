import { getPercent } from '$lib/helpers';
import type { Course } from '$lib/types/SearchResponse';

export function sort_count(a: Course, b: Course) {
	const {
		course: {
			evaluation_narratives_aggregate_filtered: {
				aggregate: { count: b_reviews_count }
			}
		}
	} = b;
	const {
		course: {
			evaluation_narratives_aggregate_filtered: {
				aggregate: { count: a_reviews_count }
			}
		}
	} = a;
	return b_reviews_count - a_reviews_count;
}

export function sort_percent(a: Course, b: Course) {
	return getPercent(b) - getPercent(a);
}

export function sort_average_sentiment_desc(a: Course, b: Course) {
	const {
		course: {
			evaluation_narratives_aggregate: {
				aggregate: { avg: { comment_compound: a_average_sentiment } = { comment_compound: null } }
			}
		}
	} = a;
	const {
		course: {
			evaluation_narratives_aggregate: {
				aggregate: { avg: { comment_compound: b_average_sentiment } = { comment_compound: null } }
			}
		}
	} = b;
	// Sort nulls to the end
	if (a_average_sentiment === null) return 1;
	if (b_average_sentiment === null) return -1;
	return b_average_sentiment - a_average_sentiment;
}
