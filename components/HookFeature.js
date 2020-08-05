import React from 'react';
import Hero from './Hero';

export default function HookFeature() {
  return (
    <div className='flex flex-col-reverse md:flex-row max-h-xl py-48 container mx-auto px-4 max-w-screen-lg'>
      <div>
        <img
          className='rounded shadow-xl'
          src='carl-barcelo.jpg'
          alt='Yoga woman'
        />
      </div>
      <div className='self-center px-6 py-10'>
        <span className='text-indigo-500'>Get Started</span>
        <h3 className='text-3xl font-bold my-5 text-indigo-900'>
          Yoga is more than a move. It's a movement!
        </h3>
        <p className='text-gray-700'>
          Join one of the biggest fit communities in Taipei and be part of the
          Movement family.
        </p>
      </div>
    </div>
  );
}
