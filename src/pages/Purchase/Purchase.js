import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, Image, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { toyId } = useParams();
    const { user } = useAuth();
    const [toy, setToy] = useState([]);
    const [order, setOrder] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();
    useEffect(() => {
        fetch(`https://frozen-hollows-26442.herokuapp.com/toys/${toyId}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
                setOrder(data)
            })
    }, [toyId]);
    const handleFormSubmit = e => {
        e.preventDefault();
    }
    const handleOrder = order => {
        const status = 'Pending';
        const toyId= order._id;
        const toyName= order.name;
        const toyImg= order.img;
        const toyPrice= order.price;
        const toyDescription= order.description;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const data = { toyId, toyName, toyImg, toyPrice, toyDescription, name, email, status };
        fetch(`https://frozen-hollows-26442.herokuapp.com/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Order complete');
                }
            });
    };
    return (
        <Container className="my-4">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-5 col-md-12">
                <div className="col-md-4">
                    <Image src={toy.img} fluid />
                </div>
                <div className="col-md-4 text-start ms-3">
                    <h2>{toy.name}</h2>
                    <p>{toy.description}</p>
                    <h4>$ {toy.price}</h4>
                </div>
            </div>
            <div className="col-md-12">
                <Form onSubmit={handleFormSubmit} className="d-flex flex-column justify-content-center align-items-center h-100 col-md-6 mx-auto">
                    <h2 className="mb-3">Purchase Information</h2>
                    <Form.Control type="text" className="mb-3" ref={nameRef} placeholder="Full Name" defaultValue={user?.displayName} />
                    <Form.Control type="email" className="mb-3" ref={emailRef} placeholder="email" defaultValue={user?.email} />
                    <Form.Control as="textarea" className="mb-3" rows={3} placeholder="Address" />
                    <Form.Control type="number" className="mb-3" placeholder="Phone Number" />
                    <Button variant="warning" onClick={() => handleOrder(order)}>Order Now</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Purchase;