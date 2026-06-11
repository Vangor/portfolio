import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import i18n, { getInitialLocale, locales, type Locale } from '@/i18n/client';
import Layout from '@/components/Layout/Layout';
import { Hero } from '@/components/Hero/Hero';
import { Experience } from '@/components/Experience/Experience';
import { Projects } from '@/components/Projects/Projects';
import { Skills } from '@/components/Skills/Skills';
import { Consultation } from '@/components/Consultation/Consultation';

function LocaleLanding({ defaultLocale }: { defaultLocale?: Locale }) {
  const { locale } = useParams();

  useEffect(() => {
    const nextLocale = locales.includes(locale as Locale)
      ? (locale as Locale)
      : (defaultLocale ?? 'en');
    if (i18n.language !== nextLocale) {
      void i18n.changeLanguage(nextLocale);
    }
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem('locale', nextLocale);
  }, [defaultLocale, locale]);

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Consultation />
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LocaleLanding defaultLocale={getInitialLocale()} />} />
        <Route path="/:locale" element={<LocaleLanding />} />
      </Routes>
    </Layout>
  );
}
