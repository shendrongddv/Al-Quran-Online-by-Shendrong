import { Suspense } from "react";
import { SurahList } from "./_components/surah-list";
import { Skeleton } from "@/components/ui/skeleton";

export default function QuranPage() {
  return (
    <div className="container px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-center font-amiri-quran text-4xl">القرآن الكريم</h1>
          <p className="text-center text-muted-foreground">
            Al-Quran Al-Kareem • The Noble Quran
          </p>
        </div>

        <div className="">
          <Suspense fallback={<Skeleton className="h-[calc(100vh-10rem)]" />}>
            <SurahList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
