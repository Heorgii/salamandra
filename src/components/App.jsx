import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SharedLayout } from 'components/SharedLayout';
import LandingPage from 'pages/LandingPage';
import AdminPage from 'pages/AdminPage';

export const App = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>{'Loading...'}</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<LandingPage />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
