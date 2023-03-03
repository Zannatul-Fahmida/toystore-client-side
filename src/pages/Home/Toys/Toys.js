import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import Toy from "../Toy/Toy";

const Toys = () => {
  const [toys, setToys] = useState({});
  useEffect(() => {
    fetch("https://toystore-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-5">
        Top <span className="text-warning">Toys</span>
      </h2>
      {toys.length > 0 ? (
        <Row xs={1} md={3} className="g-4">
          {toys.map((toy, index) =>
            index >= 0 && index <= 5 ? <Toy key={toy._id} toy={toy}></Toy> : ""
          )}
        </Row>
      ) : (
        <div className="text-center">
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Toys;
