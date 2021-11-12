import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { signUpWithEmailAndPassword, error } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert('Your password did not match');
            return
        }
        signUpWithEmailAndPassword(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
            <Container className="mt-5">
                <h1 className="fw-bold mb-4">Toy <span className="text-warning">Store</span></h1>
                <Form onSubmit={handleRegisterSubmit}>
                    <div className="d-flex flex-column align-items-center">
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingInputCustom2"
                                type="text"
                                name="name"
                                placeholder="name"
                            />
                            <label htmlFor="floatingInputCustom2">Name</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingInputCustom3"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom3">Email address</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingPasswordCustom2"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom2">Password</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingPasswordCustom3"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            <label htmlFor="floatingPasswordCustom3">Confirm Password</label>
                        </Form.Floating>
                        <Button variant="warning" className="col-12 col-md-4 py-3" type="submit">Sign up</Button>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <p className="mt-3">Already have an account??
                            <Link to="/login" className="text-decoration-none text-dark fw-bold"> Login</Link></p>
                    </div>
                </Form>
            </Container>
    );
};

export default Signup;