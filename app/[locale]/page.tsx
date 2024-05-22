import { Navbar } from "@/components/ui/navbar";
import { Logo } from "@/components/icons/logo";
import LocaleSelector from "@/components/locale-selector";
import ThemeSelector from "@/components/theme-selector";

export default function HomePage() {
  return (
    <>
      <Navbar>
        <Logo />

        <div className="flex gap-2">
          <LocaleSelector />
          <ThemeSelector />
        </div>
      </Navbar>

      <main></main>
    </>
  );
}
