import { env } from '$env/dynamic/private';
import { createClient } from 'redis'

const REDIS_URL=`redis://${env.REDISUSER}:${env.REDISPASSWORD}@${env.REDISHOST}:${ env.REDISPORT }`

export const redis = createClient({ url: env.REDIS_URL })
await redis.connect()
