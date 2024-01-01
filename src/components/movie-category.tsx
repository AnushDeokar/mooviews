'use client';
import { useSearchStore } from '@/states/search-movies';
import { Show } from '@/types';
import Image from 'next/image';
import React, { useEffect } from 'react';

// TODO: Correct this component
function MovieCategory({ homePageMovies }: { homePageMovies: Show[] }) {
  const { movies } = useSearchStore();
  console.log('movies', movies.length);
  useEffect(() => {}, [movies]);

  if (movies.length > 0) {
    <div>
      <h1 className='mb-4 text-xl font-semibold md:text-2xl'>Test Movies</h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {movies?.map((movie: any, ind: number) => (
          <div key={ind}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className='w-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
              width={500}
              height={800}
              alt=''
            />
          </div>
        ))}
      </div>
    </div>;
  }
  return (
    <div>
      <h1 className='mb-4 text-xl font-semibold md:text-2xl'>
        Recommended Movies
      </h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {(movies.length > 0 ? movies : homePageMovies)?.map(
          (movie: any, ind: number) => (
            <div key={ind}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
