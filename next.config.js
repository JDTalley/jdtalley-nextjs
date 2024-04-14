const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/jdtalley-next/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  }
};

module.exports = nextConfig;
