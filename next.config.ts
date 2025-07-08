/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // desativa otimização de imagens
  },
};

module.exports = nextConfig;
