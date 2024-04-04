import React,{useState,useEffect} from "react";
import { useNavigate} from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth,registerWithEmailAndPassword} from '../../firebase/firebase'
import './createprofile.css'


const UserProfile=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const gotToMainPage=async()=>{
        registerWithEmailAndPassword(name, email, password);
        navigate("/mainpage",{ state: { name } })
      }
    //   useEffect(() => {
    //     if (loading) return;
    //     if (user) ;
    //   }, [user, loading,navigate,name]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setPassword('');
      };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }
    
    
return(
    <div className="container">
        <div style={{height:'10%',width:'100%',}}>
            <h2>USER REGISTRATION</h2>
        </div>
        <form  onSubmit={handleSubmit}>
            <div className="element-container">
                <div>
                    <input type="name" value={name} onChange={handleNameChange}placeholder='User Name' className='register-input'required/>
                    <input type="email" value={email} onChange={handleEmailChange}placeholder='Email' className='register-input'required/>
                    <input type="password" value={password} onChange={handlePasswordChange}placeholder='Password' className='register-input'required/>
                    {/* <input type="text" value={email} onChange={handleEmailChange}placeholder='Do you have any preferences' className='register-input'required/> */}
                </div>
                <div className="button-container">
                <button type="submit" onClick={gotToMainPage} style={{ width: '90%',color:'white',fontWeight:'bold',fontSize:'20px'}} className='button'>Lets Cook</button>
                </div>
            </div>
        </form>
    </div>
)


}
export default UserProfile;