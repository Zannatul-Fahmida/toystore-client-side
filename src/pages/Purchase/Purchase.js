import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Image, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { toyId } = useParams();
    const { user } = useAuth();
    const [toy, setToy] = useState([]);
    // const [booking, setBooking] = useState([]);
    // const nameRef = useRef();
    // const emailRef = useRef();
    useEffect(() => {
        fetch(`https://frozen-hollows-26442.herokuapp.com/toys/${toyId}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
                // setBooking(data)
            })
    }, [toyId]);
    const handleFormSubmit = e => {
        e.preventDefault();
    }
    const handleBooking = booking => {
        // const status = 'Pending';
        // const tourId= booking._id;
        // const tourName= booking.name;
        // const tourImg= booking.img;
        // const tourPrice= booking.price;
        // const tourShortDescription= booking.short_description;
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        // const data = { tourId, tourName, tourImg, tourPrice, tourShortDescription, name, email, status };
        // fetch(`https://limitless-brook-90009.herokuapp.com/addBooking`, {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.insertedId) {
        //             alert('Booked');
        //         }
        //     });
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
                    <Form.Control type="text" className="mb-3" placeholder="Full Name" defaultValue={user?.displayName} />
                    <Form.Control type="email" className="mb-3" placeholder="email" defaultValue={user?.email} />
                    <Form.Control as="textarea" className="mb-3" rows={3} placeholder="Address" />
                    <Form.Control type="number" className="mb-3" placeholder="Phone Number" />
                    <Button variant="warning">Order Now</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Purchase;