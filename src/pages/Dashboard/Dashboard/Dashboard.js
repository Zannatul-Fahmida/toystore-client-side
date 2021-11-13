import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AllOrders from '../AllOrders/AllOrders';
import AddToy from '../AddToy/AddToy';
import ManageToys from '../ManageToys/ManageToys';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    const { logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mx-0 my-3">
                <Col sm={12} md={3}>
                    <Nav variant="pills" className="flex-column">
                        {!admin && <>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="first" to={`${url}/pay`}>Pay</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="second" to={`${url}/myOrders`}>My Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="third" to={`${url}/review`}>Review</Nav.Link>
                            </Nav.Item>
                        </>}
                        {admin && <>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="first" to={`${url}/allOrders`}>Manage All Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="sixth" to={`${url}/addToy`}>Add A Toy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="seventh" to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="eighth" to={`${url}/manageToys`}>Manage Toys</Nav.Link>
                            </Nav.Item>
                        </>}
                        <Nav.Item>
                            <Nav.Link onClick={logOut} eventKey="fourth">Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={12} md={9}>
                    <Switch>
                        <Route exact path={path}>
                            <h3>Dashboard</h3>
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route exact path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <AddReview></AddReview>
                        </Route>
                        <AdminRoute exact path={`${path}/allOrders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/addToy`}>
                            <AddToy></AddToy>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageToys`}>
                            <ManageToys></ManageToys>
                        </AdminRoute>
                    </Switch>
                </Col>
            </Row>
        </Tab.Container >
    );
};

export default Dashboard;