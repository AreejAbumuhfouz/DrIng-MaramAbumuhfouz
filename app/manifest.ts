import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dr.-Ing. Maram Abu-Muhfouz',
    short_name: 'Maram A.-M.',
    description: 'Process Engineer – Research & Development | Thin Films & Materials Science',
    start_url: '/en',
    display: 'standalone',
    background_color: '#040D1E',
    theme_color: '#0B2345',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
