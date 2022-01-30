import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { reportBug } from '../../../redux/actions/project';
import { useLocation } from 'react-router-dom';

const AddIssue = () => {
    const [issueData, setIssueData] = useState({
        title: '',
        descriptions: '',
    });
    const { projects, bugs } = useSelector((state) => state.project);
    const dispatch = useDispatch();
    const location = useLocation().pathname.split('/')[2];

    const handleChange = (e) => {
        setIssueData({
            ...issueData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(issueData);
        dispatch(reportBug({ ...issueData, projectId: location }));
    };

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
                        <h5>Add Bug</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className='ml-5 mr-5 mt-3 d-flex align-top'>
                        <Card.Body className='bg-light'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                    className='mb-3'
                                    controlId='subject'
                                >
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Subject'
                                        value={issueData.title}
                                        name='title'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className='mb-3'
                                    controlId='description'
                                >
                                    <Form.Label>Bug Description</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        placeholder=''
                                        value={issueData.descriptions}
                                        name='descriptions'
                                        rows={7}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <div className='d-flex justify-content-end'>
                                    <Button variant='primary' type='submit'>
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
