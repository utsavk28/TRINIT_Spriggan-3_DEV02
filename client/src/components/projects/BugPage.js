import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const BugPage = () => {
    const [issueData, setIssueData] = useState({
        subject: '',
        description: '',
        status: 'Open',
        assignee: '',
        category: '',
        priority: '',
        comment: '',
    });

    const handleChange = (e) => {
        setIssueData({
            ...issueData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleEdit = (e) => {
        /*Enable everthing to true */
        e.preventDefault();
        document.getElementById('subject').removeAttribute('disabled');
        document.getElementById('description').removeAttribute('disabled');
        document.getElementById('status').removeAttribute('disabled');
        document.getElementById('assignee').removeAttribute('disabled');
        document.getElementById('category').removeAttribute('disabled');
        document.getElementById('priority').removeAttribute('disabled');
    };

    const handleDiscard = (e) => {
        e.preventDefault();
        // props.toggleOpen(false);
    };

    const handleDelete = (e) => {};

    const handleComment = (e) => {};

    return (
        <>
            <div style={{ width: '100%' }}>
                <Row className='w-100'>
                    <Col>
                        <Card>
                            <Card.Body className='position-relative'>
                                <h5 className='fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap'>
                                    Project Name
                                </h5>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='ml-5 mt-3 d-flex align-top'>
                        <h5>Bug Details</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className='ml-5 mr-5 mt-3 d-flex align-top'>
                        <Card.Body className='bg-light'>
                            <Form onSubmit={handleSubmit}>
                                <div className='d-flex justify-content-end'>
                                    {/* <Button variant="warning" className='mr-3' onClick={handleEdit}>
              Edit
            </Button> */}

                                    <Button
                                        variant='danger'
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                </div>

                                <Form.Group
                                    className='mb-3'
                                    controlId='subject'
                                >
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type='text'
                                        id='subject'
                                        placeholder='Subject'
                                        value={issueData.name}
                                        name='subject'
                                        onChange={handleChange}
                                        disabled='true'
                                    />
                                </Form.Group>
                                <Form.Group
                                    className='mb-3'
                                    controlId='description'
                                >
                                    <Form.Label>Project Description</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        id='description'
                                        placeholder=''
                                        value={issueData.description}
                                        name='description'
                                        rows={7}
                                        onChange={handleChange}
                                        disabled='true'
                                    />
                                </Form.Group>

                                <Row className='mb-3 g-3'>
                                    <Form.Group
                                        as={Col}
                                        lg={6}
                                        controlId='status'
                                    >
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='status'
                                            placeholder='Status'
                                            value={issueData.status}
                                            name='status'
                                            onChange={handleChange}
                                            disabled='true'
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        lg={6}
                                        controlId='assignee'
                                    >
                                        <Form.Label>Assignee</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='assignee'
                                            placeholder='Assignee'
                                            value={issueData.assignee}
                                            name='assignee'
                                            onChange={handleChange}
                                            disabled='true'
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3 g-3'>
                                    <Form.Group
                                        as={Col}
                                        lg={6}
                                        controlId='category'
                                    >
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='category'
                                            placeholder='Category'
                                            value={issueData.category}
                                            name='category'
                                            onChange={handleChange}
                                            disabled='true'
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        lg={6}
                                        controlId='priority'
                                    >
                                        <Form.Label>Priority</Form.Label>
                                        <Form.Select
                                            aria-label='Prioriy'
                                            placeholder='Normal'
                                            value={issueData.priority}
                                            name='priority'
                                            id='priority'
                                            onChange={handleChange}
                                            disabled='true'
                                        >
                                            <option value='1'>Low</option>
                                            <option value='2'>Medium</option>
                                            <option value='3'>High</option>
                                        </Form.Select>
                                    </Form.Group>

                                    {/* <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              id="comment"
              placeholder="Comment on this Blog"
              value={issueData.name}
              name="comment"
              onChange={handleChange} disabled="true"
            />
            </Form.Group> */}
                                </Row>

                                {/* <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit" className='mr-3'>
              Save
            </Button>
            <Button variant="secondary" className='mr-3' onClick={handleDiscard}>
              Discard Changes
            </Button> 

          </div>*/}
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>

                {/* Comments */}
                <Row className='w-100 mt-5'>
                    <Col>
                        <Card>
                            <Card.Body className='position-relative'>
                                <h5 className='fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap'>
                                    Comments
                                </h5>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col className='ml-5 mr-5 mt-3 d-flex align-top'>
                        <Card.Body className='bg-light'>
                            <Form onSubmit={handleComment}>
                                <Form.Group
                                    className='mb-3'
                                    controlId='comment'
                                >
                                    <Form.Control
                                        type='text'
                                        id='comment'
                                        placeholder='Comment on this Blog'
                                        value={issueData.name}
                                        name='comment'
                                        onChange={handleChange}
                                        disabled='true'
                                    />
                                </Form.Group>

                                <div className='d-flex justify-content-end'>
                                    <Button
                                        variant='primary'
                                        type='submit'
                                        className='mr-3'
                                    >
                                        Post Comment
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>

                <Row className='ml-5 mr-4 mt-3 mb-3'>
                    {/* Map Method */}
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Row>
            </div>
        </>
    );
};

export default BugPage;
