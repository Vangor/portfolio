import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18n, { locales, type Locale } from '@/i18n/client';
import Layout from '@/components/Layout/Layout';
import { Hero } from '@/components/Hero/Hero';
import { Experience } from '@/components/Experience/Experience';
import { Projects } from '@/components/Projects/Projects';
import { Consultation } from '@/components/Consultation/Consultation';

function LocaleLanding() {
  const { locale } = useParams();

  useEffect(() => {
    const nextLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
    if (i18n.language !== nextLocale) {
      void i18n.changeLanguage(nextLocale);
    }
    window.localStorage.setItem('locale', nextLocale);
  }, [locale]);

  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Consultation />
    </main>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:locale" element={<LocaleLanding />} />
      </Routes>
    </Layout>
  );
}
