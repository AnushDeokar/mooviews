'use client';
import { Dropdown } from 'keep-react';
import { CaretRight, Gear, Money, SignOut, SquaresFour } from 'phosphor-react';
import { signOut } from 'next-auth/react';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import type { User } from 'next-auth';

export const ProfileMenu = ({ user }: { user: User | null | undefined }) => {
  return (
    <div>
      <Dropdown
        label={user && user.name ? user.name[0] : 'A'}
        size='md'
        dismissOnClick={true}
        className='flex h-10 items-center justify-center rounded-md bg-red-700 px-0 text-lg font-semibold text-white hover:bg-red-700'
        style={{ fontSize: '80px' }}
        arrowIcon={false}
      >
        <Dropdown.Item icon={<Heart size={20} color='#5E718D' />}>
          <Link href='/watchlist' className='flex'>
            My Watch List
            <span className='ml-auto'>
              <CaretRight size={20} color='#5E718D' />
            </span>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<SignOut size={20} color='#5E718D' />}
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign out
          <span className='ml-auto'>
            <CaretRight size={20} color='#5E718D' />
          </span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};
