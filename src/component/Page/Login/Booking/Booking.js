import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate=useNavigate()
  const alterMessage =()=>{
    alert('Thanks For Your Booking');
     navigate('/home')
  }
  return (
    <div className="mx-auto w-50 mt-5">
      <h2 className="text-center mb-5" style={{ color: "#18BA60" }}>Confirm Your Identify</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Your Phone" />
        </Form.Group>
        <Button  onClick={alterMessage} className="btn btn-two w-50 mx-auto d-block" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Booking;
