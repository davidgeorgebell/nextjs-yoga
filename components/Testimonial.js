import React from 'react';

export default function Testimonial() {
  return (
    <div className='flex flex-col items-center py-24 container mx-auto px-4 max-w-screen-xl'>
      <div className='pb-4'>
        <img
          className='rounded-full h-20 w-20'
          src='dane-wetton.jpg'
          alt='Yoga woman'
        />
      </div>
      <figure className='max-w-4xl'>
        <blockquote className='text-3xl italic text-center pb-4 flex'>
          <svg
            className='h-8 w-8 sm:h-12 sm:w-12'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M30.216 9H35c-2.591 4.338-4.385 8.474-5.282 12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226 13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382 12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237 12.674 9z'
              fill='#4E68D0'
              fill-rule='evenodd'></path>
          </svg>{' '}
          So glad I found Movement. I have more energy and I'm fitter than ever.
          <svg
            className='h-8 w-8 sm:h-12 sm:w-12 '
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9.784 32H5c2.591-4.338 4.385-8.474 5.282-12.307H5.498L7.093 9h10.365l-.697 4.842C15.565 21.711 12.774 27.763 9.784 32zm17.542 0h-4.884c2.69-4.338 4.485-8.474 5.382-12.307H23.04L24.635 9H35l-.698 4.842C33.106 21.711 30.316 27.763 27.326 32z'
              fill='#4E68D0'
              fill-rule='evenodd'></path>
          </svg>
        </blockquote>
        <figcaption>
          <span className='text-indigo-600 uppercase font-bold'>
            Lula - age 27
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
