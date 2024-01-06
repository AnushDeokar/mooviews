'use client';
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player/lazy';

function VideoPlayer({ url, backdrop }: { url: string; backdrop: string }) {
  console.log(url);

  return (
    <div className='m-auto w-full lg:m-0'>
      {url ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${url}`}
          playing={false}
          // style={{width: "100%", height:"auto"}}
          width='100%'
        />
      ) : (
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop}`}
          alt=''
          width={500}
          height={500}
          className='h-auto w-full'
        />
      )}
    </div>
  );
}

export default VideoPlayer;
