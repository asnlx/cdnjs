export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/npm\//, '');
    
    if (!path) {
      return new Response('Choose a package! Example: /npm/react@18.2.0/umd/react.production.min.js', { status: 400 });
    }

    const targetUrl = `https://cdn.jsdelivr.net/npm/${path}`;
    
    const upstreamRes = await fetch(targetUrl, {
      cf: {
        cacheEverything: true,
        cacheTtl: 31536000,
      }
    });
    
    if (!upstreamRes.ok) {
      return new Response('Package or file not found', { status: 404 });
    }

    const headers = new Headers(upstreamRes.headers);
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers,
    });
  }
};
