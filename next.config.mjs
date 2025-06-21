// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// export default {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
// };
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
};

export default nextConfig;



