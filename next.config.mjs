import createMDX from "fumadocs-mdx/config";
import createNextIntlPlugin from "next-intl/plugin";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

/** @type {import('fumadocs-mdx/config').CreateMDXOptions} */
const fumadocsConfig = {
  mdxOptions: {
    lastModifiedTime: "git",
    remarkPlugins: [remarkMath],
    rehypePlugins: (p) => [rehypeKatex, ...p],
  },
  rootContentPath: "./public/kompendium",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/kompendium",
        destination: "/kompendium/dnd5",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/lib/intl.ts");
const withMDX = createMDX(fumadocsConfig);

export default withMDX(withNextIntl(nextConfig));
