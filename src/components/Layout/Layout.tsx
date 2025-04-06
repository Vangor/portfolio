import React from 'react';
import { MainContainer, Content } from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      {/* Header will be added here */}
      <Content>{children}</Content>
      {/* Footer will be added here */}
    </MainContainer>
  );
};

export default Layout;
