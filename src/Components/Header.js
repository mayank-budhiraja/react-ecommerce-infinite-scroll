import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav, FormControl, Form } from 'react-bootstrap';
import logo from '../Assets/logo.svg';
import account from '../Assets/user.svg'; 
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
    return(
    <div>
        <Navbar sticky="top" bg="white" expand="lg" >
        <Navbar.Brand href="#home">
            <img
            src={logo}
            width="80"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Men</Nav.Link>
                <Nav.Link href="#link">Women</Nav.Link>
                <Nav.Link href="#home">Kids</Nav.Link>
                <Nav.Link href="#link">Home & Living</Nav.Link>
                <Nav.Link href="#link">Essentials</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 bootstrap-overrides" />
            </Form>
            <Row>
            <Navbar.Brand className="account-style" href="#home">
                <Row className="justify-content-center">
                <img
                src={account}
                width="20"
                height="20"
                className="d-inline-block align-top"
                alt="React Bootstrap logo "
                />
                </Row>
                <Row>
                <h5>Profile</h5>
                </Row>
            </Navbar.Brand>
            <Navbar.Brand className="account-style" href="#home">
                <Row className="justify-content-center">
                <img
                src={account}
                width="20"
                height="20"
                className="d-inline-block align-top"
                alt="React Bootstrap logo "
                />
                </Row>
                <Row>
                <h5>Wishlist</h5>
                </Row>
            </Navbar.Brand>
            <Navbar.Brand className="account-style" href="#home">
                <Row className="justify-content-center">
                <img
                src={account}
                width="20"
                height="20"
                className="d-inline-block align-top"
                alt="React Bootstrap logo "
                />
                </Row>
                <Row className="justify-content-center">
                <h5>Bag</h5>
                </Row>
            </Navbar.Brand>
            </Row>
        </Navbar.Collapse>
        </Navbar>
        <Container fluid>
            <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Clothing</Breadcrumb.Item>
                        <Breadcrumb.Item active>Men Clothing</Breadcrumb.Item>
                    </Breadcrumb>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col>
                    <h5> Men Tshirts - 1000 </h5>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
export default Header