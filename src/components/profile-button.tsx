'use client';
import type { User } from 'next-auth';
import React from 'react';
import { AuthModalComponent } from './auth-modal';
import { ProfileMenu } from './profile-menu';

function ProfileButton({ user }: { user: User | null | undefined }) {
  return (
    <div>
      {user ? <ProfileMenu user={user} /> : <AuthModalComponent user={user} />}
    </div>
  );
}

export default ProfileButton;
