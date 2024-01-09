'use client';
import { useState } from 'react';
import { Modal, Spinner } from 'keep-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { User } from '@prisma/client';
import { trpc } from '@/utils/trpc';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import z, { ZodError } from 'zod';

const authSchema = z.object({
  name: z.string().min(3, {
    message: 'name should be atleast 3 characters',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z
    .string()
    .min(5, {
      message: 'Password must be at least 5 characters long',
    })
    .max(100),
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, handleSubmit, formState } = useForm<formInputs>({
    // resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const { name, email, password } = data;
    try {
      const parsedData = authSchema.parse({
        name,
        email,
        password,
      });
      console.log('Data is valid:', parsedData);
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error('Unexpected error:', error);
      }
      setIsLoading(false);
      return;
    }

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
      const res = await mutateAsync(data);
      handleSignIn(data);
      router.push('/');
    } catch (e) {
      // handle your error
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleSignIn = async (data: any) => {
    await signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Error Signing up! Please try again');
          console.log('Invalid Credentials!', console.log(callback.error));
          setIsLoading(false);
        } else if (callback?.ok) {
          toast.success('Successfully Logged In!');
          location.reload();
        }
      })
      .catch(() => console.log('Something went wrong!'));
  };

  return (
    <form>
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
          <Button
            className={`${
              isLoading ? 'bg-red-700' : 'bg-red-700/80'
            } "text-white gap-4" flex items-center justify-center hover:bg-red-700/90`}
            type='submit'
            onClick={(...args) => void handleSubmit(onSubmit)(...args)}
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
