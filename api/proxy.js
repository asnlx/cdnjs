export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  // Ожидаем путь вида /npm/package@version/file.js
  const path = url.pathname.replace(/^\/npm\//, '');
  
  if (!path) {
    return new Response('Choose a library npm! Example: /npm/react@18.2.0/umd/react.production.min.js', { status: 400 });
  }

  // Запрашиваем файл из официального CDN (например, jsDelivr или unpkg)
  const targetUrl = `https://cdn.jsdelivr.net/npm/${path}`;
  
  try {
    const upstreamRes = await fetch(targetUrl);
    
    if (!upstreamRes.ok) {
      return new Response('Library or file not found', { status: 404 });
    }

    const headers = new Headers(upstreamRes.headers);
    // Включаем агрессивное кэширование на стороне Vercel и браузера
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers,
    });
  } catch (err) {
    return new Response(`Ошибка проксирования: ${err.message}`, { status: 500 });
  }
}