'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { trpc } from '@/utils/trpc';
import AddReviewModal from './add-review';

function ShowDescription({
  showDetails,
  type,
  watchListStatus,
}: {
  showDetails: any;
  type: string;
  watchListStatus: boolean;
}): React.ReactNode {
  const [isFavourite, setIsFavourite] = useState<boolean>(watchListStatus);
  const [showAddReviewModal, setShowAddReviewModal] = useState<boolean>(false);

  const { mutateAsync } = trpc.favourites.switchAddToFavourites.useMutation();
  const handleWatchListChange = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    // Your handling logic here
    if (isFavourite) {
      setIsFavourite(false);
      toast.success('Removed from your watch list!');
    } else {
      setIsFavourite(true);
      toast.success('Successfully added to your watch list!');
    }

    try {
      const res = await mutateAsync({
        movieId: showDetails.id,
        type: type,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error('Login to add to watch list');
    }
  };

  return (
    <div className='flex h-full  flex-col justify-between md:text-left'>
      <div className='flex flex-col'>
        <h3 className='text-xl font-semibold text-gray-100'>Plot</h3>
        <p className='text-gray-400'>{showDetails.overview}</p>
      </div>
      <div className='my-4 grid grid-cols-1 gap-4  sm:grid-cols-2'>
        <Button
          className='bg-white text-black hover:bg-white/90'
          size='sm'
          onClick={() => setShowAddReviewModal(true)}
        >
          Add Review
        </Button>
        <Button
          className='flex justify-center gap-2 bg-white text-black hover:bg-white/90'
          size='sm'
          onClick={handleWatchListChange}
        >
          <Heart
            color='#d6204e'
            size={20}
            fill={isFavourite ? '#d6204e' : 'white'}
          />
          {isFavourite ? 'Added to your Watch List' : 'Add to Watch List'}
        </Button>
      </div>
      <AddReviewModal
        showAddReviewModal={showAddReviewModal}
        onClose={() => setShowAddReviewModal(false)}
      />
    </div>
  );
}

export default ShowDescription;
