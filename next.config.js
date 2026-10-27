/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGitHubPages ? "/sensei-homemade-web" : "",
  assetPrefix: isGitHubPages ? "/sensei-homemade-web/" : "",
};
module.exports = nextConfig;
