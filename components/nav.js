import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-between items-center p-8 container mx-auto max-w-screen-lg'>
        <li>
          <Link href='/'>
            <a className='no-underline font-serif text-3xl text-red-500'>
              Movement Yoga
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
