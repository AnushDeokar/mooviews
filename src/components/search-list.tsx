'use client';
import { useSearchStore } from '@/states/search-movies';
import { Show } from '@/types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Spinner } from 'keep-react';
import { useRouter } from 'next/navigation';

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function SearchList() {
  const { movies, query, moviesLoading, setQuery } = useSearchStore();
  const router = useRouter();

  if (moviesLoading) {
    return (
      <div className='my-40 flex w-full justify-center'>
        <Spinner color='failure' size='lg' />
      </div>
    );
  }

  if (movies.length > 0) {
    return (
      <div>
        <h1 className='mb-4 text-xl font-semibold md:text-2xl'>
          Movies based on {query}
        </h1>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
          {movies?.map((movie: any, ind: number) => (
            <motion.div
              key={ind}
              variants={variants}
              initial='hidden'
              animate='visible'
              transition={{
                delay: ind * stagger,
                ease: 'easeInOut',
                duration: 0.5,
              }}
              viewport={{ amount: 0 }}
              className='relative w-full max-w-sm rounded'
            >
              <div
                onClick={() => {
                  router.push(`/shows/${movie.media_type}-${movie.id}`);
                  setQuery('');
                }}
              >
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
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export default SearchList;
