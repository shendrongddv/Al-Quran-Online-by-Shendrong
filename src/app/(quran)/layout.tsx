import Link from "next/link";
import { SearchModal } from "./_components/search-modal";
import { ThemeToggle } from "@/components/site/theme-toggle";
import {  buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

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
          </div>

          {/* Menu */}
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <SearchModal />
            <ThemeToggle/>


            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline", size: "icon", className:"h-9 w-9" }))}
            >
                <Github className="size-4" />
              
            </Link>


          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
      <footer></footer>
    </div>
  );
}

export default QuranLayout;