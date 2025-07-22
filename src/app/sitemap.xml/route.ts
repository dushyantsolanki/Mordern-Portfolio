export async function GET() {
  try {
    const baseUrl = 'https://portfolio-dev-dushyant.vercel.app';
    const routes = [
      '/',
      '/portfolio/about',
      '/portfolio/resume',
      '/portfolio/blogs',
      '/portfolio/contact',
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          route => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <changefreq>monthly</changefreq>
          <priority>${route === '/' ? '1.0' : '0.7'}</priority>
        </url>`
        )
        .join('')}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
