import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Koenig Childhood Cancer Foundation',
    short_name: 'KCCF',
    description: 'Life-saving financial and emotional support for children battling cancer. Founded by 11-year-old cancer survivor Elana Koenig in 2020.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['medical', 'non-profit', 'charity'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        form_factor: 'wide',
        label: 'KCCF Homepage'
      }
    ]
  }
}
