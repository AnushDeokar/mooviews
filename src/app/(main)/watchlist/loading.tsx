import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

async function WatchListPage() {
  return (
    <div>
      <h2 className='mb-4 text-3xl'>Your Watch List</h2>
      <div className='grid grid-cols-2  gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton className='w-full' key={i} />
        ))}
      </div>
    </div>
  );
}

export default WatchListPage;
