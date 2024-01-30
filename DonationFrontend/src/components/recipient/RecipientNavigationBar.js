import { Component } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/images.png";

export function RecipientNavigationBar(props) {
  const handleLogout = () => {
    localStorage.removeItem("recipient");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/recipientHome"}>
              <Nav.Link>
                <Image
                  src={logo}
                  alt="CharityXchange"
                  style={{
                    width: "60px",
                    height: "60px",
                    marginRight: "10px",
                  }}
                  className="d-inline-block align-top"
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/recipientHome"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/recipientProfile"}>
              <Nav.Link>View Profile</Nav.Link>
            </LinkContainer>

            {(() => {
              if (props.status) {
                return (
                  <>
                    <LinkContainer to={"/recipientRequestForm"}>
                      <Nav.Link>Request Form</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/recipientViewRequestDetails"}>
                      <Nav.Link>View Request Details</Nav.Link>
                    </LinkContainer>
                  </>
                );
              } else {
              }
            })()}

            <LinkContainer to={"/"}>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
