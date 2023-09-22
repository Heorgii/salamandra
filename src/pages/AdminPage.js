import React from 'react';
import { SEO } from 'utils/SEO';
import { Admin } from 'components/Admin/Admin';

const AdminPage = () => {
  return (
    <>
      <SEO title="Administration" description="Page Administration" />
      <div style={{ height: '50px' }}>Auth</div>
      <Admin />
    </>
  );
};

export default AdminPage;
