import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
    const { setUser, setError, setUserName, handleEmail, handlePassword, error, handleName, handleConfirmPassword, signUpWithEmailAndPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleEmailAndPasswordSignUp = () => {
        signUpWithEmailAndPassword()
            .then(result => {
                setUser(result.user);
                setError('');
                setUserName();
                history.push(redirect_uri);
            })
    }
    return (
            <Container className="mt-5">
                <h1 className="fw-bold mb-4">Toy <span className="text-warning">Store</span></h1>
                <Form>
                    <div className="d-flex flex-column align-items-center">
                        <Form.Floating onBlur={handleName} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingInputCustom2"
                                type="text"
                                placeholder="name"
                            />
                            <label htmlFor="floatingInputCustom2">Name</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleEmail} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingInputCustom3"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom3">Email address</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handlePassword} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingPasswordCustom2"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom2">Password</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleConfirmPassword} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingPasswordCustom3"
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <label htmlFor="floatingPasswordCustom3">Confirm Password</label>
                        </Form.Floating>
                        <Button variant="warning" className="col-12 col-md-4 py-3" onClick={handleEmailAndPasswordSignUp}>Sign up</Button>
                        <p className="text-danger">{error}</p>
                        <p className="mt-3">Already have an account??
                            <Link to="/login" className="text-decoration-none text-dark fw-bold"> Login</Link></p>
                    </div>
                </Form>
            </Container>
    );
};

export default Signup;