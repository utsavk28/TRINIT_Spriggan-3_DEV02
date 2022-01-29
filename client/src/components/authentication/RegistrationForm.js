import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Divider from 'components/common/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/auth';

const RegistrationForm = ({ hasLabel }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    });

    // Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData));
    };

    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (isAuthenticated) return <Redirect to='/' />;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                {hasLabel && <Form.Label>Name</Form.Label>}
                <Form.Control
                    placeholder={!hasLabel ? 'Name' : ''}
                    value={formData.username}
                    name='username'
                    onChange={handleFieldChange}
                    type='text'
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                {hasLabel && <Form.Label>Email address</Form.Label>}
                <Form.Control
                    placeholder={!hasLabel ? 'Email address' : ''}
                    value={formData.email}
                    name='email'
                    onChange={handleFieldChange}
                    type='text'
                />
            </Form.Group>

            <Row className='g-2 mb-3'>
                <Form.Group as={Col} sm={6}>
                    {hasLabel && <Form.Label>Password</Form.Label>}
                    <Form.Control
                        placeholder={!hasLabel ? 'Password' : ''}
                        value={formData.password}
                        name='password'
                        onChange={handleFieldChange}
                        type='password'
                    />
                </Form.Group>
                <Form.Group as={Col} sm={6}>
                    {hasLabel && <Form.Label>Confirm Password</Form.Label>}
                    <Form.Control
                        placeholder={!hasLabel ? 'Confirm Password' : ''}
                        value={formData.confirmPassword}
                        name='confirmPassword'
                        onChange={handleFieldChange}
                        type='password'
                    />
                </Form.Group>
            </Row>

            <Form.Group className='mb-3'>
                <Form.Check
                    type='checkbox'
                    id='acceptCheckbox'
                    className='form-check'
                >
                    <Form.Check.Input
                        type='checkbox'
                        name='isAccepted'
                        checked={formData.isAccepted}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                isAccepted: e.target.checked,
                            })
                        }
                    />
                    <Form.Check.Label className='form-label'>
                        I accept the <Link to='#!'>terms</Link> and{' '}
                        <Link to='#!'>privacy policy</Link>
                    </Form.Check.Label>
                </Form.Check>
            </Form.Group>

            <Form.Group className='mb-4'>
                <Button
                    className='w-100'
                    type='submit'
                    disabled={
                        !formData.username ||
                        !formData.email ||
                        !formData.password ||
                        !formData.confirmPassword ||
                        !formData.isAccepted
                    }
                >
                    Register
                </Button>
            </Form.Group>
            <Divider>or register with</Divider>

            <SocialAuthButtons />
        </Form>
    );
};

RegistrationForm.propTypes = {
    hasLabel: PropTypes.bool,
};

export default RegistrationForm;
