import * as trpc from '@trpc/server';
import { publicProcedure, router } from './trpc';
import { authRouter } from './routers/auth';
import { favouriteRouter } from './routers/favourites';
import { reviewRouter } from './routers/reviews';

export const appRouter = router({
  auth: authRouter,
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
  favourites: favouriteRouter,
  review: reviewRouter,
});
export type AppRouter = typeof appRouter;
