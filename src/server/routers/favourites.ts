import { privateProcedure, publicProcedure, router } from '../trpc';
import z from 'zod';
import prisma from '@/lib/prismadb';

export const favouriteRouter = router({
  switchAddToFavourites: privateProcedure
    .input(
      z.object({
        type: z.string(),
        movieId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { type, movieId } = input;
      if (!type || !movieId) {
        return null;
      }

      const existingDocument = await prisma.favourites.findMany({
        where: {
          type,
          movieId,
          userId: ctx.userId,
        },
      });

      if (existingDocument.length > 0) {
        const updatedFavourite = await prisma.favourites.update({
          where: {
            id: existingDocument[0].id,
          },
          data: {
            status: !existingDocument[0].status,
          },
        });
        return updatedFavourite;
      } else {
        const favourites = await prisma.favourites.create({
          data: {
            type,
            movieId,
            status: true,
            userId: ctx.userId,
          },
        });
        return favourites;
      }
    }),
});
