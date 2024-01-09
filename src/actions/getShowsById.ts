import { Show } from '@/types';
import axios from 'axios';

export async function getShowById(mediaType: string, id: string) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos`
    );

    return res?.data;
  } catch (err) {
    return null;
  }
}

export async function getShowsByGenre(mediaType: string, genreId: string) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${genreId}`
    );

    return res?.data?.results;
  } catch (err) {
    return null;
  }
}
