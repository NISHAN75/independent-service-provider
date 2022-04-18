
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Share/Loading/Loading';


const SocialLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const navigate=useNavigate();
  const location =useLocation();
  let from = location.state?.from?.pathname || "/";


  if(user){
    navigate(from, { replace: true });
  }
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className='mt-5'>
       <Button onClick={()=> signInWithGoogle()} className='btn btn-two w-50 mx-auto d-block'>Sign in Google</Button>
    </div>
  );
};

export default SocialLogin;