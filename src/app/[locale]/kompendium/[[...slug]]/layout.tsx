import { notFound } from "next/navigation";

import { DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { getLocale } from "next-intl/server";

import { source } from "@/lib/source";

export default async function RootDocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const locale = await getLocale();
  const { slug } = await params;
  const page = source.getPage(slug, locale);

  if (!page) notFound();

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>

      {children}
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const locale = await getLocale();

  const page = source.getPage(params.slug, locale);
  if (!page) notFound();

  return {
    title: `${page.data.title} | krespo sheets`,
    description: page.data.description,
  };
}
