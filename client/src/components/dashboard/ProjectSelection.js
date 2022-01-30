import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
// import { statsData } from './SelectionData';
import StatisticsCard from './StatisticsCard';
import ProjectCard from '../common/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import FalconCloseButton from 'components/common/FalconCloseButton';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProjects, createProject } from '../../redux/actions/project';

const ProjectSelection = () => {
    const {
        project: { projects, bugs },
        auth: { isAuthenticated },
    } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        projectname: '',
        descriptions: '',
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(formData);
        dispatch(createProject(formData));
    };

    useEffect(() => {
        dispatch(getUserProjects());
    }, [isAuthenticated]);

    return (
        <>
            <div className='container-fluid'>
                <Card className='bg-light mt-5 mb-3'>
                    <Card.Body className='p-0 position-relative'>
                        <Button
                            className='btn btn-primary text-nowrap w-100'
                            id='button-addon2'
                            style={{ height: '45px' }}
                            onClick={handleShow}
                        >
                            <FontAwesomeIcon
                                icon='plus'
                                className='me-2 fs-1'
                            />
                            <span className='fs-1'>
                                {' '}
                                Click here to add project{' '}
                            </span>
                        </Button>
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
                            Add New Project
                        </Modal.Title>
                        <FalconCloseButton
                            className='btn btn-circle btn-sm transition-base p-0'
                            onClick={() => setShow(false)}
                        />
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            {/* <h4>Centered Modal</h4> */}
                            <Form.Group
                                className='mb-3'
                                controlId='project_name'
                            >
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Project Name'
                                    value={formData.projectname}
                                    name='projectname'
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='project_bio'
                            >
                                <Form.Label>Project Bio</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    placeholder=''
                                    value={formData.descriptions}
                                    name='descriptions'
                                    rows={3}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant='primary' onClick={handleSubmit}>
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <Row className='justify-content-center ms-1 me-1'>
                    <Card className='bg-light my-3'>
                        <Card.Body className='p-3 position-relative'>
                            <Row className='align-items-center'>
                                <Col className='pe-xl-8'>
                                    <p className='fs-0 fw-bold mb-0 text-left'>
                                        Existing Projects
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className='g-3 mb-3'>
                    {projects.map((stat) => (
                        <Col key={stat.title} sm={4}>
                            <ProjectCard stat={stat} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default ProjectSelection;
