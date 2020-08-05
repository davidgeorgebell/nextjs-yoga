import React from 'react';
import TickSVG from './TickSVG';

export default function Benefits() {
  return (
    <div className='bg-gray-200 py-32 '>
      <div className=' container mx-auto px-4 max-w-screen-lg '>
        <h2 className='text-3xl text-indigo-900 pb-24 font-bold text-center uppercase'>
          Benefits of Yoga
        </h2>
        <ul className='grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
          <li className='flex flex-col'>
            <div className='items-center self-center pb-4'>
              <TickSVG />
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-xl pb-4'>Reduces Stress</h3>
              <p className='text-gray-700'>
                Yoga is a great ways of reducing stress and anxiety.
              </p>
            </div>
          </li>
          <li className='flex flex-col'>
            <div className='items-center self-center pb-4'>
              <TickSVG />
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-xl pb-4'>Great Exercise</h3>
              <p className='text-gray-700'>
                Improve your health and fitness in a fun and calming way.
              </p>
            </div>
          </li>
          <li className='flex flex-col'>
            <div className='items-center self-center pb-4'>
              <TickSVG />
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-xl pb-4'>Improved Flexibility</h3>
              <p className='text-gray-700'>
                Yoga improves flexibility reliving you of aches and pains.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
