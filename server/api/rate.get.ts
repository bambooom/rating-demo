import { H3Event } from "h3";
import Redis from "ioredis";
import { getRedisKey } from "../../utils";

export default async function defineEventHandler(event: H3Event): Promise<unknown> {
  const redis: Redis = new Redis(process.env.REDIS_URL as string);
  const { uid } = getQuery(event);
  const redisKey = getRedisKey(uid as string);
  let data;
  try {
    data = await redis.get(redisKey);
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to fetch stored data. ' +
        ((e as Error).message || Object.prototype.toString.call(e)),
    });
  }
  redis.quit();
  setHeaders(event, {
    'content-type': 'application/json',
    // 1800s is 30 minutes, cache, 半个小时内只读取一次数据，会缓存在 vercel 的 CDN 里
    // 1800s-2400s 之间，会先返回缓存，但会去更新数据，下一个用户会看到更新的数据
    'cache-control': 'public, s-maxage=1800, stale-while-revalidate=2400',
  });
  return data;
}
