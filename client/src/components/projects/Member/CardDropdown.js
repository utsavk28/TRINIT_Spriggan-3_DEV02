import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const CardDropdown = () => {
    return (
        <>
            <Dropdown
                className='font-sans-serif btn-reveal-trigger'
                align='end'
            >
                <Dropdown.Toggle
                    variant='link'
                    size='sm'
                    data-boundary='viewport'
                    className={classNames('text-600')}
                ></Dropdown.Toggle>
                <Dropdown.Menu className='border py-0'>
                    <div className='py-2'>
                        <Dropdown.Divider />
                        <Dropdown.Item className='text-danger'>
                            Remove
                        </Dropdown.Item>
                    </div>
                    )
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};
CardDropdown.propTypes = {
    btnRevealClass: PropTypes.string,
    drop: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string,
};

export default CardDropdown;
