import MainNavbar from '@/components/main-navbar';
import React from 'react';
import { getCurrentUser } from '@/lib/session';
import MainFooter from '@/components/main-footer';

async function MainLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <main className='flex min-h-screen min-h-screen flex-col px-[10%]'>
      <MainNavbar user={user} />
      {children}
      <MainFooter />
    </main>
  );
}

export default MainLayout;
