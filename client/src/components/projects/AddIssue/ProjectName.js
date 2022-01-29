import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
const ProjectName = () => {
  return (
      <>
      <Row className='w-100'>
        <Col className='col-12'>
    <Card>
      <Card.Body className="position-relative">
        <Row className=" align-items-sm-center">
          <Col>
            <Row className="align-items-center">
              <Col className="pe-xl-8">
                <h5 className="fs-sm-0 fs--1 mb-2 mb-sm-1 text-primary text-nowrap">
                  Project Name
                </h5>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </Col>
    </Row>
      </>
  );
};

export default ProjectName;
