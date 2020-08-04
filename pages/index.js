import Nav from '../components/nav';
import Hero from '../components/Hero';
import HookFeature from '../components/HookFeature';
import Testimonial from '../components/Testimonial';
import PriceCards from '../components/PriceCards';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <HookFeature />
      <Testimonial />
      <PriceCards />
    </div>
  );
}
