'use client';
import { useState } from 'react';
import { Modal } from 'keep-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { User } from '@prisma/client';
import { trpc } from '@/utils/trpc';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const authSchema = z.object({
  name: z.string().min(5, {
    message: 'username should be atleast 5 characters',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
    }),
});

type formInputs = z.infer<typeof authSchema>;

interface ISignInForm {
  setIsSignIn: (val: boolean) => void;
  showModalX: boolean;
  onClickTwo: () => void;
}

import React from 'react';

function SignupForm({ setIsSignIn, showModalX, onClickTwo }: ISignInForm) {
  const router = useRouter();
  const { mutateAsync } = trpc.auth.register.useMutation();

  const { register, handleSubmit, formState } = useForm<formInputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = async (data: any) => {
    console.log('called', formState.errors, data);
    try {
      // await fetch()
      if (formState.errors.name?.message) {
        toast.error(formState.errors.name?.message);
        return;
      } else if (formState.errors.email?.message) {
        toast.error(formState.errors.email?.message);
        return;
      } else if (formState.errors.email?.message) {
        toast.error(formState.errors.email?.message);
        return;
      }
      //   const res = await mutateAsync(data);
      //   console.log('res', res);
      //   handleSignIn(data);
      router.push('/');
    } catch (e) {
      // handle your error
      console.log(e);
    }
  };

  const handleSignIn = async (data: any) => {
    await signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          console.log('Invalid Credentials!');
        } else if (callback?.ok) {
          toast.success('Successfully Logged In!');
        }
      })
      .catch(() => console.log('Something went wrong!'));
  };

  return (
    <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
      <Modal
        color='yellow'
        icon={<h1 className='inline text-5xl font-semibold text-red-700'>M</h1>}
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
          <input
            className='bg-red-700 text-white hover:bg-red-700/90'
            type='submit'
            // onClick={()=>console.log("clicked")}
            onClick={() => {
              console.log('clicked');
              onSubmit(formState.defaultValues);
            }}
          />
          Sign up
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
  );
}

export default SignupForm;
