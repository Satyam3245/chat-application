import Redis from "ioredis";
export const redis = new Redis(process.env.REDIS_URL!);
export async function connectRedis(){
    await redis.ping();
}