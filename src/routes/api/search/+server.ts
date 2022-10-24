import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type {SearchResponse} from '$lib/types/SearchResponse';

export const queryCourseTable = async ({
 keyword,
 course_keyword
}: {
 keyword: string;
 course_keyword: string;
}) => {
 const options = {
  method: 'POST',
  headers: {
   Cookie: "express:sess=eyJwYXNzcG9ydCI6eyJ1c2VyIjoiYm13NTIifX0=; express:sess.sig=UAn4OTnM410UOV67kiVEgi8atOc; mp_52e5e0805583e8a410f1ed50d8e0c049_mixpanel=%7B%22distinct_id%22%3A%20%22182b9538500788-08cea296bd233a-56510c15-384000-182b9538501824%22%2C%22%24device_id%22%3A%20%22182b9538500788-08cea296bd233a-56510c15-384000-182b9538501824%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; ph_JBthuPpdaiJJGwHtoETN0Shc08K5b3VhSG2TweKm6nc_posthog=%7B%22distinct_id%22%3A%22bmw52%22%2C%22%24device_id%22%3A%2217f4ca460a2417-043a20b3f2df6e-113f645d-1ea000-17f4ca460a378a%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22%24referrer%22%3A%22https%3A%2F%2Fsecure.its.yale.edu%2F%22%2C%22%24referring_domain%22%3A%22secure.its.yale.edu%22%2C%22%24sesid%22%3A%5B1662422366754%2C%221830fca149066f-0b1792315cac16-1a525635-1ea000-1830fca1491a03%22%5D%2C%22%24session_recording_enabled%22%3Afalse%2C%22%24user_id%22%3A%22bmw52%22%7D",
   origin: 'https://www.coursetable.com',
   Referer: 'https://www.coursetable.com',
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({
   query: `query searchCoursesByKeyword ($keyword: String!, $course_keyword: String!) {
   courses (
    where: {
     _and: [
      {
       evaluation_narratives: {
        comment: {
         _ilike: $keyword
        }
       }
      },
      {
       course: {
        computed_listing_infos: {
         course_code: {
          _ilike: $course_keyword
         }
        }
       }
      }
     ]
    }
   )
   {
    description
    title
    areas
    average_rating
    average_rating_same_professors
    average_workload
    average_workload_same_professors
    computed_listing_infos_aggregate {
     nodes {
      all_course_codes
      areas
      average_gut_rating
      average_professor
      course_code
      crn
     }
    }
    course_id
    description
    locations_summary
    requirements
    skills
    evaluation_narratives {
     comment
    }
   }
  }
  `,
   variables: {
    keyword,
    course_keyword
   }
  })
 };
 const res = await fetch('https://api.coursetable.com/ferry/v1/graphql?=', options);
 const response = await res.json() as SearchResponse;
 console.log("🚀 ~ file: queryCourseTable.ts ~ line 80 ~ response", response)
 return response
};

export const GET: RequestHandler = async ({url}: {url: URL}) => {
	const keyword = url.searchParams.get('keyword') ?? '%';
	const course_keyword = url.searchParams.get('course_keyword') ?? '%';
	// From https://stackoverflow.com/a/58437909
	const response = await queryCourseTable({keyword, course_keyword});
	console.log('🚀 ~ file: +server.ts ~ line 78 ~ constGET:RequestHandler= ~ response', response);
	return json(response);
};
