import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };


  return (
    <>
    <Card>
      <FalconCardHeader title="Profile Settings" />
      <Card.Body className="bg-light">
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="name">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                value={formData.phone}
                name="phone"
                onChange={handleChange}
              />
            </Form.Group>


          <Form.Group className="mb-3" controlId="organization">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Organization Name"
              value={formData.organization}
              name="organization"
              onChange={handleChange}
            />
          </Form.Group>

            <Button className="w-100" variant="primary" type="submit">
              Update
            </Button>
        </Form>
      </Card.Body>
    </Card>
    </>
  );
};

export default ProfileSettings;
