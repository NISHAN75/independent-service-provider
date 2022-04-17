import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyService = ({ service }) => {
  const { name, introduction, price,img } = service;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="card-area shadow-lg border-rounded">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body>
          <Card.Title><BsFillHeartFill style={{ color: "#18BA60", fontSize: "25px", marginRight: "15px" }}/>{name}</Card.Title>
          <Card.Text> 
            {introduction}
          </Card.Text>
          <p>price: ${price}</p>
         <Link to='/checkout'><Button className="btn btn-one">Check out</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyService;
