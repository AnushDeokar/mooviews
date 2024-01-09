'use client';
import { Show } from '@/types';
import React from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ShowsSlider({ shows, header }: { shows: Show[]; header?: string }) {
  const router = useRouter();
  const scrollDivRef = React.useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = React.useState(false);

  const scrollHorizontal = (direction: 'left' | 'right') => {
    if (!scrollDivRef.current) return;

    setIsScrollable(true);
    const { scrollLeft, clientWidth } = scrollDivRef.current;
    const offset =
      direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
    scrollDivRef.current.scrollTo({ left: offset, behavior: 'smooth' });

    if (scrollLeft === 0 && direction === 'left') {
      scrollDivRef.current.scrollTo({
        left: scrollDivRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='mt-16'>
      {header && (
        <h1 className='mb-4 text-xl font-semibold md:text-2xl'>{header}</h1>
      )}
      <div className='group relative'>
        {shows.length > 5 ? (
          <>
            <Button
              aria-label='Scroll to right'
              variant='ghost'
              className={cn(
                'absolute left-0 top-1/2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950/50 p-2 hover:bg-slate-950/50 active:scale-100  dark:hover:bg-slate-950/50',
                isScrollable ? 'block' : 'hidden'
              )}
              onClick={() => scrollHorizontal('left')}
            >
              <ChevronLeft className='h-8 w-8 text-white' aria-hidden='true' />
            </Button>
            <Button
              className='absolute right-0 top-1/2 z-20 h-12 w-12 -translate-y-1/2 translate-x-1/2 rounded-full bg-slate-950/50 p-2 hover:bg-slate-950/50 active:scale-100  dark:hover:bg-slate-950/50'
              onClick={() => scrollHorizontal('right')}
            >
              <ChevronRight className='h-8 w-8 text-white' aria-hidden='true' />
            </Button>
          </>
        ) : null}
        <div
          ref={scrollDivRef}
          className='no-scrollbar flex h-full w-full gap-2 overflow-x-auto overflow-y-hidden'
        >
          {shows.map((movie, ind) => (
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                movie.poster_path ?? movie.backdrop_path
              }`}
              className='w-48 cursor-pointer object-cover transition-all hover:z-20 hover:scale-110'
              width={500}
              height={800}
              alt=''
              key={ind}
              onClick={() =>
                router.push(`/shows/${movie.media_type ?? 'movie'}-${movie.id}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowsSlider;
