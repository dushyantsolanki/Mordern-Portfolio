export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://portfolio-dev-dushyant.vercel.app/sitemap.xml
`;

  return new Response(body.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
