interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const ipRateMap = new Map<string, RateLimitRecord>();

setInterval(() => {
  const now = Date.now();
  ipRateMap.forEach((record, ip) => {
    if (now > record.resetAt) {
      ipRateMap.delete(ip);
    }
  });
}, 60000);

export interface RateLimitOptions {
  limit?: number;
  windowMs?: number;
}

export function checkRateLimit(
  ip: string,
  options: RateLimitOptions = {}
): { allowed: boolean; remaining: number; resetInSeconds: number } {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 10 * 60 * 1000;

  const now = Date.now();
  const existing = ipRateMap.get(ip);

  if (!existing || now > existing.resetAt) {
    ipRateMap.set(ip, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      allowed: true,
      remaining: limit - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetInSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: limit - existing.count,
    resetInSeconds: Math.ceil((existing.resetAt - now) / 1000),
  };
}

