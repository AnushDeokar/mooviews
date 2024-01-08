import React from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { getShowById } from '@/actions/getShowsById';
import { Button } from 'keep-react';
import Link from 'next/link';
import { MoveRightIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import ShowDescription from '@/components/show-description';
import { getWatchListStatus } from '@/actions/getWatchListStatus';
import { getSimilarShows } from '@/actions/getSimilarShows';
import MovieCategory from '@/components/movie-category';

const VideoPlayer = dynamic(() => import('@/components/video-player'), {
  ssr: false,
});

async function ShowPage({ params }: { params: Params }) {
  const { slug } = params;
  const typeId = slug.split('-');

  const showDetails = await getShowById(typeId[0], typeId[1]);

  if (!showDetails) {
    return (
      <div className='text-center text-lg md:text-3xl'>
        <div className='mt-40 flex items-center justify-center'>
          The show you are requesting does not exists
        </div>
        <div className='mt-4 flex items-center justify-center md:text-lg'>
          <Link
            href='/'
            className='flex items-center gap-4 rounded-md p-2 hover:bg-red-700'
          >
            Return to home <MoveRightIcon />
          </Link>
        </div>
      </div>
    );
  }

  const { title, videos, tagline, overview, backdrop_path, id } = showDetails;
  const watchListStatus = await getWatchListStatus(typeId[0], id);
  const similarShows = await getSimilarShows(typeId[0], id);
  const trailers = videos?.results.filter(
    (video: any) => video.type === 'Trailer'
  );
  return (
    <div>
      <h1 className='text-xl font-semibold md:text-3xl lg:hidden'>
        {title || showDetails.name}
      </h1>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 pt-4 lg:grid-cols-2'>
        <VideoPlayer url={trailers[0]?.key} backdrop={backdrop_path} />
        <div>
          <ShowDescription
            showDetails={showDetails}
            type={typeId[0]}
            watchListStatus={watchListStatus}
          />
        </div>
      </div>
      <div className='mt-12'>
        <h1 className='mb-4 text-xl font-semibold md:text-2xl'>
          Simliar Movies
        </h1>
        <div className='mt-4'>
          <MovieCategory homePageMovies={similarShows || []} isHome={false} />
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
