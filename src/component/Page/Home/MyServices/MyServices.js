import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MyService from "../MyService/MyService";

const MyServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="services-area mb-5">
      <Container>
        <Row className="g-4">
          <h1 className="text-center mt-5 mb-5">Our Service</h1>
          {services.map((service) => (
            <MyService service={service} key={service.id}></MyService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyServices;
