import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

const trpc = initTRPC.create({ transformer: superjson });
export const { router, procedure } = trpc;
