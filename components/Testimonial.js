import React from 'react';

export default function Testimonial() {
  return (
    <div className='flex flex-col items-center py-24 container mx-auto px-4 max-w-screen-lg'>
      <div className='pb-4'>
        <img
          className='rounded-full h-20 w-20'
          src='dane-wetton.jpg'
          alt='Yoga woman'
        />
      </div>
      <div className='max-w-md'>
        <h3 className='text-3xl font-bold text-center pb-4'>
          So glad I found Movement. I have more energy and I'm fitter than ever.
        </h3>
      </div>
      <div>
        <span className='text-gray-600'>Lula - age 27</span>
      </div>
    </div>
  );
}
