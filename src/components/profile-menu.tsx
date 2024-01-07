'use client';
import { Dropdown } from 'keep-react';
import { CaretRight, Gear, Money, SignOut, SquaresFour } from 'phosphor-react';
import { signOut } from 'next-auth/react';

export const ProfileMenu = () => {
  return (
    <div>
      <Dropdown
        label='A'
        size='md'
        dismissOnClick={true}
        className='flex h-10 items-center justify-center rounded-md bg-pink-700 px-0 text-lg font-semibold text-white hover:bg-pink-700'
        style={{ fontSize: '80px' }}
        arrowIcon={false}
      >
        <Dropdown.Item icon={<SquaresFour size={20} color='#5E718D' />}>
          Dashboard
          <span className='ml-auto'>
            <CaretRight size={20} color='#5E718D' />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<Gear size={20} color='#5E718D' />}>
          Settings
          <span className='ml-auto'>
            <CaretRight size={20} color='#5E718D' />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<Money size={20} color='#5E718D' />}>
          Earnings
          <span className='ml-auto'>
            <CaretRight size={20} color='#5E718D' />
          </span>
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
