import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const nameRef = useRef();
  const imgRef = useRef();
  const reviewRef = useRef();
  const ratingRef = useRef();
  const handleAddReview = (e) => {
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const review = reviewRef.current.value;
    const rating = ratingRef.current.value;
    const newReview = { name, img, review, rating };
    fetch("https://toystore-server-side.vercel.app/addReviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added a review");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <Container className="d-flex flex-column align-items-center my-5 my-md-0">
      <h2 className="mb-3">Add A Review</h2>
      <Form
        onSubmit={handleAddReview}
        className="d-flex flex-column justify-content-center col-md-6 col-12"
      >
        <Form.Control
          className="mb-2"
          type="text"
          ref={nameRef}
          placeholder="Your name"
          defaultValue={user?.displayName}
        />
        <Form.Control
          className="mb-2"
          type="text"
          ref={imgRef}
          placeholder="Review item image URL"
        />
        <Form.Control
          as="textarea"
          className="mb-2"
          ref={reviewRef}
          placeholder="review"
        />
        <Form.Control
          className="mb-2"
          type="number"
          ref={ratingRef}
          placeholder="Rating(0 to 5)"
          min="0"
          max="5"
        />
        <Button type="submit" variant="warning">
          Add Review
        </Button>
      </Form>
    </Container>
  );
};

export default AddReview;
