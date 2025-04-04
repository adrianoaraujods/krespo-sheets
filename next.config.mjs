import { createMDX } from "fumadocs-mdx/next";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = createNextIntlPlugin("./src/intl/requests.ts");
const withMDX = createMDX();

export default withMDX(withNextIntl(nextConfig));
