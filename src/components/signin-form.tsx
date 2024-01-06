import React from 'react';
import { useState } from 'react';
import { Modal, Spinner } from 'keep-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const authSchema = z.object({
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
function SignInForm({ setIsSignIn, showModalX, onClickTwo }: ISignInForm) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState } = useForm<formInputs>({
    // resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      // await fetch()
      handleSignIn(data);
      router.push('/');
    } catch (e) {
      // handle your error
      console.log(e);
    }
  };

  const handleSignIn = async (data: any) => {
    setIsLoading(true);
    await signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          console.log('Invalid Credentials!', callback?.error);
          toast.error('Invalid Credentials!');
        } else if (callback?.ok) {
          toast.success('Successfully Logged In!');
          setIsLoading(false);
          location.reload();
        }
      })
      .catch(() => console.log('Something went wrong!'));
    setIsLoading(false);
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
              id='password'
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
            className={`${
              isLoading ? 'bg-red-700' : 'bg-red-700/80'
            } "text-white gap-4" flex items-center justify-center hover:bg-red-700/90`}
            type='submit'
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading && <Spinner color='white' size='sm' className='mr-2' />}
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
  );
}

export default SignInForm;
