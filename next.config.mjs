import createMDX from "fumadocs-mdx/config";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('fumadocs-mdx/config').CreateMDXOptions} */
const fumadocsConfig = {
  mdxOptions: {
    baseUrl: "test",
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withNextIntl = createNextIntlPlugin("./lib/intl.ts");
const withMDX = createMDX(fumadocsConfig);

export default withMDX(withNextIntl(nextConfig));
