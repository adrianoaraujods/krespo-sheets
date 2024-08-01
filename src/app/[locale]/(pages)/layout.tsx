import type { Locale } from "@/lib/config";

import Navbar from "./_navbar";
import PagesProvider from "./_provider";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <PagesProvider>
      <Navbar />

      {children}
    </PagesProvider>
  );
}
