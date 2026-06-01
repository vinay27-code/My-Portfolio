import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Preconnect to external CDNs used for devicon images
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Link',
            value: '<https://cdn.jsdelivr.net>; rel=preconnect, <https://static.readdy.ai>; rel=preconnect',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'static.readdy.ai' },
    ],
  },
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
