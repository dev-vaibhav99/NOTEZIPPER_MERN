import React from "react";
import {
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Note Zipper </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                {/* <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col> */}
              </Row>
            </Form>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="Vaibhav" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  navigate("/");
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
