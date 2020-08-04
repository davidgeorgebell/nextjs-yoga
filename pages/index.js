import Nav from '../components/nav';
import Hero from '../components/Hero';
import HookFeature from '../components/HookFeature';
import Testimonial from '../components/Testimonial';
import PriceCards from '../components/PriceCards';

export default function Home() {
  return (
    <div className=' max-w-cover'>
      <div>
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
