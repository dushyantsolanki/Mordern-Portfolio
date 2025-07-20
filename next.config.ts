const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio/about",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
