import React, { useContext } from 'react';
import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from 'context/context';
import ProfileDropdown from './ProfileDropdown';

const TopNavRightSideNavItem = () => {
  const {
    config: { isDark },
    setConfig
  } = useContext(AppContext);
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <Nav.Item>
        <Nav.Link
          as={'div'}
          className="px-2 theme-control-toggle"
          onClick={() => setConfig('isDark', !isDark)}
        >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                className="fs-0"
              />
            </div>
        </Nav.Link>
      </Nav.Item>
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
