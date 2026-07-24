/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // старые проиндексированные пути со старого сайта → актуальные страницы (301)
      { source: '/service', destination: '/service/seo', permanent: true },
      { source: '/uz', destination: '/', permanent: true },
      { source: '/uz/:path*', destination: '/', permanent: true },
      // /ru больше НЕ редиректится на / — теперь это русская версия сайта
      // (сохраняем только старый /cases, который сейчас отдаёт 404)
      { source: '/cases', destination: '/service/seo', permanent: true },
      { source: '/ru/cases', destination: '/ru/service/seo', permanent: true },
    ];
  },
};
export default nextConfig;
