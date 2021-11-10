import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { setUser, setError, setUserName, signInUsingGoogle, handleEmail, handlePassword, logInWithEmailAndPassword, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleEmailAndPasswordLogin = () => {
        logInWithEmailAndPassword()
            .then(result => {
                setUser(result.user);
                setError('');
                setUserName();
                history.push(redirect_uri);
            })
    }
    return (
            <Container className="mt-5">
                <Form>
                    <div className="d-flex flex-column align-items-center">
                        <div className="text-center col-8 col-md-6">
                            <h1 className="fw-bold mb-4">Toy <span className="text-warning">Store</span></h1>
                        </div>
                        <Form.Floating onBlur={handleEmail} className="mb-3 col-12 col-md-6">
                            <Form.Control
                                id="floatingInputCustom1"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom1">Email address</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handlePassword} className="mb-3 col-12 col-md-6">
                            <Form.Control
                                id="floatingPasswordCustom1"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom1">Password</label>
                        </Form.Floating>
                        <Button className="col-12 col-md-6 py-3" variant="warning" onClick={handleEmailAndPasswordLogin}>Log in</Button>
                        <div className="text-center col-12 col-md-6 mt-4">
                            <p className="text-danger">{error}</p>
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