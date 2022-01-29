import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from 'components/Profile/Profile';
const MainRoutes = () => {
  return (
      <>
        <Switch>
            <Route path="/user/profile" exact component={Profile} />
        </Switch>
      </>
  );
};

export default MainRoutes;
