# JankTable (coursetable-keyword-search)

This repository has been merged into the [yaleapps](https://github.com/braden-w/yaleapps) repository under `/apps/reviewtable`.

## About

This app is designed to help with one question: how can I browse all Yale course reviews? It aggregates all reviews and allows you to filter them down by keyword, department, etc.. It is especially useful for trying to find the best courses in a certain department.

Choosing the right course can be lifechanging. Hopefully this helps with that.

## Why not CourseTable?

I love [CourseTable](https://www.coursetable.com/)! This is designed to compliment rather than compete with [CourseTable](https://www.coursetable.com/) —in fact, it is built on top of CourseTable's backend API. JankTable specifically targets course reviews as opposed to other metrics. You are encouraged to use them side-by-side!

## How does it work?

The app makes a request under the "/api/search" route, which runs a graphql query to the Yale CourseTable API:

```query searchCoursesByKeyword(
    $keyword: String!
    $course_keyword: String!
) {
    computed_listing_info_aggregate(
        where: {
            _and: [
                { course_code: { _ilike: $course_keyword } }
                { course: { evaluation_narratives: { comment: { _ilike: $keyword } } } }
            ]
        }
        order_by: { course: { evaluation_narratives_aggregate: { count: desc } } }
    ) {
        aggregate {
            count
        }
        nodes {
            all_course_codes
            areas
            course_code
            credits
            description
            listing_id
            same_course_id
            season_code
            skills
            title
            course {
                evaluation_narratives_aggregate_filtered: evaluation_narratives_aggregate(
                    where: { comment: { _ilike: $keyword } }
                ) {
                    aggregate {
                        count
                    }
                    nodes {
                        comment
                    }
                }
                evaluation_narratives_aggregate {
                    aggregate {
                        count
                    }
                }
            }
        }
    }
}
```

Which is called under the "/api/search" route. The results are then parsed into a format that's easy to work with and displayed in a table. The results are then cached in Redis for 24 hours.

## Why is it called JankTable?

Numerous reasons/design decisions, one being how I was able to make the GraphQL requests to work when CourseTable's GraphQL playground is down, and second how the Spring courses are filtered client side because I couldn't figure out how to filter them in the GraphQL query server side.

Also, JankTable is just more memorable!

## What's the tech stack, and aren't you a CS Major?

This is built with SvelteKit+TailwindCSS (with DaisyUI) deployed on Vercel, with the external CourseTable GraphQL backend.

I'm not a CS major, but I'm actually an [Ethics, Politics, and Economics](http://catalog.yale.edu/ycps/subjects-of-instruction/ethics-politics-economics/) major who happens to enjoy writing code.

## How can I contact you?

I’m echoing [Devon Zuegel’s](https://devonzuegel.com/page/contact), [Dan Wang’s](https://danwang.co/contact), [Patrick McKenzie’s](https://www.kalzumeus.com/standing-invitation), and [Zhengdong Wang's](https://zhengdongwang.com/) standing invitations. I really like getting email. If you ever want to chat, have any questions, bug reports, etc., please feel free to [email me](braden.wong@yale.edu).

I hope you find this useful!! :D

-Braden ❤

![image](https://user-images.githubusercontent.com/13159333/201976345-834c433c-89ca-4613-bafd-507cf48e19d0.png)

## Development

Once you've created a project and installed dependencies with `bun install` (or `npm install` or `pnpm install` or `yarn`), start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```
