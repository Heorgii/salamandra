import React, { useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
// import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { SharedLayout } from 'components/SharedLayout';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, getPermission } from 'redux/auth/selectors';
import LandingPage from 'pages/LandingPage';
import AdminPage from 'pages/AdminPage';
import { Register } from './Auth/Forms/Register';
import { Login } from './Auth/Forms/Login';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const permission = useSelector(getPermission);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <HelmetProvider>
      <Suspense fallback={<div>{'Loading...'}</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<LandingPage />} />
          </Route>
          {permission === 'admin' ? (
            <Route path="admin" element={<AdminPage />} />
          ) : (
            <Route
              path="admin"
              element={
                <RestrictedRoute redirectTo="/admin" component={<Login />} />
              }
            />
          )}

          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/admin" component={<Register />} />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute redirectTo="/admin" component={<Login />} />
            }
          />
          {/* <Route
            path="forgot_password"
            element={
              <RestrictedRoute
                redirectTo="/signin"
                component={<ForgotPassword />}
              />
            }
          /> */}
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
