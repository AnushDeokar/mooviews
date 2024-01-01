'use clien';
import { useState } from 'react';
import { User } from '@prisma/client';
import SignInForm from './signin-form';
import SignupForm from './signup-form';
import { Avatar } from 'keep-react';
import { Dropdown } from 'keep-react';
import { ProfileMenu } from './profile-menu';

export const AuthModalComponent = ({
  user,
}: {
  user: User | undefined | null;
}) => {
  const [showModalX, setShowModalX] = useState(false);
  const [isSignin, setIsSignIn] = useState<boolean>(true);

  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <>
      {user && (
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
