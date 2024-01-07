import { getCurrentUser } from '@/lib/session';
import prisma from '@/lib/prismadb';

export async function getWatchListStatus(
  type: string,
  movieId: number
): Promise<boolean> {
  const user = await getCurrentUser();
  if (!user) {
    return false;
  }

  const favourites = await prisma.favourites.findMany({
    where: {
      type,
      movieId,
      userId: user.id,
    },
  });

  if (favourites.length > 0) {
    return favourites[0].status;
  }
  return false;
}
