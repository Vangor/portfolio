import { Hero } from '@/components/Hero/Hero';
import { Projects } from '@/components/Projects/Projects';
import { Experience } from '@/components/Experience/Experience';
import { Consultation } from '@/components/Consultation/Consultation';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Consultation />
      <Footer />
    </main>
  );
}
