'use client';
import { Info, Volume, Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Button } from './ui/button';

function VideoPlayer({ url, backdrop }: { url: string; backdrop: string }) {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  if (!url && !backdrop) {
    return (
      <div className='h-100 flex w-full items-center justify-center bg-slate-500 text-white'>
        <div className='flex justify-center'>
          <Info /> <p className='m-auto ml-2'>Video Not Found</p>
        </div>
      </div>
    );
  }

  return (
    <div className='relative m-auto flex w-full flex-col justify-center lg:m-0'>
      {url ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${url}`}
          playing={true}
          width='100%'
          muted={isMuted}
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

      {url && (
        <Button
          className=' absolute bottom-0 left-0 h-12 w-12 rounded-full bg-neutral-800 p-1.5 opacity-50 ring-1 ring-slate-400 hover:bg-neutral-800 hover:opacity-100 hover:ring-white focus:ring-offset-0 dark:bg-neutral-800 dark:hover:bg-neutral-800'
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? (
            <VolumeX className='h-6 w-6' aria-hidden='true' />
          ) : (
            <Volume2 className='h-6 w-6' aria-hidden='true' />
          )}
        </Button>
      )}
    </div>
  );
}

export default VideoPlayer;
