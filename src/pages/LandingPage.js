import React from 'react';
import { SEO } from 'utils/SEO';
import { Menu } from 'components/Menu/Menu';

const LandingPage = () => {
  return (
    <>
      <SEO title="Menu" description="The Salamandra" />
      <Menu />
    </>
  );
};

export default LandingPage;
