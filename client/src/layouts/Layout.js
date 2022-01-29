import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout';
import AuthCardRoutes from 'components/authentication/card/AuthCardRoutes';
import PrivateRoute from 'utils/PrivateRoute';

const Layout = () => {
    return (
        <>
            <Switch>
                <Route path='/authentication' component={AuthCardRoutes} />
                <PrivateRoute path='/' component={MainLayout} />
                <Redirect to='/errors/404' />
            </Switch>
        </>
    );
};

export default Layout;
