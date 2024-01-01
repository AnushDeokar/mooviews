import { ImageSlider } from '@/components/image-slider';
import MainNavbar from '@/components/main-navbar';
import MovieCategory from '@/components/movie-category';
import { getCurrentUser } from '@/lib/session';

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <main className='flex min-h-screen flex-col bg-neutral-900 px-[10%]'>
      <div>
        <MainNavbar user={user} />

        <div className='md:grid-flow-col-reverse my-10 grid  w-full grid-cols-1 font-semibold md:grid-cols-[.5fr_.6fr]'>
          <div className='text-3xl md:text-5xl md:leading-10 lg:text-6xl'>
            Movie Rating Application built using{' '}
            <span className='text-red-600'>NextJs</span>
          </div>
          <div className='items relative hidden items-center justify-center pt-24 md:mt-0 md:flex md:pt-0'>
            <ImageSlider height={280} width={400} />
          </div>

          <div className='items relative flex items-center justify-center pt-24 md:mt-0 md:hidden md:pt-0'>
            <ImageSlider height={150} width={200} />
          </div>
        </div>

        <div className='mt-32'>
          <MovieCategory />
        </div>
      </div>
    </main>
  );
}
