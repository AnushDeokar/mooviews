'use client';
import type { User } from 'next-auth';
import React from 'react';
import { signOut } from 'next-auth/react';
import { AuthModalComponent } from './auth-modal';

function ProfileButton({ user }: { user: User | null | undefined }) {
  return (
    <div>
      {user ? (
        <div
          className='flex h-12 w-12 items-center justify-center rounded-full 
            bg-red-700 text-[18px] font-semibold text-white'
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          {' '}
          A{' '}
        </div>
      ) : (
        <AuthModalComponent user={user} />
      )}
    </div>
  );
}

export default ProfileButton;
