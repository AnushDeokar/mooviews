import ImageCarousel from '@/components/image-carousel';
import { ImageSlider } from '@/components/image-slider';
import MainNavbar from '@/components/main-navbar';
import MovieCategory from '@/components/movie-category';
import { getCurrentUser } from '@/lib/session';
import { getMovies } from '@/actions/getMovies';
import { GithubIcon } from 'lucide-react';
import { Button } from 'keep-react';
import { GithubLogoIcon } from '@/components/ui/icons';
import HomeMainSection from '@/components/home-head';
import SearchList from '@/components/search-list';

export default async function Home() {
  const user = await getCurrentUser();
  const movies = await getMovies('movie');
  return (
    <main className='flex min-h-screen flex-col px-[10%]'>
      <div>
        <MainNavbar user={user} />
        <HomeMainSection movies={movies} />
      </div>
      <div className='mt-12'>
        <MovieCategory homePageMovies={movies} />
        <SearchList />
      </div>
    </main>
  );
}
