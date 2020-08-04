import Nav from '../components/nav';
import Hero from '../components/Hero';
import HookFeature from '../components/HookFeature';
import Testimonial from '../components/Testimonial';
import PriceCards from '../components/PriceCards';

export default function Home() {
  return (
    <div className='bg-gray-100 max-w-cover'>
      <div className='container mx-auto px-4 max-w-screen-lg'>
        <header>
          <Nav />
        </header>
        <main>
          <Hero />
          <HookFeature />
          <Testimonial />
          <PriceCards />
        </main>
      </div>
    </div>
  );
}
