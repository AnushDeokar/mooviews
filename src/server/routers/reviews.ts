import { privateProcedure, publicProcedure, router } from '../trpc';
import z from 'zod';
import prisma from '@/lib/prismadb';

export const reviewRouter = router({
  addReview: privateProcedure
    .input(
      z.object({
        type: z.string(),
        movieId: z.number(),
        review: z.string(),
        stars: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { type, movieId, stars, review } = input;
      if (!type || !movieId) {
        return null;
      }

      const createdReview = await prisma.review.create({
        data: {
          type,
          movieId,
          stars,
          review,
          userId: ctx.userId,
        },
      });
      return createdReview;
    }),
});
