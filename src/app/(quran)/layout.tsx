import Link from "next/link";
import { SearchModal } from "./_components/search-modal";

const QuranLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            Quran
          </Link>

          {/* Search Modal */}
          <div className="flex flex-1 items-center justify-end gap-4 md:justify-center">
            <SearchModal />
          </div>

          {/* Menu */}
          <nav>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
      <footer></footer>
    </div>
  );
}

export default QuranLayout;