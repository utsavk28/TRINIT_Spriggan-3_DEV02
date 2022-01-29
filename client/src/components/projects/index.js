import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Sidebar from './sidebar';
import ProjectHome from './ProjectHome';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import AddIssue from './AddIssue/AddIssue';
import BugPage from './BugPage';

const Project = () => {
  return (
      <>
        <Row>
        <Router>
        <Col className='col-sm-2'>
    
      <div className="App">
        <Sidebar />
      </div>
        </Col>
        <Col className='col-sm-10 d-flex justify-content-start'>
        <Switch>
            <Route path="/home" exact component={ProjectHome} />
            <Route path="/add-issue" exact component={AddIssue} />
            <Route path="/bug" exact component={BugPage} />
          </Switch>
          </Col>
          </Router>
        </Row>
      </>
  );
};

export default Project;