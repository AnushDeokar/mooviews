import { Modal, Spinner } from 'keep-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/text-area';
import { Star } from 'lucide-react';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';

function ReadReviewsModal({
  showAddReviewModal,
  showDetails,
  onClose,
  type,
}: {
  showAddReviewModal: boolean;
  showDetails: any;
  onClose: () => void;
  type: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [stars, setStars] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [text, setText] = useState<string>('');
  const { mutateAsync } = trpc.review.addReview.useMutation();

  const starsChange = (ind: number) => {
    const updatedStars = [];
    for (let i = 0; i < 5; i++) {
      if (i <= ind) {
        updatedStars.push(true);
      } else {
        updatedStars.push(false);
      }
    }
    setStars(updatedStars);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const starsCount = stars.filter(Boolean).length;
      if (starsCount == 0 || text === '') {
        toast.error('Please add stars and text while reviewing!');
        return;
      }
      const res = await mutateAsync({
        stars: starsCount,
        type: type,
        review: text,
        movieId: showDetails.id,
      });
      console.log(res);
    } catch (err) {
      toast.error('Please log in to add a review');
    }
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal
      color='yellow'
      icon={<h1 className='inline text-5xl font-semibold text-red-700'>M</h1>}
      size='2xl'
      show={showAddReviewModal}
      onClose={onClose}
    >
      <Modal.Header>
        Add your reviews for {showDetails.original_title}
      </Modal.Header>
      <Modal.Body>
        <div className='space-y-6 text-black'>
          <div className='flex cursor-pointer gap-2'>
            {stars.map((ind, id) => (
              <div key={id} onClick={() => starsChange(id)}>
                <Star color='#ef4444' fill={stars[id] ? '#ef4444' : 'white'} />
              </div>
            ))}
          </div>
          <Textarea
            id='review'
            placeholder='Write review'
            color='black'
            value={text}
            className='font-inherit font-md text-black'
            onChange={(e: any) => setText(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} className='text-black'>
          Cancel
        </Button>
        <Button
          className={`${
            isLoading ? 'bg-red-700' : 'bg-red-700/80'
          } "text-white gap-4" flex items-center justify-center hover:bg-red-700/90`}
          type='submit'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading && <Spinner color='white' size='sm' className='mr-2' />}
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReadReviewsModal;
