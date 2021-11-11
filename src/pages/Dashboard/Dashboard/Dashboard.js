import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const Dashboard = () => {
    const { logOut } = useAuth();
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mx-0 my-3">
                <Col sm={12} md={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Pay</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">My Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Review</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={logOut} eventKey="fourth">Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={12} md={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Pay></Pay>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <MyOrders></MyOrders>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <AddReview></AddReview>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Dashboard;