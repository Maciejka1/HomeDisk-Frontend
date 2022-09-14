/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api",
        destination: "http://0.0.0.0:8080",
      },
    ];
  };
  return {
    rewrites,
  }
};
