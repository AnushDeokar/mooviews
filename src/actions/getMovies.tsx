import axios from 'axios';

export async function getMovies(category: string) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/${category}/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
    );
    if (!res.data?.results) {
      return [];
    }
    return res?.data?.results;
  } catch (err) {
    console.log(err);
  }
}
