import { Modal, Spinner } from 'keep-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function AddReviewModal({
  showAddReviewModal,
  onClose,
}: {
  showAddReviewModal: boolean;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Modal
      color='yellow'
      icon={<h1 className='inline text-5xl font-semibold text-red-700'>M</h1>}
      size='2xl'
      show={showAddReviewModal}
      onClose={onClose}
    >
      <Modal.Header>Sign up to Mooviews</Modal.Header>
      <Modal.Body>
        <div className='space-y-6 text-black'>
          <Input
            id='name'
            placeholder='Full Name'
            type='text'
            color='gray'
            className='font-inherit font-md text-black'
          />
          <Input
            id='email'
            placeholder='Email'
            color='gray'
            className='font-inherit font-md text-black'
          />
          <Input
            id='password'
            placeholder='password'
            type='password'
            color='black'
            className='font-inherit font-md text-black'
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
          // onClick={(...args) => void handleSubmit(onSubmit)(...args)}
          disabled={isLoading}
        >
          {isLoading && <Spinner color='white' size='sm' className='mr-2' />}
          Sign up
        </Button>
      </Modal.Footer>
      <p className='mt-4 flex justify-center text-sm text-black'>
        Already have an account? &nbsp;
        <button
          className='text-red-700 hover:underline'
          // onClick={() => setIsSignIn(true)}
        >
          Signin
        </button>
      </p>
    </Modal>
  );
}

export default AddReviewModal;
