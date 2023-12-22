'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const variants = {
  visible: (custom: any) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-neutral-900 px-[10%]'>
      <div>
        <nav className='flex items-center justify-between py-10'>
          <h1 className='inline text-5xl font-semibold text-red-700'>
            M<span className='hidden text-3xl md:inline'>ooviews</span>
          </h1>
          <div>
            <button className='rounded-md bg-red-700 px-4 py-2 text-[14px] font-semibold text-white'>
              Sign in
            </button>
          </div>
        </nav>

        <div className='my-10 grid w-full  grid-cols-1 font-semibold md:grid-cols-[.5fr_.6fr]'>
          <div
            className='text-3xl md:text-5xl lg:text-6xl'
            style={{ lineHeight: '65px' }}
          >
            Movie Rating Application built using{' '}
            <span className='text-red-600'>NextJs</span>
          </div>
          <div className='flex h-full w-full gap-4'>
            {/* <motion.div
            className='h-[200px] w-[200px] bg-red-600'
            animate={{ transform: "translateX(100px)" }}            
          >
              What
          </motion.div> */}
            {/* <motion.div custom={0} className='h-[200px] w-[200px] bg-red-600' variants={variants} animate={{ transform: "translateX(100px)" }}/> */}
            {/* <motion.div custom={1} className='h-[200px] w-[200px] bg-red-600'  
            animate={{ transform: "translateX(100px)", scale: [1, 2] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            /> */}

            <motion.div
              className='h-[200px] w-[200px] bg-red-600'
              animate={{
                scale: [1, 2, 1],
                x: [0, 50, 100],
                // transform: ["translateX(20px)", "translateX(20px)", "translateX(20px)", "translateX(20px)", "translateX(20px)"]
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [1, 1, 1],
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
            {/* <motion.div custom={2} className='h-[200px] w-[200px] bg-red-600' variants={variants} animate={{ transform: "translateX(100px)" }}/> */}
          </div>
        </div>
      </div>
    </main>
  );
}
