const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new Dotenv({ path: path.resolve(__dirname, ".env.local") })
    );
    return config;
  },
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    // Add other variables here
  },
  images: {
    domains: ["imgs.search.brave.com"],
  },
};
