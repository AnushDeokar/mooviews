import { getMovies } from '@/actions/getMovies';
import React from 'react';

async function MovieCategory() {
  const movies = await getMovies('movie');
  return (
    <div>
      <h1 className='text-xl font-semibold md:text-2xl'>Recommended Movies</h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {movies.map((movie, ind) => (
          <div key={ind}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className='w-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCategory;
