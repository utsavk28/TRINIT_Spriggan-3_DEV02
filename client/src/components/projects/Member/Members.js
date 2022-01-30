import React from 'react';
import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import Roles from './Roles';
const Members = () => {
  return (
      <>
    <div style={{width:"100%"}}>
      <Row className="w-100">
         <Col>
             <Card>              
                    <Card.Body className="position-relative">
                                <h5 className="fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap">
                                Project Name
                                </h5>
                                
                    </Card.Body>
                    </Card>
                </Col>
         
        </Row>
        <Row>
        <Col className='ml-5 mt-3 d-flex align-top'>
                <h5>Members of this Project</h5>
          </Col>
        </Row>
        <Row>

            <Roles />
        </Row>
        </div>
      </>
  );
};

export default Members;
