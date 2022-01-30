import React from 'react';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { Card, Button } from 'react-bootstrap';

import { useLocation, Link } from 'react-router-dom';
import { DateFormatter } from '../../utils/date-format';

const IssueCard = ({ issue }) => {
    const location = useLocation().pathname.split('/')[2];
    const { title, descriptions, created_at ,_id} = issue;
    return (
        <>
            <div style={{ width: '100%' }} className='container-fluid'>
                <Card className='h-100'>
                    <p className='mb-0 text-primary ms-2'>
                        {DateFormatter(created_at)}
                    </p>
                    <FalconCardHeader title={title} />
                    <Card.Body>
                        <p className='fs--1 text-600'>{descriptions}</p>
                        <div className='d-flex justify-content-end'>
                            <Link to={`/bug/${_id}/`}>
                                <Button variant='primary' type='submit'>
                                    More Details
                                </Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default IssueCard;
