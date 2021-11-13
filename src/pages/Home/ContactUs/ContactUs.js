import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: '#f5ebff' }}>
            <Container className="py-5">
                <h2 className="fw-bold mb-5">Contact <span className="text-warning">Us</span></h2>
                <Form className="col-12 col-md-6 mx-auto">
                    <Row className="g-2 mb-2">
                        <Col md>
                            <Form.Control size="lg" type="text" placeholder="Name" />
                        </Col>
                        <Col md>
                            <Form.Control size="lg" type="email" placeholder="Email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" size="lg" rows={4} placeholder="Message" />
                        </Col>
                    </Row>
                    <Button variant="warning" className="mt-2">Send Message</Button>
                </Form>
            </Container>
        </div>
    );
};

export default ContactUs;