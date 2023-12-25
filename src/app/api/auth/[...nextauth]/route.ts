import NextAuth from 'next-auth';
import { authoptions } from '@/server/auth';

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
