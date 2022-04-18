import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../Share/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, logInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  let errorElement;
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (logInError || resetError) {
    errorElement = (
      <p className="text-danger">
        Error: {logInError?.message} {resetError?.message}
      </p>
    );
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleReset = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
     if(email){
      toast('Send Email')
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
        <SocialLogin></SocialLogin>
        <ToastContainer/>
      </Form>
    </div>
  );
};

export default Login;
