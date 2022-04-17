import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../../firebase.init";
import Loading from "../../Share/Loadding/Loading";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, logInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  let errorElement;
  if(user){
    navigate('/home')
  }
  if(loading ||  sending){
    return <Loading></Loading>
  }
  if(logInError || resetError){
    errorElement=<p>Error: {logInError?.message} {resetError?.message}</p>
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
  };

  return (
    <div className="mx-auto w-50 mt-5">
      <h2 className="text-center mb-5" style={{ color: "#18BA60" }}>
        Please Login
      </h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
        <p>
          <span className="text-primary">New User?</span>{" "}
          <Link
            to="/register"
            className="pe-auto text-decoration-none f-bold"
            style={{ color: "#18BA60", fontSize: "20px", marginLeft: "10px" }}
          >
            Please Register <FaAngleDoubleRight />{" "}
          </Link>{" "}
        </p>
        <p>
          {" "}
          <span className="text-primary">Forget Your Password?</span>{" "}
          <button
            onClick={handleReset}
            className="pe-auto text-decoration-none btn"
            style={{ color: "#18BA60", fontSize: "20px", marginLeft: "10px" }}
          >
            Reset Your Password <FaAngleDoubleRight />
          </button>{" "}
        </p>
        <Button className="btn btn-two w-50 mx-auto d-block" type="submit">
          Login
        </Button>
        <ToastContainer></ToastContainer>
      </Form>
    </div>
  );
};

export default Login;
