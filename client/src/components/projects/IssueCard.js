import React from 'react';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { Card, Button } from 'react-bootstrap';

const IssueCard = () => {
  return (
      <>
    <div style={{width:"100%"}} className='container-fluid'>
    <Card className="h-100">
    <p className="mb-0 text-primary ms-2"> Created At 30-01-2022</p>
      <FalconCardHeader
        title="Issue Title"
      />
      <Card.Body>
        <p className="fs--1 text-600">
            Issue Description
        </p>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
              More Details
            </Button>
            </div>
      </Card.Body>
    </Card>

    </div>
      </>
  );
};

export default IssueCard;
