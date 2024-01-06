import React from 'react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { getShowById } from '@/actions/getShowsById';
import { Button } from 'keep-react';
import Link from 'next/link';
import { MoveRightIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/video-player'), { ssr: false });


async function ShowPage({ params }: { params: Params }) {
  const {slug} = params
  const typeId = slug.split('-')

  const showDetails = await getShowById(typeId[0], typeId[1]);
  
  if (!showDetails){
    return (
        <div className='text-center text-lg md:text-3xl'>
            <div className='flex justify-center items-center mt-40'>
                The show you are requesting does not exists
            </div>
            <div className='flex justify-center items-center md:text-lg mt-4'>
                <Link href="/" className='hover:bg-red-700 flex items-center gap-4 p-2 rounded-md'>
                    Return to home <MoveRightIcon />
                </Link>
            </div>
        </div>
    )
  }

  const { title, videos, tagline, overview, backdrop_path} = showDetails
  const trailers = videos?.results.filter((video: any) => video.type === "Trailer");
  return (
    <div>
        <h1
        className='font-semibold text-xl md:text-3xl'
        >{title}</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 pt-4 text-center gap-x-8 gap-y-4'>
            <VideoPlayer url={trailers[0]?.key} backdrop={backdrop_path}/>
         <div>
            <div className='flex flex-col md:text-left'>
                <h3 className='text-xl font-semibold text-gray-100'>Plot</h3>
                <p className='text-gray-400'>{overview}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShowPage