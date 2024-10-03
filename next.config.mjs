/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'fakeimg.pl',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'kenleyli666.github.io',
      },
    ],
  }
};

export default nextConfig;

  