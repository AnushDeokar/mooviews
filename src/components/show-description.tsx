'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookText, Heart, PenSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import { trpc } from '@/utils/trpc';
import AddReviewModal from './add-review';
import { Spinner } from 'keep-react';
import ReadReviewsModal from './read-reviews';

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
  const [showReadReviewsModal, setShowReadReviewsModal] =
    useState<boolean>(false);
  const [showAddReviewModal, setShowAddReviewModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateAsync } = trpc.favourites.switchAddToFavourites.useMutation();
  const handleWatchListChange = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <div className='flex h-full  flex-col justify-between md:text-left'>
      <div className='flex flex-col gap-2'>
        <h1 className='hidden text-xl font-semibold md:text-3xl lg:block'>
          {showDetails.title}
        </h1>
        <h3 className='text-xl font-semibold text-gray-100 lg:hidden'>Plot</h3>
        <p className='text-gray-400'>{showDetails.overview}</p>
      </div>
      <div className='flex flex-1 flex-col justify-center gap-4 py-4 text-gray-300'>
        <p className='font-bold text-green-700'>
          {showDetails.vote_average.toFixed(1) || 8.2}/10 Imdb Rating
        </p>
        <p className='text-gray-300'>
          Genres: &nbsp;
          {showDetails.genres?.map((gen: any, id: number) => (
            <span key={id}>{gen.name} &nbsp;</span>
          ))}
        </p>
        <Button
          className='flex w-fit items-center gap-2 border-0 bg-transparent p-0'
          onClick={handleWatchListChange}
        >
          {isLoading ? (
            <Spinner color='failure' />
          ) : (
            <Heart
              color='#d6204e'
              size={18}
              fill={isFavourite ? '#d6204e' : 'none'}
            />
          )}
          {isFavourite ? 'Added to your Watch List' : 'Add to Watch List'}
        </Button>
      </div>
      <div className='my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-0'>
        <Button
          className='flex justify-center gap-2 bg-white text-black hover:bg-white/90'
          size='sm'
          onClick={() => setShowAddReviewModal(true)}
        >
          <PenSquare size={20} />
          Add review
        </Button>
        <Button
          className='flex justify-center gap-2 bg-white text-black hover:bg-white/90'
          size='sm'
          onClick={() => setShowReadReviewsModal(true)}
        >
          <BookText size={20} />
          Read reviews
        </Button>
      </div>
      <AddReviewModal
        showAddReviewModal={showAddReviewModal}
        showDetails={showDetails}
        onClose={() => setShowAddReviewModal(false)}
        type={type}
      />
      <ReadReviewsModal
        showAddReviewModal={showReadReviewsModal}
        showDetails={showDetails}
        onClose={() => setShowReadReviewsModal(false)}
        type={type}
      />
    </div>
  );
}

export default ShowDescription;
