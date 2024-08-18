'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function ImageCarousel({ movies }: { movies: any }) {
  const images = movies?.map(
    (movie: any) => `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  );
  const divRef = useRef<HTMLDivElement>(null);
  let [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 2000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [index]);

  const SIZE =
    divRef && divRef.current ? divRef?.current?.offsetWidth / 2 : 320;

  function nextImage() {
    if (index + 1 < images.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      <div className='flex max-w-full justify-center overflow-hidden'>
        <div className='flex gap-4'>
          <motion.div
            animate={{ x: `-${index * (SIZE / 2)}px` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className={`relative flex w-[${SIZE}px] h-[${SIZE}px]`}
            ref={divRef}
          >
            {images.map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                alt=''
                width={SIZE / 2}
                height={SIZE / 2}
                className={`
                    w-[${SIZE / 2}px]
                    relative 
                    rounded-md 
                    object-cover
                    transition
                    left-[${SIZE / 2}px]
                    ${
                      i === index + 1
                        ? 'z-10 scale-100 shadow-md'
                        : 'scale-75 opacity-40 '
                    }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
