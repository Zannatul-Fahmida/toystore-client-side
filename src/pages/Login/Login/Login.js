import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { logInWithEmailAndPassword, error, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        logInWithEmailAndPassword(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleLogin = (location, history) => {
        signInUsingGoogle();
    }
    console.log(loginData);
    return (
        <Container className="mt-5">
            <Form onSubmit={handleLoginSubmit}>
                <div className="d-flex flex-column align-items-center">
                    <div className="text-center col-8 col-md-6">
                        <h1 className="fw-bold mb-4">Toy <span className="text-warning">Store</span></h1>
                    </div>
                    <Form.Floating onChange={handleOnChange} className="mb-3 col-12 col-md-6">
                        <Form.Control
                            id="floatingInputCustom1"
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom1">Email address</label>
                    </Form.Floating>
                    <Form.Floating onChange={handleOnChange} className="mb-3 col-12 col-md-6">
                        <Form.Control
                            id="floatingPasswordCustom1"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom1">Password</label>
                    </Form.Floating>
                    <Button className="col-12 col-md-6 py-3" variant="warning" type="submit">Log in</Button>
                    <div className="text-center col-12 col-md-6 mt-4">
                        {error && <Alert variant="danger">{error}</Alert>}
                        <p>Don't have an account?? <Link to="/signup" className="text-decoration-none fw-bold text-dark">Sign Up</Link></p>
                        <Button variant="primary" onClick={handleGoogleLogin}><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign in with google</Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
};

export default Login;
// It is a soft toy. Kids love to play with soft toys. soft toy is a toy doll with an outer fabric sewn from a textile and stuffed with flexible material.
// A toy is an item that is used primarily by children though may also be marketed to adults under certain circumstances.




// superman   https://i.ibb.co/SnjRpGF/pexels-erik-mclean-7258495.jpg
// red car    https://i.ibb.co/JQtQZV2/pexels-kristina-paukshtite-3444345.jpg
// yellow bus   https://i.ibb.co/vkTKfYK/pexels-nubia-navarro-nubikini-386025.jpg