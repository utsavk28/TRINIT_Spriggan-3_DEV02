import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import AppContext from 'context/context';
import Logo from 'components/common/Logo';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import { topNavbarBreakpoint } from 'config';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';

const NavbarTop = () => {
  const {
    config: { navbarCollapsed },
    setConfig
  } = useContext(AppContext);

  const [showDropShadow, setShowDropShadow] = useState(false);

  const handleBurgerMenu = () => {
    setConfig('navbarCollapsed', !navbarCollapsed);
      };

  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  return (
    <div className='container-fluid'>
    <Navbar
      className={classNames('navbar-glass  fs--1 navbar-top sticky-kit', {
        // 'navbar-glass-shadow': showDropShadow
        'navbar-glass-shadow': showDropShadow
      })}
      expand={topNavbarBreakpoint
      }
    >

<Navbar.Toggle className='toggle-icon-wrapper me-md-3 me-1 ms-0 d-lg-none' >
<button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center" 
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
</button>
</Navbar.Toggle>




      <Logo at="navbar-top" width={40} id="topLogo" />
        <Navbar.Collapse
          in={navbarCollapsed}
          className="scrollbar pb-3 pb-lg-0" 
        >
          <Nav navbar>
            <NavbarTopDropDownMenus />
          </Nav>
        </Navbar.Collapse>

      <TopNavRightSideNavItem />
    </Navbar>
    </div>
  );
};

export default NavbarTop;
