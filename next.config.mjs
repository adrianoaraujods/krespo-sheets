import createMDX from "fumadocs-mdx/config";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('fumadocs-mdx/config').CreateMDXOptions} */
const fumadocsConfig = {
  mdxOptions: {
    baseUrl: "test",
    lastModifiedTime: "git",
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./lib/intl.ts");
const withMDX = createMDX(fumadocsConfig);

export default withMDX(withNextIntl(nextConfig));
