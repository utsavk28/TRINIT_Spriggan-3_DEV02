import React, {useState} from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { statsData } from './ExploreSelectionData';
import ExploreStatisticsCard from './ExploreStatisticsCard';

const ExploreProjectSelection = () => {
  
  return (
      <>
      <div className='container-fluid'>
    <Row className="g-3 mb-3 mt-3">
      {statsData.map(stat => (
        <Col key={stat.title} sm={4}>
          <ExploreStatisticsCard stat={stat}/>
        </Col>
      ))}
    </Row>
    </div>
    </>
  );
};

export default ExploreProjectSelection;
