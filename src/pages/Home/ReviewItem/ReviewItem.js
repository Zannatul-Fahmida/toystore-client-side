import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const ReviewItem = (props) => {
    const { name, review, rating, img } = props.review;
    console.log(name);
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-start">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-secondary mb-0">{review}</Card.Text>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={30}
                        edit={false}
                        activeColor="#ffd700"
                    />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ReviewItem;