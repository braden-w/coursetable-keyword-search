import {createClient} from 'redis';
import { env } from '$env/dynamic/private';

const redis = createClient({url: env.REDIS_URL});
redis.on('error', (err) => console.error('Redis Client Error', err));
await redis.connect();


export default redis;
