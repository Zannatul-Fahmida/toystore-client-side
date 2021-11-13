import { faCar, faCertificate, faGlobeAmericas, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Advantage = () => {
    return (
        <div className="bg-dark">
            <Container className="py-5">
                <Row>
                    <Col className="d-flex align-items-center justify-content-evenly justify-content-md-between col-12 col-md-3">
                        <div>
                            <FontAwesomeIcon className="fs-1 text-warning" icon={faHourglassHalf} />
                        </div>
                        <div className="text-start text-white">
                            <h4>Free Shipping</h4>
                            <p className="mb-0">Free shipping on all UK orders</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center my-2 my-md-0 justify-content-evenly justify-content-md-between col-12 col-md-3">
                        <div>
                        <FontAwesomeIcon className="fs-1 text-warning" icon={faCertificate} />
                        </div>
                        <div className="text-start text-white">
                            <h4>Free Shipping</h4>
                            <p className="mb-0">Free shipping on all UK orders</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center my-2 my-md-0 justify-content-evenly justify-content-md-between col-12 col-md-3">
                        <div>
                        <FontAwesomeIcon className="fs-1 text-warning" icon={faGlobeAmericas} />
                        </div>
                        <div className="text-start text-white">
                            <h4>Free Shipping</h4>
                            <p className="mb-0">Free shipping on all UK orders</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-evenly justify-content-md-between col-12 col-md-3">
                        <div>
                        <FontAwesomeIcon className="fs-1 text-warning" icon={faCar} />
                        </div>
                        <div className="text-start text-white">
                            <h4>Free Shipping</h4>
                            <p className="mb-0">Free shipping on all UK orders</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Advantage;