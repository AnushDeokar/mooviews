import MainNavbar from '@/components/main-navbar';
import MovieCategory from '@/components/movie-category';
import { getMovies } from '@/actions/getMovies';
import HomeMainSection from '@/components/home-head';
import SearchList from '@/components/search-list';

export default async function Home() {
  const movies = await getMovies('movie');
  return (
    <div>
        <HomeMainSection movies={movies} />
      <div className='mt-12'>
        <MovieCategory homePageMovies={movies} />
        <SearchList />
      </div>
    </div>
  );
}