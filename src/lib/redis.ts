import Redis from 'ioredis';
import { env } from '$env/dynamic/private';

const REDIS_URL = `redis://${env.REDISUSER}:${env.REDISPASSWORD}@${env.REDISHOST}:${env.REDISPORT}`;

const redis = REDIS_URL ? new Redis(REDIS_URL) : new Redis();
console.log("🚀 ~ file: redis.ts ~ line 7 ~ redis", redis)

export default redis