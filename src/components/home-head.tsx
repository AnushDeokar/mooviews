'use client';
import React from 'react';
import ImageCarousel from './image-carousel';
import { GithubLogoIcon } from './ui/icons';
import { Show } from '@/types';
import { useSearchStore } from '@/states/search-movies';

function HomeMainSection({ movies }: { movies: Show }) {
  const { query } = useSearchStore();
  if (query.length > 0) {
    return null;
  }

  return (
    <div className='md:grid-flow-col-reverse my-10 grid  w-full grid-cols-1 font-semibold md:grid-cols-[.5fr_.6fr]'>
      <div className='text-center md:text-left'>
        <div className='text-3xl md:text-5xl md:leading-10 lg:text-6xl'>
          Movie Rating Application built using{' '}
          <span className='text-red-600'>NextJs</span>
        </div>
        <p className='my-4 flex w-full justify-center font-light md:justify-start'>
          <button className='flex items-center gap-2 rounded-md bg-[#27272a] px-4 py-2 hover:opacity-70'>
            <GithubLogoIcon width={15} height={15} />
            Give a star on github
          </button>
        </p>
      </div>
      <div className='items relative flex items-center justify-center md:pt-0'>
        <ImageCarousel movies={movies} />
      </div>
    </div>
  );
}

export default HomeMainSection;
