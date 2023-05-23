import React from 'react';
import SectionHeader from '../SectionHeader';
import MainHeader from '../MainHeader';

const Header: React.FC = () => {
  return (
    <header>
      <MainHeader />
      <SectionHeader />
    </header>
  );
};

export default Header;
