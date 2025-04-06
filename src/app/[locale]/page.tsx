import { Hero } from '@/components/Hero/Hero';
import { Projects } from '@/components/Projects/Projects';
import { Experience } from '@/components/Experience/Experience';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
