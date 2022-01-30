import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Button } from 'react-bootstrap';
import classNames from 'classnames';
import Background from './Background';
import image from 'assets/img/corner-4.png';
import { Link } from 'react-router-dom';

const ProjectCard = ({ stat }) => {
    const { projectname, descriptions, className, _id } = stat;

    return (
        <Link to={`/project/${_id}`}>
            <div style={{ cursor: 'pointer' }}>
                <Card
                    className={classNames(className, 'overflow-hidden')}
                    // {...rest}
                >
                    <Background image={image} className='bg-card' />
                    <Card.Body className='position-relative'>
                        <h6></h6>
                        <div
                            className={classNames(
                                'text-warning',
                                'display-4 fs-4 mb-2 fw-normal font-sans-serif'
                            )}
                        >
                            {projectname}
                        </div>
                        <span className='fw-semi-bold fs--1 text-nowrap'>
                            {descriptions}
                        </span>
                    </Card.Body>
                    <div>
                        <Button variant='info'>Join</Button>
                    </div>
                </Card>
            </div>
        </Link>
    );
};

export default ProjectCard;
