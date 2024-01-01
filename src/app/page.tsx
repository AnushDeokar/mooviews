import ImageCarousel from '@/components/image-carousel';
import { ImageSlider } from '@/components/image-slider';
import MainNavbar from '@/components/main-navbar';
import MovieCategory from '@/components/movie-category';
import { getCurrentUser } from '@/lib/session';
import { getMovies } from '@/actions/getMovies';
import { GithubIcon } from 'lucide-react';
import { Button } from 'keep-react';
import { GithubLogoIcon } from '@/components/ui/icons';

export default async function Home() {
  const user = await getCurrentUser();
  const movies = await getMovies('movie');
  return (
    <main className='flex min-h-screen flex-col bg-neutral-900 px-[10%]'>
      <div>
        <MainNavbar user={user} />

        <div className='md:grid-flow-col-reverse my-10 grid  w-full grid-cols-1 font-semibold md:grid-cols-[.5fr_.6fr]'>
          <div className='text-center md:text-left'>
            <div className='text-3xl md:text-5xl md:leading-10 lg:text-6xl'>
                Movie Rating Application built using{' '}
                <span className='text-red-600'>NextJs</span>
            </div>
            <p className='w-full my-4 font-light flex justify-center md:justify-start'>
              <button className='px-4 py-2 bg-[#27272a] rounded-md flex items-center gap-2 hover:opacity-70'>
              <GithubLogoIcon width={15} height={15}/>
              Give a star on github
              </button>
              </p>
          </div>
          <div className='items relative hidden items-center justify-center md:mt-0 md:flex md:pt-0'>
            <ImageCarousel movies={movies} />
          </div>

          <div className='items relative flex items-center justify-center md:mt-0 md:hidden md:pt-0'>
            <ImageCarousel movies={movies} />
          </div>
        </div>
      </div>
        <div className='mt-12'>
          <MovieCategory movies={movies} />
        </div>
    </main>
  );
}
