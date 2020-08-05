import React from 'react';

export default function Footer() {
  return (
    <footer className='py-6 bg-gray-200'>
      <p className='text-center text-xl text-gray-600'>
        Built by{' '}
        <a
          href='https:davidbell.co'
          className='text-indigo-500 hover:underline hover:text-indigo-600'>
          davidbell.co
        </a>
      </p>
    </footer>
  );
}
