// src/lib/api.ts
export const getApiUrl = (path: string) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  return `${backendUrl}${path}`;
};

export const apiUrl = getApiUrl;

export const getImageUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  return `${backendUrl}${url}`;
};
