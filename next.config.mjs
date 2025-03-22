/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
