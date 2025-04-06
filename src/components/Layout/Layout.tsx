import React from 'react';
import { MainContainer, Content } from './Layout.styled';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Content>{children}</Content>
      {/* Footer will be added here */}
    </MainContainer>
  );
};

export default Layout;
