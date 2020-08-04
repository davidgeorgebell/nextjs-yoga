import React from 'react';
import TickSVG from './TickSVG';

export default function PriceCards() {
  return (
    <div className='bg-indigo-700'>
      <div className='container mx-auto px-8 py-16 max-w-screen-lg'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold text-white'>Join Movement Yoga</h2>
          <p className='text-blue-200 text-2xl md:text-3xl font-semibold'>
            Choose a membership that works for you
          </p>
        </div>
        <div className='block lg:flex lg:items-center lg:flex-row-reverse lg:mt-16 py-16'>
          <div className='bg-white shadow-2xl rounded-lg max-w-md mx-auto lg:min-w-0 lg:w-4/5 relative overflow-hidden'>
            <h3 className='text-xl font-bold text-center py-4 uppercase tracking-wide text-gray-500'>
              Master Membership
            </h3>
            <div className='text-5xl font-bold text-center py-4'>
              <span className='text-gray-500 text-2xl pr-2'>$</span>2400
              <span className='text-gray-500 text-2xl pl-2'>/m</span>
            </div>
            <ul className='px-10 pt-10 pb-16'>
              <li className='flex pb-4'>
                <TickSVG />
                Unlimited Yoga Classes
              </li>
              <li className='flex pb-4'>
                <TickSVG />
                Unlimited Meditation Classes
              </li>
              <li className='flex pb-4'>
                <TickSVG />
                Personal Movement plan from one of our experts
              </li>
              <li className='flex pb-4'>
                <TickSVG />
                Free Movement master T-shirt
              </li>
              <li className='flex pb-4'>
                <TickSVG />
                Free Movement master Towel
              </li>
            </ul>
          </div>
          <div className='bg-white rounded-lg max-w-md mx-auto lg:min-w-0 lg:w-3/5 relative overflow-hidden justify-end mt-16 lg:mt-0 shadow-sm'>
            <h3 className='text-xl font-bold text-center py-4 uppercase text-gray-500 tracking-wide'>
              Essential Membership
            </h3>
            <div className='text-5xl font-bold text-center py-4'>
              <span className='text-gray-500 text-2xl pr-2'>$</span>1900
              <span className='text-gray-500 text-2xl pl-2'>/m</span>
            </div>
            <ul className='px-10 flex flex-col justify-between pt-10 pb-16 '>
              <li className='flex pb-4'>
                <TickSVG />
                2x Yoga Class a Week
              </li>
              <li className='flex pb-4'>
                <TickSVG />1 Meditation Class a Week
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
