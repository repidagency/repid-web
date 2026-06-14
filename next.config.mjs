/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // старые проиндексированные пути со старого сайта → актуальные страницы (301)
      { source: '/service', destination: '/service/seo', permanent: true },
      { source: '/uz', destination: '/', permanent: true },
      { source: '/uz/:path*', destination: '/', permanent: true },
      { source: '/ru', destination: '/', permanent: true },
      { source: '/ru/:path*', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
