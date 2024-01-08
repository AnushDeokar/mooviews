import { Modal, Spinner } from 'keep-react';
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { trpc } from '@/utils/trpc';

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
  const { data, isLoading } = trpc.review.fetchReviews.useQuery({
    movieId: showDetails.id,
    type,
  });

  return (
    <Modal
      color='yellow'
      icon={<h1 className='inline text-5xl font-semibold text-red-700'>M</h1>}
      size='2xl'
      show={showAddReviewModal}
      onClose={onClose}
    >
      <Modal.Header>
        Reviews for {showDetails.original_title || showDetails.name}
      </Modal.Header>
      {isLoading ? (
        <Spinner className='m-20' color='failure' />
      ) : (
        <Modal.Body
          style={
            data && data.length > 0
              ? { maxHeight: '200px', overflowY: 'auto' }
              : { maxHeight: '200px' }
          }
        >
          {data?.length === 0 ? (
            <div className='m-20 flex justify-center font-bold text-gray-500 '>
              😓 No Reviews Found
            </div>
          ) : (
            <div className='flex flex-col gap-4 text-black'>
              {data?.map((review, id) => (
                <div key={id} className='flex flex-col'>
                  <div className='flex gap-2'>
                    <h3 className='font-bold text-black'>{review.user.name}</h3>
                    <div className='flex items-center'>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          color='#ef4444'
                          size={13}
                          fill={review.stars >= i ? '#ef4444' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className='text-sm text-gray-500'>{review.review}</p>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
      )}
    </Modal>
  );
}

export default ReadReviewsModal;
