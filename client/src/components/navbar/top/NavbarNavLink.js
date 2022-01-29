import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from 'context/context';
import classNames from 'classnames';
import "./nav.css"
const NavbarNavLink = ({ title, route }) => {
  const {
    config: { navbarCollapsed },
    setConfig
  } = useContext(AppContext);

  const handleClick = () => {
    if (navbarCollapsed) {
      setConfig('navbarCollapsed', !navbarCollapsed);
    }
  };
  return (
    <Nav.Link
      as={title ? 'p' : Link}
      className={classNames({
        'text-500': !route?.active,
        'fw-200': !title && route?.active,        
      })}
      to={route?.to}
      onClick={handleClick}
    >
      {title ? title : route.name}
    </Nav.Link>
  );
};

NavbarNavLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    active: PropTypes.bool
  })
};

export default NavbarNavLink;
