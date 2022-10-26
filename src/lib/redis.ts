import Redis from 'ioredis';
import { env } from '$env/dynamic/private';

const REDIS_URL = `redis://${env.REDISUSER}:${env.REDISPASSWORD}@${env.REDISHOST}:${env.REDISPORT}`;

const redis = REDIS_URL ? new Redis(REDIS_URL) : new Redis();

export default redis;
