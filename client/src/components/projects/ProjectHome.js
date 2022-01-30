import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Flex from 'components/common/Flex';
import IssueCard from './IssueCard';
import Modal from 'react-bootstrap/Modal';
import FalconCloseButton from 'components/common/FalconCloseButton';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBugsforProject } from '../../redux/actions/project';

const ProjectHome = () => {
    const [show, setShow] = useState(false);
    const location = useLocation().pathname.split('/')[2];
    const { projects, bugs } = useSelector((state) => state.project);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [formData, setFormData] = useState({
        email_id: '',
        role: '',
    });

    useEffect(() => {
        dispatch(getAllBugsforProject(location));
    }, [location]);

    return (
        <>
            <div style={{ width: '100%' }}>
                <Row className='g-3 mb-3 w-100'>
                    <Col className='col-12'>
                        <Card>
                            <Card.Body className='position-relative'>
                                <Row className=' align-items-sm-center'>
                                    <Col>
                                        <Row className='align-items-center'>
                                            <Col className='pe-xl-8'>
                                                <h5 className='fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap'>
                                                    Project Name
                                                </h5>
                                            </Col>

                                            <Col
                                                xs='auto'
                                                className='ms-auto me-auto align-items-center'
                                            >
                                                <Flex>
                                                    <Button
                                                        className='px-4 ms-3 fs-sm-0 fs--1'
                                                        variant='falcon-primary'
                                                        onClick={handleShow}
                                                    >
                                                        Invite User
                                                    </Button>
                                                </Flex>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            size='lg'
                            aria-labelledby='contained-modal-title-vcenter'
                            centered
                        >
                            <Modal.Header>
                                <Modal.Title id='contained-modal-title-vcenter'>
                                    Add New User
                                </Modal.Title>
                                <FalconCloseButton
                                    className='btn btn-circle btn-sm transition-base p-0'
                                    onClick={() => setShow(false)}
                                />
                            </Modal.Header>
                            <Form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    {/* <h4>Centered Modal</h4> */}
                                    <Row className='mb-3 g-3'>
                                        <Form.Group
                                            as={Col}
                                            lg={6}
                                            controlId='email'
                                        >
                                            <Form.Label>
                                                Email Address
                                            </Form.Label>
                                            <Form.Control
                                                type='email'
                                                placeholder='@email'
                                                value={formData.email_id}
                                                name='email_id'
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            lg={6}
                                            controlId='role'
                                        >
                                            <Form.Label>Role</Form.Label>
                                            <Form.Select
                                                aria-label='Role'
                                                placeholder='Member'
                                                value={formData.role}
                                                name='role'
                                                onChange={handleChange}
                                            >
                                                <option value='1'>
                                                    Team Lead
                                                </option>
                                                <option value='2'>
                                                    Developer
                                                </option>
                                                <option value='3'>
                                                    Tester
                                                </option>
                                                <option value='4'>
                                                    Analyst
                                                </option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant='secondary'
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant='primary'>Add</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col className='ml-5 mt-3 d-flex align-top'>
                        <h5>Home Page</h5>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col className='col-sm-7 d-flex justify-content-center'>
                        <div style={{ width: '100%' }}>
                            
                                {bugs.map((bug) => {
                                    return (
                                        <Row className='ms-3 mt-3'>
                                            <IssueCard issue={bug} />
                                            </Row>);
                                })}
                            
                        </div>
                    </Col>
                    <Col className='col-sm-5 d-flex justify-content-center'>
                        <div style={{ width: '100%' }}>
                            <Row>
                                <h5>Status</h5>
                            </Row>
                            <Row className='mr-3'>
                                <Card>
                                    <Card.Body className='position-relative'>
                                        <Row className=' align-items-sm-center'>
                                            <Col>
                                                <Row className='align-items-center'>
                                                    <Col className='pe-xl-8'>
                                                        <h5 className='fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap'>
                                                            Open
                                                        </h5>
                                                    </Col>

                                                    <Col
                                                        xs='auto'
                                                        className='ms-auto me-auto align-items-center'
                                                    >
                                                        <Flex>
                                                            <Badge
                                                                pill
                                                                bg='danger'
                                                            >
                                                                10
                                                            </Badge>
                                                        </Flex>
                                                    </Col>
                                                </Row>
                                                <Row className='align-items-center mt-2'>
                                                    <Col className='pe-xl-8'>
                                                        <h5 className='fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap'>
                                                            In Progress
                                                        </h5>
                                                    </Col>

                                                    <Col
                                                        xs='auto'
                                                        className='ms-auto me-auto align-items-center'
                                                    >
                                                        <Flex>
                                                            <Badge
                                                                pill
                                                                bg='primary'
                                                            >
                                                                4
                                                            </Badge>
                                                        </Flex>
                                                    </Col>
                                                </Row>

                                                <Row className='align-items-center mt-2'>
                                                    <Col className='pe-xl-8'>
                                                        <h5 className='fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap mt-2'>
                                                            Resolved
                                                        </h5>
                                                    </Col>

                                                    <Col
                                                        xs='auto'
                                                        className='ms-auto me-auto align-items-center'
                                                    >
                                                        <Flex>
                                                            <Badge
                                                                pill
                                                                bg='success'
                                                            >
                                                                2
                                                            </Badge>
                                                        </Flex>
                                                    </Col>
                                                </Row>

                                                <Row className='align-items-center mt-2'>
                                                    <Col className='pe-xl-8'>
                                                        <h5 className='fs-sm-0 fs-1 mb-2 mb-sm-1 text-primary text-nowrap'>
                                                            Closed
                                                        </h5>
                                                    </Col>

                                                    <Col
                                                        xs='auto'
                                                        className='ms-auto me-auto align-items-center'
                                                    >
                                                        <Flex>
                                                            <Badge
                                                                pill
                                                                bg='secondary'
                                                            >
                                                                1
                                                            </Badge>
                                                        </Flex>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ProjectHome;
