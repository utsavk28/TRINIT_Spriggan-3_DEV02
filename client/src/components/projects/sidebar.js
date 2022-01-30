import React, { useState } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [showDropShadow, setShowDropShadow] = useState(false);

    const setDropShadow = () => {
        const el = document.documentElement;
        if (el.scrollTop > 0) {
            setShowDropShadow(true);
        } else {
            setShowDropShadow(false);
        }
    };
    const location = useLocation().pathname.split('/')[2];

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                overflow: 'scroll initial',
            }}
        >
            <CDBSidebar backgroundColor='#727cf5' className='navbar-style'>
                <CDBSidebarHeader
                    prefix={
                        <i className='fa fa-bars fa-large handlebar-icon'></i>
                    }
                >
                    {/* <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Sidebar
            </a> */}
                </CDBSidebarHeader>
                <CDBSidebarContent className='sidebar-content'>
                    <CDBSidebarMenu>
                        <NavLink
                            exact
                            to={`/project/${location}/home`}
                            activeClassName='activeClicked'
                        >
                            <CDBSidebarMenuItem icon='home'>
                                &nbsp;Home
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to={`/project/${location}/add-issue`}
                            activeClassName='activeClicked'
                        >
                            <CDBSidebarMenuItem icon='plus'>
                                &nbsp;Add Issue
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                {/*   
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter> */}
            </CDBSidebar>
        </div>
    );
};
export default Sidebar;
