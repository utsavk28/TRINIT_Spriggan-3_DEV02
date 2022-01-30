import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { statsData } from './ExploreSelectionData';
import ExploreStatisticsCard from './ExploreStatisticsCard';
import { getProjects } from '../../redux/actions/project';

const ExploreProjectSelection = () => {
    const { projects, bugs } = useSelector((state) => state.project);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, []);

    return (
        <>
            <div className='container-fluid'>
                <Row className='g-3 mb-3 mt-3'>
                    {projects.map((stat) => (
                        <Col key={stat.title} sm={4}>
                            <ExploreStatisticsCard stat={stat} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default ExploreProjectSelection;
