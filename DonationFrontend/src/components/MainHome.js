import { Container, Row, Card, Col, Image } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import {
  fetchClothesPercentage,
  fetchRawFoodPercentage,
  fetchStationaryPercentage,
} from "../services/RecipientApiService";

import { useEffect, useState } from "react";


export function MainHome() {
  const [rawFood, setRawFood] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [stationary, setStationary] = useState(0);

  const fetchAllQuantities = async () => {
    let response = await fetchRawFoodPercentage();
    setRawFood(response.data);

    response = await fetchClothesPercentage();
    setClothes(response.data);

    response = await fetchStationaryPercentage();
    setStationary(response.data);
  };

  useEffect(() => {
    fetchAllQuantities();
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Container className="bg-light text-center mt-0 p-3 rounded">
        <h1 className="display-4 text-primary mb-4 font-weight-bold">
          ApnaGhar: Orphanage Donation System
        </h1>
        <p className="lead" >
          Our mission is to help you make a positive impact on the world by
          enabling you to easily donate to causes you care about.
        </p>
       {/* <img src="https://www.udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg"></img> */}
          
        
       <Container className="mt-4">
          <Row>
            <Col lg={4}>
              <Card className="border-0 shadow-lg rounded-lg">
                <div className="p-3 bg-primary text-white">
                  <h3 className="text-center mb-0">Food Needs</h3>
                </div>
                <Card.Body className="text-center">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <CircularProgressbar value={rawFood} strokeWidth={8}>
                      <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong className="text-info">80%</strong> Clothing
                      </div>
                    </CircularProgressbar>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      {rawFood}% of food needs met
                    </div>
                  </div>
                  <Card.Text className="mt-4">
                    Are you ware that 194 million individuals residing in India
                    are malnourished and encounter difficulties in obtaining
                    healthy and nutritious food? By donating, you can make a
                    positive impact on their lives. Your contribution can assist
                    us eliminating hunger and ensuring that no one goes to bed
                    without a meal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="border-0 shadow-lg rounded-lg">
                <div className="p-3 bg-primary text-white">
                  <h3 className="text-center mb-0">Stationary Needs</h3>
                </div>
                <Card.Body className="text-center">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <CircularProgressbar value={stationary} strokeWidth={8}>
                      <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong className="text-info">80%</strong> Stationary
                      </div>
                    </CircularProgressbar>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      {stationary}% of stationary needs met
                    </div>
                  </div>
                  <Card.Text className="mt-4">
                    A large number of children and adults do not have access to
                    basic stationery items such as notebooks, pens, and pencils.
                    Your donation can help in providing access to education and
                    learning opportunities for those in need. Let's come
                    together to create a brighter future for all.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="border-0 shadow-lg rounded-lg">
                <div className="p-3 bg-primary text-white">
                  <h3 className="text-center mb-0">Clothing Needs</h3>
                </div>
                <Card.Body className="text-center">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <CircularProgressbar value={clothes} strokeWidth={8}>
                      <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong className="text-info">80%</strong> Clothing
                      </div>
                    </CircularProgressbar>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      {clothes}% of clothing needs met
                    </div>
                  </div>
                  <Card.Text className="mt-4">
                    Did you know that approximately 40% of India's population
                    lives below the poverty line? Many of these individuals lack
                    access to basic necessities like warm clothing. Your
                    generous donation to support our cause for clothing drive
                    can help provide essential clothing items to those in need.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Container>
            <Link
              to="/login"
              className="btn btn-primary rounded-pill bg-gradient my-4"
            >
              Donate Now
            </Link>
          </Container>
        </Container>
      </Container>

      <div
        className="container-fluid px-0"
        style={{ backgroundColor: "#f8f9fa" }}
      ></div>
    </>
  );
}
