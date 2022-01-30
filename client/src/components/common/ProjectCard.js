import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Button } from 'react-bootstrap';
import classNames from 'classnames';
import Background from './Background';
import image from 'assets/img/corner-4.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { joinProject } from '../../redux/actions/project';

const ProjectCard = ({ stat }) => {
    const { projectname, descriptions, className, _id } = stat;
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('join project');
        dispatch(joinProject({ projectId: _id }));
    };

    return (
        <>
            <div>
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
                            <Link to={`/project/${_id}`}>{projectname}</Link>
                        </div>
                        <span className='fw-semi-bold fs--1 text-nowrap'>
                            {descriptions}
                        </span>
                    </Card.Body>
                    <div>
                        {/* <Button variant='info' onClick={handleClick}>
                            Join
                        </Button> */}
                    </div>
                </Card>
                <button className='btn btn-info' onClick={handleClick}>
                    Join
                </button>
            </div>
        </>
    );
};

export default ProjectCard;
