import Nav from '../components/nav';
import Hero from '../components/Hero';
import HookFeature from '../components/HookFeature';
import Testimonial from '../components/Testimonial';
import PriceCards from '../components/PriceCards';

import Benefits from '../components/Benefits.js';

export default function Home() {
  return (
    <div className=' max-w-cover'>
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <Hero />
          <Benefits />
          <HookFeature />
          <Testimonial />
          <PriceCards />
        </main>
      </div>
    </div>
  );
}
