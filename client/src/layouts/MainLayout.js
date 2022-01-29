import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NavbarTop from 'components/navbar/top/NavbarTop';
import First from 'components/dashboard/First';
import ProjectSelection from 'components/dashboard/ProjectSelection';
import MainRoutes from './MainRoutes';

const MainLayout = () => {

  return (
    <div className='container'>
          <NavbarTop />
          <Switch>
            <Route path="/" exact component={ProjectSelection} />
            <MainRoutes />
          </Switch>
    </div>
  );
};

export default MainLayout;
