import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

const trpc = initTRPC.create({ transformer: superjson });
export const router = trpc.router;
export const publicProcedure = trpc.procedure
export const createTRPCRouter = trpc.router;
