import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../hooks/useAuth";

const Reviews = (props) => {
  const { admin } = useAuth();
  const { _id, name, review, rating, img } = props.review;
  const [reviews, setReviews] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://toystore-server-side.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            window.location.reload();
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
    console.log(proceed);
  };
  return (
    <Col>
      <Card className="shadow h-100">
        <Card.Img variant="top" src={img} height="200" />
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
          {admin && (
            <Button variant="danger" onClick={() => handleDelete(_id)}>
              Delete Review
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Reviews;
