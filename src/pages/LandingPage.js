import React from 'react';
import { SEO } from 'utils/SEO';
import { Header } from 'components/Header/Header';
import { Menu } from 'components/Menu/Menu';

const LandingPage = () => {
  return (
    <>
      <SEO title="Menu" description="The Salamandra" />
      <Header />
      <Menu />
    </>
  );
};

export default LandingPage;
