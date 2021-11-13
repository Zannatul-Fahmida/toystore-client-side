import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Toy = (props) => {
    const { _id, name, img, description, price } = props.toy;
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={img} height="250" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-secondary">{description}</Card.Text>
                    <Card.Text className="fw-bold">$ {price}</Card.Text>
                    <Link to={`/purchase/${_id}`}>
                        <Button variant="warning">Place Order</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Toy;