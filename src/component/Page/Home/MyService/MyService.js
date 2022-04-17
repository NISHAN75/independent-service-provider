import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { BsFillHeartFill } from "react-icons/bs";

const MyService = ({ service }) => {
  const { name, introduction, price,img } = service;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="card-area shadow-lg border-rounded">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body>
          <Card.Title><BsFillHeartFill/>{name}</Card.Title>
          <Card.Text>
            {introduction}
            <pg>price: ${price}</pg>
          </Card.Text>
          <Button variant="primary">Check out</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyService;
