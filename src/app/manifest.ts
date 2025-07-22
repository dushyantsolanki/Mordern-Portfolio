import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'D Port',
    short_name: 'D Port',
    description:
      'Portfolio of Dushyant Solanki, a MERN Stack Developer with experience in React, Next.js, Node, MongoDB, and real-time features using Socket.IO.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: 'pwa-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
