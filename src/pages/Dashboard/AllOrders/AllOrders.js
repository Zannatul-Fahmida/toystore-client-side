import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import AllOrderedToys from "../AllOrderedToys/AllOrderedToys";

const AllOrders = () => {
  const [orders, setOrders] = useState({});
  useEffect(() => {
    fetch("https://toystore-server-side.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <Container className="my-4 text-center">
      <h2 className="mb-4 fw-bold">
        All <span className="text-warning">Orders</span>
      </h2>
      {orders.length > 0 ? (
        <Row xs={1} md={3} className="g-4">
          {orders.map((order) => (
            <AllOrderedToys key={order._id} order={order}></AllOrderedToys>
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

export default AllOrders;
