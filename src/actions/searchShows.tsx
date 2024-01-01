import { Show } from '@/types';

export async function searchShows(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${
      process.env.NEXT_PUBLIC_TMDB_API_KEY
    }&query=${encodeURIComponent(query)}`
  );

  if (!res.ok) {
    throw new Error('Failed to find shows');
  }

  const shows = (await res.json()) as { results: Show[] };

  const popularShows = shows.results.sort(
    (a, b) => b.popularity - a.popularity
  );

  return {
    results: popularShows,
  };
}
