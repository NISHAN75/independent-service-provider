import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MyService = ({ service }) => {
  const { id, name, introduction, price, img } = service;
  const navigate = useNavigate();

  const navigateCheckOut = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="card-area shadow-lg border-rounded">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body>
          <Card.Title>
            <BsFillHeartFill
              style={{
                color: "#18BA60",
                fontSize: "25px",
                marginRight: "15px",
              }}
            />
            {name}
          </Card.Title>
          <Card.Text>{introduction}</Card.Text>
          <p>price: ${price}</p>
          <Button onClick={() => navigateCheckOut(id)} className="btn btn-one">
            Check out
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyService;
