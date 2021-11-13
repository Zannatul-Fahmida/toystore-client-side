import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const OrderedToys = (props) => {
    const { _id, toyName, toyImg, toyPrice, toyDescription, status } = props.order;
    const [orders, setOrders] = useState([]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://frozen-hollows-26442.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={toyImg} height="250" />
                <Card.Body>
                    <Card.Title>{toyName}</Card.Title>
                    <Card.Text className="text-secondary">$ {toyPrice}</Card.Text>
                    <Card.Text className="text-secondary">{toyDescription}</Card.Text>
                    <Card.Text className="text-secondary">{status}</Card.Text>
                    <Button variant="danger" onClick={() => handleDelete(_id)}>Cancel Order</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default OrderedToys;