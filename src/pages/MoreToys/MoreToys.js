import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import Toy from "../Home/Toy/Toy";

const MoreToys = () => {
  const [toys, setToys] = useState({});
  useEffect(() => {
    fetch("https://toystore-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-5">
        All <span className="text-warning">Toys</span>
      </h2>
      {toys.length > 0 ? (
        <Row xs={1} md={3} className="g-4">
          {toys.map((toy) => (
            <Toy key={toy._id} toy={toy}></Toy>
          ))}
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

export default MoreToys;
