/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/dashboard(.*)',
        missing: [
          {
            type: 'cookie',
            key: 'session-cookie',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/(signup)?',
        has: [
          {
            type: 'cookie',
            key: 'session-cookie',
            value: '.+',
          },
        ],
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
