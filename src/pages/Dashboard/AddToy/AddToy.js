import React, { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const AddToy = () => {
  const nameRef = useRef();
  const imgRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleAddToy = (e) => {
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const newToy = { name, img, description, price };

    fetch("https://toystore-server-side.vercel.app/addToys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <Container className="d-flex flex-column align-items-center my-5">
      <h2 className="mb-3 fw-bold">Add A New Toy</h2>
      <Form
        onSubmit={handleAddToy}
        className="d-flex flex-column justify-content-center col-12 col-md-6"
      >
        <Form.Control
          className="mb-2"
          type="text"
          ref={nameRef}
          placeholder="Toy name"
        />
        <Form.Control
          className="mb-2"
          type="text"
          ref={imgRef}
          placeholder="Toy image URL"
        />
        <Form.Control
          className="mb-2"
          type="text"
          ref={descriptionRef}
          placeholder="Description"
        />
        <Form.Control
          className="mb-2"
          type="number"
          ref={priceRef}
          placeholder="Price"
        />
        <Button type="submit" variant="warning py-3">
          Add Toy
        </Button>
      </Form>
      {success && (
        <Alert variant="success" className="mt-3 col-12 col-md-6">
          Add a new toy successfully!
        </Alert>
      )}
    </Container>
  );
};

export default AddToy;
