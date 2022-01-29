import React from 'react';
import {
  mainRoutes,
} from 'routes/routes';
import NavbarNavLink from './NavbarNavLink';
import { Nav } from 'react-bootstrap';

import { getFlatRoutes } from 'helpers/utils';

const NavbarTopDropDownMenus = () => {

  const mroutes = getFlatRoutes(mainRoutes.children);

  return (
    <>

    <Nav className='mt-1'>
      {mroutes.unTitled.map(route => (
            <NavbarNavLink key={route.name} route={route} />
          ))}
    </Nav>
      
    </>
  );
};

export default NavbarTopDropDownMenus;
