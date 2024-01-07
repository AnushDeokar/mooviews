'use client';
import { useSearchStore } from '@/states/search-movies';
import { Show } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function MovieCategory({ homePageMovies }: { homePageMovies: Show[] }) {
  // homePageMovies = homePageMovies.reverse();
  const { query } = useSearchStore();
  const router = useRouter();

  if (query.length > 0) {
    return null;
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {homePageMovies?.map((movie: any, ind: number) => (
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
              key={ind}
              onClick={() =>
                router.push(`/shows/${movie.media_type ?? 'movie'}-${movie.id}`)
              }
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

export default MovieCategory;
