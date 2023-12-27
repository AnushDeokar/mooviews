import * as trpc from '@trpc/server';
import { publicProcedure, router } from './trpc';
import { authRouter } from './routers/auth';

export const appRouter = router({
  auth: authRouter,
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});
export type AppRouter = typeof appRouter;
