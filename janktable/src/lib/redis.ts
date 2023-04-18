import { env } from '$env/dynamic/private';
import Redis from 'ioredis';

const redis = new Redis(env.REDIS_URL as string);

export default redis;
