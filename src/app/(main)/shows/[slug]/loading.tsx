import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

function Loading() {
  return (
    <div>
      <Skeleton className='h-[20px] text-xl font-semibold md:text-3xl lg:hidden' />

      <div className='grid grid-cols-1 gap-x-8 gap-y-4 pt-4 lg:grid-cols-2'>
        <Skeleton className='h-[400px] w-full' />
        <div className='flex flex-col gap-8'>
          <Skeleton className='h-10 w-full' />

          <Skeleton className='w-full flex-1' />
        </div>
      </div>
    </div>
  );
}

export default Loading;
