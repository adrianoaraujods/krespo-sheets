import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "krespo sheets",
  description: "Create and manage characters sheets for tabletop RPGs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
