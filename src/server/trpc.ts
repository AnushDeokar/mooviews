import { getCurrentUser } from '@/lib/session';
import { TRPCError, initTRPC } from '@trpc/server';
import superjson from 'superjson';

const trpc = initTRPC.create({ transformer: superjson });
const middleware = trpc.middleware;

const isAuthenticated = middleware(async (opts) => {
  const user = await getCurrentUser();

  if (!user || !user?.id) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({
    ctx: {
      userId: user.id,
      user,
    },
  });
});

export const privateProcedure = trpc.procedure.use(isAuthenticated);
export const router = trpc.router;
export const publicProcedure = trpc.procedure;
export const createTRPCRouter = trpc.router;
