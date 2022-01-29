import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import Background from 'components/common/Background';
import image from "assets/img/corner-4.png";
import { useHistory } from "react-router-dom";

const StatisticsCard = ({ stat,...rest }) => {
  const {
    project_name,
    project_bio,
    className
  } = stat;

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/project`; 
    history.push(path);
  }


  return (
    <div style={{cursor:"pointer"}} onClick={routeChange}>
    <Card className={classNames(className, 'overflow-hidden')} {...rest}>
      <Background image={image} className="bg-card" />
      <Card.Body className="position-relative">
        <h6>
          
        </h6>
        <div
          className={classNames(
            'text-warning',
            'display-4 fs-4 mb-2 fw-normal font-sans-serif'
          )}
        >
          {project_name}
        </div>
        <span className="fw-semi-bold fs--1 text-nowrap">
          {project_bio}
        </span>
      </Card.Body>
    </Card>
    </div>
  );
};

StatisticsCard.propTypes = {
  stat: PropTypes.shape({
    className: PropTypes.string
  })
};

export default StatisticsCard;
