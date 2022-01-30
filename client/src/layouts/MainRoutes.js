import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from 'components/Profile/Profile';
import Project from 'components/projects';
import ExploreProjectSelection from 'components/explore/ExploreProjectSelection';

const MainRoutes = () => {
  return (
      <>
        <Switch>
            <Route path="/user/profile" exact component={Profile} />
            <Route path="/project" exact component={Project} />
            <Route path="/explore" exact component={ExploreProjectSelection} />

        </Switch>
      </>
  );
};

export default MainRoutes;
