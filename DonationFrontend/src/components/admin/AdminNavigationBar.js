import { Component } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/images.png";

export class AdminNavigationBar extends Component {
  handleLogout = () => {
    localStorage.removeItem("admin");
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={"/adminDonationAssign"}>
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
              <LinkContainer to={"/adminDonationAssign"}>
                <Nav.Link>Donation Assign</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/adminDonationAlreadyAssign"}>
                <Nav.Link>Assigned Donation Details</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/adminRecipientsList"}>
                <Nav.Link>All Recipient Details</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/adminRecipientVerification"}>
                <Nav.Link>Recipient KYC verification</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/"}>
                <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
