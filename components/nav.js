import Link from 'next/link';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'Schedule' },
  { href: 'https://nextjs.org/docs', label: 'Coaches' },
  { href: 'https://nextjs.org/docs', label: 'About' },
];

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-between items-center p-8'>
        <li>
          <Link href='/'>
            <a className='no-underline'>Movement</a>
          </Link>
        </li>
        <ul className='flex justify-between items-center space-x-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className='no-underline'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
