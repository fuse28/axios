import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [details, setDetails] = useState([]);
  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setDetails(data.results[0]);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <Container fluid className="p-4 bg-primary app">
        <Row>
          <Col md={4} className="offset-ms-4 mt-4">
            <Card>
              <CardBody className="text-center">
                <img
                  alt="thumbnail"
                  height="150px"
                  width="150px"
                  className="rounded-circle img-thumbnail border-danger"
                  src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                  <h1>
                    <span className="pr-1">{details.name?.title}</span>
                    <span className="ml-9">{details.name?.first}</span>
                    <span className="ml-25">{details.name?.last}</span>
                  </h1>
                </CardTitle>
                <CardText>
                  <FaMapMarkedAlt />
                  {details.location?.country}
                  <p>{details?.phone}</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
