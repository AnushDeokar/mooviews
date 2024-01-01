import { getMovies } from '@/actions/getMovies';
import Image from 'next/image';
import React from 'react';

async function MovieCategory({movies}: {movies: any}) {

  return (
    <div>
      <h1 className='text-xl font-semibold md:text-2xl'>Recommended Movies</h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {movies?.map((movie: any, ind: number) => (
          <div key={ind}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className='w-full hover:scale-125 cursor-pointer'
              width={20}
              height={40}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCategory;
