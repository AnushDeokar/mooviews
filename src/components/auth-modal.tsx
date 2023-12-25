'use client';
import { useState } from 'react';
import { Modal } from 'keep-react';
import { TextInput } from 'keep-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

export const AuthModalComponent = () => {
  const [showModalX, setShowModalX] = useState(false);
  const [isSignin, setIsSignIn] = useState<boolean>(true);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  const onSubmit = async (data: any) => {
    console.log('called');
    try {
      // await fetch()
      console.log(data.email);
      console.log(data.password);
    } catch (e) {
      // handle your error
      console.log(e);
    }
  };
  return (
    <>
      <button
        onClick={onClickTwo}
        className='rounded-md bg-red-700 px-4 py-2 text-[14px] text-white outline-none hover:bg-red-700/90'
      >
        Sign in
      </button>
      {isSignin ? (
        <form>
          {' '}
          <Modal
            color='yellow'
            icon={
              <h1 className='inline text-5xl font-semibold text-red-700'>M</h1>
            }
            size='md'
            show={showModalX}
            onClose={onClickTwo}
          >
            <Modal.Header>Sign in to Mooviews</Modal.Header>
            <Modal.Body>
              <div className='space-y-6 text-black'>
                <Input
                  id='email'
                  placeholder='Email'
                  className='font-inherit font-md text-black'
                  {...register('email')}
                />
                <Input
                  id='passwod'
                  placeholder='password'
                  type='password'
                  className='font-inherit font-md text-black'
                  {...register('password')}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onClickTwo} className='text-black'>
                Cancel
              </Button>
              <Button
                className='bg-red-700 text-white hover:bg-red-700/90'
                type='submit'
                onClick={handleSubmit(onSubmit)}
              >
                Sign in
              </Button>
            </Modal.Footer>
            <p className='mt-4 flex justify-center text-sm text-black'>
              Don&apos;t have an account? &nbsp;
              <button
                className='text-red-700 hover:underline'
                onClick={() => setIsSignIn(false)}
              >
                Signup
              </button>
            </p>
          </Modal>
        </form>
      ) : (
        <form>
          <Modal
            color='yellow'
            icon={
              <h1 className='inline text-5xl font-semibold text-red-700'>M</h1>
            }
            size='md'
            show={showModalX}
            onClose={onClickTwo}
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
                  {...register('name')}
                />
                <Input
                  id='email'
                  placeholder='Email'
                  color='gray'
                  className='font-inherit font-md text-black'
                  {...register('email')}
                />
                <Input
                  id='password'
                  placeholder='password'
                  type='password'
                  color='black'
                  className='font-inherit font-md text-black'
                  {...register('password')}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onClickTwo} className='text-black'>
                Cancel
              </Button>
              <Button
                className='bg-red-700 text-white hover:bg-red-700/90'
                type='submit'
                onClick={handleSubmit(onSubmit)}
              >
                Sign up
              </Button>
            </Modal.Footer>
            <p className='mt-4 flex justify-center text-sm text-black'>
              Already have an account? &nbsp;
              <button
                className='text-red-700 hover:underline'
                onClick={() => setIsSignIn(true)}
              >
                Signin
              </button>
            </p>
          </Modal>
        </form>
      )}
    </>
  );
};