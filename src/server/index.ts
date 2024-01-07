import * as trpc from '@trpc/server';
import { publicProcedure, router } from './trpc';
import { authRouter } from './routers/auth';
import { favouriteRouter } from './routers/favourites';

export const appRouter = router({
  auth: authRouter,
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
  favourites: favouriteRouter,
});
export type AppRouter = typeof appRouter;
