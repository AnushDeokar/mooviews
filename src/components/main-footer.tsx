import React from 'react';
import { footerData } from '@/config/footer';
import Link from 'next/link';

function MainFooter() {
  return (
    <div className='mb-8 mt-16 mt-auto justify-end lg:px-8'>
      <div className='my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {footerData.map((data, id) => (
          <div key={id} className='flex flex-col gap-[4px]'>
            <h4 className='my-2 mt-8 font-semibold sm:mt-0'>{data.header}</h4>
            {data.items.map((item, ind) => (
              <Link
                key={ind}
                href={item.href}
                className='cursor-pointer text-gray-500 hover:text-white'
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <h2 className='text-white/80'>
        Developed By{' '}
        <Link
          href='https://github.com/AnushDeokar'
          className='cursor-pointer font-semibold hover:text-white'
        >
          Anush Deokar
        </Link>
      </h2>
    </div>
  );
}

export default MainFooter;
