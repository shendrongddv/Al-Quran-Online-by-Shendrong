'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Search } from 'lucide-react';
import type { Surah } from '../types';

async function fetchSurahList() {
  const response = await fetch('https://quran-api.santrikoding.com/api/surah');
  const data = await response.json();
  return data as Surah[];
}

export function SearchModal() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { data: surahList = [] } = useQuery({
    queryKey: ['surah-list'],
    queryFn: fetchSurahList,
  });

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = React.useCallback(
    (surahId: string) => {
      setOpen(false);
      router.push(`/${surahId}`);
    },
    [router]
  );

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search surah...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type surah name or number..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Surahs">
            {surahList.map((surah) => (
              <CommandItem
                key={surah.nomor}
                value={`${surah.nama_latin} ${surah.arti} ${surah.nomor}`}
                onSelect={() => handleSelect(surah.nomor.toString())}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium">
                    {surah.nomor}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{surah.nama_latin}</span>
                    <span className="text-xs text-muted-foreground">
                      {surah.arti} • {surah.jumlah_ayat} Ayat
                    </span>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
