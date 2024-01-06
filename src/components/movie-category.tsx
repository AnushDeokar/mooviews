'use client';
import { useSearchStore } from '@/states/search-movies';
import { Show } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function MovieCategory({ homePageMovies }: { homePageMovies: Show[] }) {
  // homePageMovies = homePageMovies.reverse();
  const { query } = useSearchStore();
  const router = useRouter();

  if (query.length > 0) {
    return null;
  }

  return (
    <div>
      <h1 className='mb-4 text-xl font-semibold md:text-2xl'>
        Popular right now
      </h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {(homePageMovies)?.map(
          (movie: any, ind: number) => (
            <div key={ind} onClick={()=> router.push(`/shows/${movie.media_type}-${movie.id}`)}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${
                  movie.poster_path ?? movie.backdrop_path
                }`}
                className='w-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
                width={500}
                height={800}
                alt=''
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MovieCategory;
