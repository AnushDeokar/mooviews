import { getWatchList } from '@/actions/getWatchList';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

async function WatchListPage() {
  const watchList = await getWatchList();

  if (!watchList || watchList.length === 0) {
    return (
      <div className='text-bold m-40 text-3xl text-gray-500'>
        No Shows in the watchList
      </div>
    );
  }
  return (
    <div>
      <h2 className='mb-4 text-3xl'>Your Watch List</h2>
      <div className='grid grid-cols-2  gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {watchList.map((show, id) => (
          <Link
            href={`/shows/${watchList[id].type}-${watchList[id].id}`}
            key={id}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                show.backdrop_path ?? show.poster_path
              }`}
              alt=''
              className='w-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
              width={400}
              height={200}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WatchListPage;
