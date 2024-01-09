'use client';

import React from 'react';
import { DebouncedInput } from '@/components/search-box';
import ProfileButton from '@/components/profile-button';
import type { User } from 'next-auth';
import { useSearchStore } from '@/states/search-movies';
import { searchShows } from '@/actions/searchShows';
import Link from 'next/link';
import SearchList from './search-list';

function MainNavbar({ user }: { user: User | null | undefined }) {
  const { setQuery, setMovies, setMoviesLoading } = useSearchStore();
  return (
    <nav className='flex flex-col gap-12'>
      <div className='flex items-center justify-between py-10'>
        <Link className='inline text-5xl font-semibold text-red-700' href='/'>
          M<span className='hidden text-3xl md:inline'>ooviews</span>
        </Link>
        <div className='flex gap-2'>
          <DebouncedInput
            onChange={async (value) => {
              setMoviesLoading(true);
              setQuery(value);
              const res = await searchShows(value as string);
              setMoviesLoading(false);
              setMovies(res?.results);
            }}
            containerClassName='flex'
          />
          <ProfileButton user={user} />
        </div>
      </div>
      {typeof window !== 'undefined' && window.location.pathname !== '/' && (
        <SearchList />
      )}
    </nav>
  );
}

export default MainNavbar;
