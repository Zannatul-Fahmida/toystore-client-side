import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";

const AllToys = (props) => {
  const { _id, name, img, price, description } = props.toy;
  const [toys, setToys] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://toystore-server-side.vercel.app/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            window.location.reload();
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };
  return (
    <Col>
      <Card className="shadow h-100">
        <Card.Img variant="top" src={img} height="250" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-secondary">$ {price}</Card.Text>
          <Card.Text className="text-secondary">{description}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(_id)}>
            Delete Toy
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllToys;
