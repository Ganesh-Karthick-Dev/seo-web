import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/services/web-mobile",
        destination: "/services/web-mobile-development",
        permanent: true,
      },
      {
        source: "/services/3d-websites",
        destination: "/services/3d-website-development",
        permanent: true,
      },
      {
        source: "/services/custom-software",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/industries/:slug",
        destination: "/industries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
