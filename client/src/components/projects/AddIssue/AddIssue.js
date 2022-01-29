import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
const AddIssue = () => {
  const [issueData, setIssueData] = useState({
    subject: '',
    description: '',
    status: 'Open',
    assignee:'',
    category:'',
    priority:''
  });

  const handleChange = e => {
    setIssueData({
      ...issueData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };


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
                <h5>Add Bug</h5>
          </Col>

        </Row>
        <Row>
        <Col className='ml-5 mr-5 mt-3 d-flex align-top'>
        <Card.Body className="bg-light">
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              value={issueData.name}
              name="subject"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder=""
              value={issueData.description}
              name="description"
              rows={7}
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3 g-3">
            <Form.Group as={Col} lg={6} controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Status"
                value={issueData.status}
                name="status"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} lg={6} controlId="assignee">
              <Form.Label>Assignee</Form.Label>
              <Form.Control
                type="text"
                placeholder="Assignee"
                value={issueData.assignee}
                name="assignee"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 g-3">
            <Form.Group as={Col} lg={6} controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                value={issueData.category}
                name="category"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} lg={6} controlId="priority">
            <Form.Label>Priority</Form.Label>
            <Form.Select aria-label="Prioriy" placeholder='Normal' value={issueData.priority}
              name="priority"
              onChange={handleChange}>
              <option value='1'>Low</option>
              <option value='2'>Medium</option>
              <option value='3'>High</option>
            </Form.Select>
            </Form.Group>
          </Row>
          
          <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
              Add
            </Button>
            </div>


      </Form>
      </Card.Body>
          </Col>
        </Row>
        </div>
    </>
  );
};

export default AddIssue;
