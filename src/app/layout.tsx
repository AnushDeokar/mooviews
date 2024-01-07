import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { TrpcProvider } from '@/utils/trpc-provider';
import AuthContext from '@/utils/auth-provider';
import ToastContext from '@/utils/toast-provider';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mooviews',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContext>
      <html lang='en'>
        <body className={inter.className}>
          <ToastContext />
          <TrpcProvider>{children}</TrpcProvider>
        </body>
      </html>
    </AuthContext>
  );
}
