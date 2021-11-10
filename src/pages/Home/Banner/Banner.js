import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#f5ebff' }}>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center text-start">
                        <h5>Buy the Toys of your children everyday</h5>
                        <h1 className="my-3">Kids Best Toy Store</h1>
                        <p> Delivering smile with toys. Get your unbeatable fun and learning experience with our creative toys.</p>
                        <div>
                            <Button variant="warning">Buy now</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={banner} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;