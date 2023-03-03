import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import OrderedToys from "../OrderedToys/OrderedToys";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://toystore-server-side.vercel.app/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);
  return (
    <Container className="my-4 text-center">
      <h2 className="mb-4 fw-bold">
        My <span className="text-warning">Orders</span>
      </h2>
      <Row xs={1} md={3} className="g-4">
        {myOrders.map((order) => (
          <OrderedToys key={order._id} order={order}></OrderedToys>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;
