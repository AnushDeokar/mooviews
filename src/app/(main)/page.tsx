import MainNavbar from '@/components/main-navbar';
import MovieCategory from '@/components/movie-category';
import { getMovies } from '@/actions/getMovies';
import HomeMainSection from '@/components/home-head';
import SearchList from '@/components/search-list';
import ShowsSlider from '@/components/shows-slider';
import { homePageShows } from '@/config/homePageShows';
import { getShowsByGenre } from '@/actions/getShowsById';

export default async function Home() {
  const movies = await getMovies('movie');
  const alllGenres = [];
  for (let i = 0; i < homePageShows.length; i++) {
    const genreShows = await getShowsByGenre('movie', homePageShows[i].genreId);

    if (genreShows) {
      alllGenres.push({
        header: homePageShows[i].title,
        shows: genreShows,
      });
    }
  }

  return (
    <div>
      <HomeMainSection movies={movies} />
      {alllGenres.map((details, i) => (
        <ShowsSlider header={details.header} shows={details.shows} key={i} />
      ))}
      <SearchList />
    </div>
  );
}
