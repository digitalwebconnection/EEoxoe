// src/lib/dataCache.ts
export const cacheSet = <T>(key: string, data: T, ttlInMs: number = 600000) => {
  const item = { data, expiry: Date.now() + ttlInMs };
  localStorage.setItem(key, JSON.stringify(item));
};

export const cacheGetStale = <T>(key: string): T | null => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  try {
    const item = JSON.parse(itemStr);
    return item.data as T;
  } catch (e) {
    return null;
  }
};
