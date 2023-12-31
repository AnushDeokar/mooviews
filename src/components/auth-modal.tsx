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
import SignInForm from './signin-form';
import SignupForm from './signup-form';

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

export const AuthModalComponent = ({
  user,
}: {
  user: User | undefined | null;
}) => {
  const router = useRouter();
  const [showModalX, setShowModalX] = useState(false);
  const [isSignin, setIsSignIn] = useState<boolean>(true);
  const { mutateAsync } = trpc.auth.register.useMutation();

  const { register, handleSubmit, formState } = useForm<formInputs>({
    // resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onClickTwo = () => {
    setShowModalX(!showModalX);
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
  const onSubmit = async (data: any) => {
    console.log('called', formState.errors);
    try {
      // await fetch()
      if (!isSignin) {
        console.log(formState.errors);
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
        console.log('res', res);
        handleSignIn(data);
      } else {
        handleSignIn(data);
      }
      router.push('/');
    } catch (e) {
      // handle your error
      console.log(e);
    }
  };
  return (
    <>
      {user ? (
        <div className='h-10 w-10 rounded-full bg-red-700 text-white'>A</div>
      ) : (
        <button
          onClick={onClickTwo}
          className='rounded-md bg-red-700 px-4 py-2 text-[14px] text-white outline-none hover:bg-red-700/90'
        >
          Sign in
        </button>
      )}
      {isSignin ? (
        <SignInForm
          showModalX={showModalX}
          onClickTwo={onClickTwo}
          setIsSignIn={(val: boolean) => setIsSignIn(val)}
        />
      ) : (
        <SignupForm
          showModalX={showModalX}
          onClickTwo={onClickTwo}
          setIsSignIn={(val: boolean) => setIsSignIn(val)}
        />
      )}
    </>
  );
};
