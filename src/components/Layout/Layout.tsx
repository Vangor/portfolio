import React from 'react';
import { MainContainer, Content } from './Layout.styled';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  params?: Promise<{ locale: string }>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
