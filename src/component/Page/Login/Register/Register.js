import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import Loading from "../../Share/Loading/Loading";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {
  const [agree,setAgree] =useState(false)
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
 
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate=useNavigate();
  let errorElement;

  const  navigateRegister =()=>{
    navigate('/register')
  }
  if(user){
    navigate('/home')
  }
  if(loading || updating ){
    return <Loading></Loading>
  }
  if(userError || sending || updateError){
    errorElement=<p className="text-danger" >Error: {userError?.message} {verificationError?.message} {updateError?.message}</p>
    
  }


  const handleRegister= async event =>{
     event.preventDefault()
     const name = event.target.name.value;
     const email=event.target.email.value;
     const password = event.target.password.value;
     await createUserWithEmailAndPassword(email,password);
     if(email){
      await sendEmailVerification();
      alert('Sent email');
      await updateProfile({ displayName:name});
      alert('Updated profile');
     }
      
  }



  return (
    <div className="mx-auto w-50 mt-5">
      <h2 className="text-center mb-5" style={{color:'#18BA60'}} >Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"  name="name" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email"   name="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" name="password"  placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className={`ps-2 ${agree ? '':"text-danger"}`} onClick={()=> setAgree(!agree)} name="terms" type="checkbox" label="Accept Finance Terms & Conditions" />
        </Form.Group>
        {
          errorElement
        }
        <p> <span className="text-primary">Already Have a Account?</span> <Link to="/login" className='pe-auto text-decoration-none f-bold'  style={{color:'#18BA60',fontSize:'20px',marginLeft:'10px'}}>Please Login <FaAngleDoubleRight/> </Link> </p>
        <Button
         className="btn btn-two w-50 mx-auto d-block" onClick={navigateRegister} type="submit">
          Submit
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
      
    </div>
  );
};

export default Register;
