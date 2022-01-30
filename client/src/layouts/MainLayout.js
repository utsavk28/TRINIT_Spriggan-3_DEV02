import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarTop from 'components/navbar/top/NavbarTop';
import ProjectSelection from 'components/dashboard/ProjectSelection';
import MainRoutes from './MainRoutes';

const MainLayout = () => {
    return (
        <div className=''>
            <NavbarTop />
            <Switch>
                <Route path='/' exact component={ProjectSelection} />
                <MainRoutes />
            </Switch>
        </div>
    );
};

export default MainLayout;
