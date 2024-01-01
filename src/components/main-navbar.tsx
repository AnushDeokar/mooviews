'use client';

import React from 'react';
import { DebouncedInput } from '@/components/search-box';
import ProfileButton from '@/components/profile-button';
import type { User } from 'next-auth';

function MainNavbar({ user }: { user: User | null | undefined }) {
  return (
    <nav className='flex items-center justify-between py-10'>
      <h1 className='inline text-5xl font-semibold text-red-700'>
        M<span className='hidden text-3xl md:inline'>ooviews</span>
      </h1>
      <div className='flex gap-4'>
        <DebouncedInput
          onChange={(value) => {
            console.log(value);
          }}
          containerClassName='flex'
        />
        <ProfileButton user={user} />
      </div>
    </nav>
  );
}

export default MainNavbar;
