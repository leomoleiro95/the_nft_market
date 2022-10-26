
const dedicatedEndPoint = "https://lm-nft-marketplace.infura-ipfs.io/";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      dedicatedEndPoint,
      "lm-nft-marketplace.infura-ipfs.io",
      "infura-ipfs.io",
      "https://ipfs.io/ipfs/",
      "ipfs.infura.io",
      "ipfs.io",
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
module.exports = nextConfig;


