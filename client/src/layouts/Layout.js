import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout';
import AuthCardRoutes from 'components/authentication/card/AuthCardRoutes';
const Layout = () => {
  return (
      <>
        <Switch>
        <Route path="/authentication" component={AuthCardRoutes} />
        <Route component={MainLayout} />
        <Redirect to="/errors/404" />
      </Switch>

      </>
  );
};

export default Layout;
