import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Layout from './layouts/Layout';
import { loadUser } from './redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from './utils/PrivateRoute';
import url from './utils/api';

function App() {
    const dispatch = useDispatch();
    const {
        auth: { loading, isAuthenticated },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return (
        <>
            <Router>
                <Layout />
            </Router>
        </>
    );
}

export default App;
