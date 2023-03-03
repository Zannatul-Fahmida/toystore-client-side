import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ReviewItem from "../ReviewItem/ReviewItem";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://toystore-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-5">Reviews</h2>
      <Row xs={1} md={4} className="g-4">
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review}></ReviewItem>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
