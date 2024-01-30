import { Component } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/images.png";

export class DonorNavigationBar extends Component {
  handleLogout = () => {
    localStorage.removeItem("donor");
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={"/donorHome"}>
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
              <LinkContainer to={"/donorHome"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/donorProfile"}>
                <Nav.Link>View Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/donationForm"}>
                <Nav.Link>Donation form</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/donordonationdetails"}>
                <Nav.Link>Donation Details</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/"}>
                <Nav.Link onClick={this.handleLogout}>Logout </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
