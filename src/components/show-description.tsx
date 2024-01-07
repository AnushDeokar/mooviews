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

    try {
      const res = await mutateAsync({
        movieId: showDetails.id,
        type: type,
      });
      if (isFavourite) {
        setIsFavourite(false);
        toast.success('Removed from your watch list!');
      } else {
        setIsFavourite(true);
        toast.success('Successfully added to your watch list!');
      }
    } catch (err) {
      console.log(err);
      toast.error('Login to add to watch list');
    }
  };

  return (
    <div className='flex h-full  flex-col justify-between md:text-left'>
      <div className='flex flex-col'>
        <h1 className='hidden text-xl font-semibold md:text-3xl lg:block'>
          {showDetails.title}
        </h1>
        <h3 className='text-xl font-semibold text-gray-100 lg:hidden'>Plot</h3>
        <p className='text-gray-400'>{showDetails.overview}</p>
        <div className='my-2'>
          Genres: &nbsp;
          {showDetails.genres?.map((gen: any, id: number) => (
            <span key={id}>{gen.name} &nbsp;</span>
          ))}
        </div>
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
        showDetails={showDetails}
        onClose={() => setShowAddReviewModal(false)}
        type={type}
      />
    </div>
  );
}

export default ShowDescription;
