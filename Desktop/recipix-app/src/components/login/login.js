import React, { useState,useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword} from '../../firebase/firebase';


import './LoginForm.css'

const LoginForm = () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()


  // useEffect(() => {
  //   if (loading) return;
  //   if (user) ;
  // }, [user, loading,navigate]);
  const gotToMainPage=()=>{
    logInWithEmailAndPassword(email,password)
    navigate("/mainpage")
  }
  const goToRegisterPage=()=>{
    navigate("/createprofile")
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container'>
      <div style={{height:'10%'}}>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{height:'80%',justifyContent:'center',alignItems:'center',marginTop:'20px'}} >
          <div>
            <input type="email" value={email} onChange={handleEmailChange}placeholder='Email' className='login-input'required/>
            <input type="password" value={password} onChange={handlePasswordChange}placeholder='Password' className='login-input' required/>
            </div>
            <div className='button-container'>
              <div className='button-child'>
                  <button type="Create New Profile" className='button-noborder' onClick={goToRegisterPage}>Create New Profile</button>
              </div>
            </div>
        <div className='button-container'>
            <button type="submit" onClick={gotToMainPage} style={{ width: '90%',color:'white',fontWeight:'bold',fontSize:'20px'}} className='button'>Lets Cook</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
