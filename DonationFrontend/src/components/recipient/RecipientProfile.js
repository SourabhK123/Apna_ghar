import { useEffect, useState } from "react";
import { Table, Card, Button, Container, Row, Image, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getRecipientFromServer } from "../../services/RecipientApiService";
import { RecipientNavigationBar } from "./RecipientNavigationBar";

export function RecipientProfile() {
  const [recipientDetails, setRecipientDetails] = useState({});
  const recipientObj = JSON.parse(localStorage.getItem("recipient"));
  const navigate = useNavigate();

  async function fetchRecipientDetails() {
    const response = await getRecipientFromServer(recipientObj.recipientId);
    //console.log(response.data);
    setRecipientDetails(response.data);
  }

  //componentDidMount
  useEffect(() => {
    if (recipientObj == null) {
      navigate("/");
    }
    fetchRecipientDetails();
  }, []);

  return (
    <>
      <RecipientNavigationBar
        status={recipientDetails.kycverified}
      ></RecipientNavigationBar>
       <Container className="mt-1 mb-2">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-5">
            <h1 className="text-center mb-5">User Profile</h1>
            <div className="d-flex justify-content-center align-items-center mb-4">
              <Image src={"https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"} roundedCircle className="mr-3" width={100} height={100} />
            </div>
            <Table responsive striped bordered hover>
              <tbody>
                <tr>
                  <th style={{ width: "30%" }}>Name</th>
                  <td>{recipientDetails.recipientName}</td>
                </tr>
                <tr>
                  <th>Recipient Number</th>
                  <td>{recipientDetails.recipientPhone}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{recipientDetails.recipientEmail}</td>
                </tr>
                <tr>
                  <th>Registration ID</th>
                  <td>{recipientDetails.recipientRegistrationId}</td>
                </tr>
                <tr>
                  <th>Recipient Address</th>
                  <td>{recipientDetails.recipientAddress}</td>
                </tr>
                <tr>
                  <th>Recipient ZIP code</th>
                  <td>{recipientDetails.recipientZipCode}</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center mb-4">
              {/* {recipientDetails.kycverified && <Link to={"/recipientEditProfile"}>Edit Profile</Link>} */}
              {recipientDetails.kycverified && (
                <Link to={"/recipientEditProfile"}>
                  <Button className="mt-3" variant="primary">
                    Edit Profile
                  </Button>
                </Link>

              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}
