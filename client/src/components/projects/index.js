import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import ProjectHome from './ProjectHome';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import AddIssue from './AddIssue/AddIssue';
import BugPage from './BugPage';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllBugsforProject } from '../../redux/actions/project';
import Members from './Member/Members';

const Project = () => {
    const { projects, bugs } = useSelector((state) => state.project);
    const dispatch = useDispatch();
    const location = useLocation().pathname.split('/')[2];

    useEffect(() => {
        dispatch(getAllBugsforProject(location));
    }, [location]);
    
    return (
        <>
            <Row>
                <Router>
                    <Col className='col-sm-2'>
                        <div className='App'>
                            <Sidebar />
                        </div>
                    </Col>
                    <Col className='col-sm-10 d-flex justify-content-start'>
                        <Switch>
                            <Route
                                path='/project/:projectId/home'
                                exact
                                component={ProjectHome}
                            />
                            <Route
                                path='/project/:projectId/add-issue'
                                exact
                                component={AddIssue}
                            />
                            <Route path='/bug' exact component={BugPage} />
                            <Route path="/members" exact component={Members} />
                        </Switch>
                    </Col>
                </Router>
            </Row>
        </>
    );
};

export default Project;
