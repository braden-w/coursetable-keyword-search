import { insertAveragesOfCourses } from './insert-averages-of-courses';
import { syncCourseTableToSqlite } from './sync-coursetable-to-sqlite-via-graphql';

await syncCourseTableToSqlite();
await insertAveragesOfCourses();
