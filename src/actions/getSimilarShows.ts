import { Show } from '@/types';
import axios from 'axios';

export async function getSimilarShows(type: string, movieId: string) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${movieId}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&l?language=en-US&page=1&include=media_type`
    );
    if (!res.data?.results) {
      return [];
    }
    const similarShows = res?.data?.results;
    let updatedShows = [];
    let count = 0;
    for (let i = 0; i < similarShows.length; i++) {
      if (similarShows && similarShows[i]?.poster_path) {
        updatedShows.push(similarShows[i]);
        count += 1;
      }
      if (count >= 10) {
        break;
      }
    }
    return updatedShows;
  } catch (err) {
    console.log(err);
  }
}
