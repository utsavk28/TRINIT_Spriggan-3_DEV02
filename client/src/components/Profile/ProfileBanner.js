import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Background from 'components/common/Background';
import classNames from 'classnames';

const ProfileBannerHeader = ({ coverSrc, className }) => {
    return (
        <Card.Header
            className={classNames(className, 'position-relative min-vh-25')}
        >
            <Background
                image={coverSrc}
                className='rounded-3 rounded-bottom-0'
            />
        </Card.Header>
    );
};

const ProfileBanner = ({ children }) => {
    return <Card className='mb-3'>{children}</Card>;
};

ProfileBanner.Header = ProfileBannerHeader;

ProfileBannerHeader.propTypes = {
    avatar: PropTypes.string.isRequired,
    coverSrc: PropTypes.string.isRequired,
    className: PropTypes.string,
};

ProfileBanner.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProfileBanner;
