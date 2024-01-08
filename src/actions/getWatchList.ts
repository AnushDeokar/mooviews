import { getCurrentUser } from '@/lib/session';
import { Show } from '@/types';
import prisma from '@/lib/prismadb';
import axios from 'axios';

export async function getWatchList(): Promise<any[]> {
  const user = await getCurrentUser();
  if (!user) {
    return [];
  }
  const watchList = await prisma.favourites.findMany({
    where: {
      userId: user.id,
      status: true,
    },
  });

  let shows = [];
  for (let i = 0; i < watchList.length; i++) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${watchList[i].type}/${watchList[i].movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );

    if (res?.data) {
      shows.push({ ...res?.data, type: watchList[i].type });
    }
  }

  return shows || [];
}
