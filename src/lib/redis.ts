import { env } from '$env/dynamic/private';
import { createClient } from 'redis'

const REDIS_URL=`redis://${env.REDISUSER}:${env.REDISPASSWORD}@${env.REDISHOST}:${ env.REDISPORT }`

export const redis = createClient({ url: REDIS_URL })
redis.on('error', (err) => console.log('Redis Client Error', err));
await redis.connect()
