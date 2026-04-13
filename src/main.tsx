import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import { PostHogProvider } from '@/providers/PostHogProvider';
import './globals.css';
import './i18n/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostHogProvider>
        <ThemeProvider defaultTheme="system">
          <App />
        </ThemeProvider>
      </PostHogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
