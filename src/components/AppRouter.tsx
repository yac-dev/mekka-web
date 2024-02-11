import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
  Router,
} from 'react-router-dom';
import { ResetPassword } from '../features/ResetPassword/pages/ResetPassword';

export const AppRouter = () => {
  return (
    <BrowserRouter basename='/app'>
      <Routes>
        <Route path='/resetpassword' Component={ResetPassword} />
      </Routes>
    </BrowserRouter>
  );
};
