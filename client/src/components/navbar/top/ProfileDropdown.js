import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import team3 from 'assets/img/5.jpg';
import Avatar from 'components/common/Avatar';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/auth';

const ProfileDropdown = () => {
    const dispatch = useDispatch();

    return (
        <Dropdown navbar={true} as='li'>
            <Dropdown.Toggle
                bsPrefix='toggle'
                as={Link}
                to='#!'
                className='pe-0 nav-link'
            >
                <Avatar src={team3} />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-menu-card  dropdown-menu-end'>
                <div className='bg-white rounded-2 py-2 dark__bg-1000'>
                    <Dropdown.Item as={Link} to='/user/profile'>
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to='/pages/settings'>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to='/authentication/basic/logout'>
                        <button
                            onClick={() => {
                                dispatch(logout());
                            }}
                        >
                            Logout
                        </button>
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileDropdown;
