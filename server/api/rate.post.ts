import { H3Event } from "h3";
import Redis from "ioredis";
import { getRedisKey, createNewRating, getHour } from "../../utils";
import type { RateData } from "../../types";

export default defineEventHandler(async function (event: H3Event) {
  const redis: Redis = new Redis(process.env.REDIS_URL as string);
  const body = await readBody(event);
  const redisKey = getRedisKey(body.uid);
  let data: RateData;
  try {
    const stored = await redis.get(redisKey);
    data = stored ? JSON.parse(stored) : { ...createNewRating() };
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to fetch stored data. '
        + ((e as Error).message || Object.prototype.toString.call(e)),
    });
  }
  const key = `r${body.rate}` as keyof typeof data;
  data[key] += 1;
  if (body.oldRate) {
    const key = `r${body.oldRate}` as keyof typeof data;
    data[key] -= 1;
  }

  // redis 写入成本很低，速度很快
  // backup data by hour, lifetime is 30 days
  const hour: number = getHour(Date.now());
  const stored: string = JSON.stringify(data);
  await Promise.all([
    redis.set(redisKey, stored),
    // backup key, 'EX' expired by 30days -> 86400 seconds is a day
    redis.set(`${body.uid}_${hour}`, stored, 'EX', 86400 * 30),
  ]);
  redis.quit();
  return data;
});
