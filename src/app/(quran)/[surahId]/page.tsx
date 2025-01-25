import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { SurahDetail } from "../types";

async function getSurahDetail(id: string) {
  const res = await fetch(
    `https://quran-api.santrikoding.com/api/surah/${id}`
  );

  if (!res.ok) {
    notFound();
  }

  return res.json() as Promise<SurahDetail>;
}

export default async function SurahDetailPage({
  params,
}: {
  params: { surahId: string };
}) {
  const surah = await getSurahDetail(params.surahId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">{surah.nama_latin}</h1>
            <p className="text-sm text-muted-foreground">
              {surah.arti} • {surah.tempat_turun} • {surah.jumlah_ayat} Ayat
            </p>
          </div>
          <Button size="icon" variant="outline">
            <Play className="h-4 w-4" />
          </Button>
        </div>

        <div
          className="prose prose-sm max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: surah.deskripsi }}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {surah.surat_sebelumnya ? (
          <Button
            variant="ghost"
            className="gap-2"
            asChild
          >
            <a href={`/${surah.surat_sebelumnya.nomor}`}>
              <ChevronLeft className="h-4 w-4" />
              <span>{surah.surat_sebelumnya.nama_latin}</span>
            </a>
          </Button>
        ) : (
          <div />
        )}

        {surah.surat_selanjutnya ? (
          <Button
            variant="ghost"
            className="gap-2"
            asChild
          >
            <a href={`/${surah.surat_selanjutnya.nomor}`}>
              <span>{surah.surat_selanjutnya.nama_latin}</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <div />
        )}
      </div>

      {/* Ayat List */}
      <ScrollArea className="h-[calc(100vh-24rem)]">
        <div className="space-y-4">
          {surah.ayat.map((ayat) => (
            <div
              key={ayat.nomor}
              className="space-y-4 rounded-lg border bg-card/50 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-sm">
                  {ayat.nomor}
                </div>
                <Button size="icon" variant="ghost">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4 text-right">
                <p className="font-amiri-quran text-2xl leading-[2]">
                  {ayat.ar}
                </p>
                <p className="font-arabic text-base leading-[2] text-muted-foreground">
                  {ayat.tr}
                </p>
              </div>
              <p className="text-sm">{ayat.idn}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}