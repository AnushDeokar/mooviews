'use client'
import Image from 'next/image';
import React from 'react'
import ReactPlayer from 'react-player/lazy'

function VideoPlayer({url, backdrop}: {url: string, backdrop: string}) {
    console.log(url);
    
  return (
    <div className='m-auto lg:m-0 w-full'>
        {url ?<ReactPlayer 
            url={`https://www.youtube.com/watch?v=${url}`}
            playing={false}
            // style={{width: "100%", height:"auto"}}
            width="100%"
        />:
        <Image 
        src={`https://image.tmdb.org/t/p/original/${backdrop}`}
        alt=''
        width={500}
        height={500}
        className='w-full h-auto'
        />
        
        }
    </div>
  )
}

export default VideoPlayer