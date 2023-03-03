import React, { useState } from "react";
import { FloatingLabel, Button, Form, Alert } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://toystore-server-side.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="d-flex flex-column align-items-center my-5">
      <h2 className="mb-3 fw-bold">Make An Admin</h2>
      <Form
        onSubmit={handleAdminSubmit}
        className="w-100 d-flex flex-column align-items-center"
      >
        <FloatingLabel
          onBlur={handleOnBlur}
          controlId="floatingInput"
          label="Email address"
          className="mb-3 col-12 col-md-6"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <Button
          variant="warning"
          type="submit"
          className="col-12 col-md-6 py-3"
        >
          Make Admin
        </Button>
      </Form>
      {success && (
        <Alert variant="success" className="mt-3 col-12 col-md-6">
          Made admin successfully!
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
