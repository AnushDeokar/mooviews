'use client';
import { useSearchStore } from '@/states/search-movies';
import { Show } from '@/types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// TODO: Correct this component

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function SearchList() {
  const { movies, query } = useSearchStore();
  console.log(query);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const mountByTime = setTimeout(() => {
      setMounted(true);
    }, 1000);

    return () => {
      clearTimeout(mountByTime);
      setMounted(false);
    };
  }, [query, movies]);

  if (!mounted) {
    return null;
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
              <div>
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
