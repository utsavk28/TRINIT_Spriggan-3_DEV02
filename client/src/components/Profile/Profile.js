import React from 'react';
import ProfileBanner from './ProfileBanner';
import coverSrc from 'assets/img/4.jpg';
// import avatar from 'assets/img/team/2.jpg';
import { Col, Row } from 'react-bootstrap';
import ProfileSettings from './ProfileSettings';
// import BillingSettings from './BillingSettings';
// import ChangePassword from './ChangePassword';
// import DangerZone from './DangerZone';

const Profile = () => {
    return (
        <>
            <ProfileBanner>
                <ProfileBanner.Header coverSrc={coverSrc} className='mb-0' />
            </ProfileBanner>
            <Row className='g-3 mb-3'>
                <Col xxl={9}>
                    <ProfileSettings />
                </Col>
            </Row>
            {/* <Row className="g-3 mb-3">
        <Col xxl={9}>
            <ChangePassword />
        </Col>
      </Row> */}
        </>
    );
};

export default Profile;
