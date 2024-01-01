'use client';

import React from 'react';
import { DebouncedInput } from '@/components/search-box';
import ProfileButton from '@/components/profile-button';
import type { User } from 'next-auth';
import { useSearchStore } from '@/states/search-movies';
import { searchShows } from '@/actions/searchShows';

function MainNavbar({ user }: { user: User | null | undefined }) {
  const { setQuery, setMovies } = useSearchStore();
  return (
    <nav className='flex items-center justify-between py-10'>
      <h1 className='inline text-5xl font-semibold text-red-700'>
        M<span className='hidden text-3xl md:inline'>ooviews</span>
      </h1>
      <div className='flex gap-2'>
        <DebouncedInput
          onChange={async (value) => {
            console.log(value);
            setQuery(value);
            const res = await searchShows(value as string);
            console.log('res', res);
            setMovies(res?.results);
          }}
          containerClassName='flex'
        />
        <ProfileButton user={user} />
      </div>
    </nav>
  );
}

export default MainNavbar;
