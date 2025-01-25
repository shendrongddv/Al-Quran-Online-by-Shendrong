'use client';

import { useCallback, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X } from 'lucide-react';
import type { Surah } from '../types';

async function fetchSurahList() {
  const response = await fetch('https://quran-api.santrikoding.com/api/surah');
  const data = await response.json();
  return data as Surah[];
}

export function SurahList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  const { data: surahList = [] } = useQuery({
    queryKey: ['surah-list'],
    queryFn: fetchSurahList,
  });

  const filteredSurahList = surahList.filter((surah) => {
    if (!searchQuery) return true;
    return (
      surah.nama_latin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arti.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set('q', searchQuery);
    } else {
      params.delete('q');
    }
    router.push(`?${params.toString()}`);
  }, [searchQuery, searchParams, router]);

  const handleClear = useCallback(() => {
    setSearchQuery('');
    const params = new URLSearchParams(searchParams);
    params.delete('q');
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Search surah..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-8"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0"
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <ScrollArea className="h-[calc(100vh-10rem)]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSurahList.map((surah) => (
            <Button
              key={surah.nomor}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push(`/${surah.nomor}`)}
            >
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium">
                {surah.nomor}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{surah.nama_latin}</span>
                <span className="text-xs text-muted-foreground">
                  {surah.arti} • {surah.jumlah_ayat} Ayat
                </span>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
