import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const AllOrderedToys = (props) => {
    const { _id, toyName, toyImg, toyPrice, name, email, status } = props.order;
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
    const handleStatus = id => {
        const proceed = window.confirm('Are you sure you want to update?');
        if (proceed) {
            fetch(`https://frozen-hollows-26442.herokuapp.com/order/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('updated successfully');
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
                <Card.Img variant="top" src={toyImg} />
                <Card.Body>
                    <Card.Title>{toyName}</Card.Title>
                    <Card.Text className="text-secondary">$ {toyPrice}</Card.Text>
                    <Card.Text className="text-secondary">{name}</Card.Text>
                    <Card.Text className="text-secondary">{email}</Card.Text>
                    <Card.Text className="text-secondary">{status}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button variant="warning" onClick={() => handleStatus(_id)}>Status</Button>
                        <Button variant="danger" onClick={() => handleDelete(_id)}>Cancel Order</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllOrderedToys;