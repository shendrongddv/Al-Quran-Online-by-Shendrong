import { Suspense } from "react";
import { SurahListSidebar } from "../_components/surah-list-sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export default function SurahIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-4 py-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Surah List */}
        <div className="w-full lg:w-80">
          <div className="rounded-lg border bg-card p-4">
            <Suspense fallback={<Skeleton className="h-[calc(100vh-10rem)]" />}>
              <SurahListSidebar />
            </Suspense>
          </div>
        </div>

        {/* Surah Detail */}
        <div className="flex-1">
          <div className="rounded-lg border bg-card p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}