import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
 
  const auth = getAuth();
  const navigate = useNavigate()

  const handlelogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=> {
      setSuccessMsg('Logged In successfully, YOU will now be redirected to HOME page')
      setEmail('')
      setPassword('')
      setTimeout(() =>{
      setSuccessMsg('');
      //  if(email == 'kratikadubey40@gmail.com'){
      //   navigate('/Userpost');
      //  }
      //  else{
        navigate('/Adminclub');
      //  } 
      },3000);
    }).catch((error) => {
      const errorCode = error.code;
      console.log(error.message);
      if(error.message == 'Firebase: Error (auth/invalid-email).'){setErrorMsg('plz fill all the required fields');}
      if(error.message == 'Firebase: Error (auth/user-not-found).'){setErrorMsg('Email not found');}
      if(error.message == 'Firebase: Error (auth/wrong-password).'){setErrorMsg('Wrong password');}
      setTimeout(() =>{
        setErrorMsg('');
        },3000);
      
  });
  }

  return (
    <div>
      {/* <Navbar /> */}
      <HomeHeader/>
    <div className='login-container'>
           <form className = 'login-form'>
            <h1>LOG IN</h1> 

           {successMsg && <>
           <div className='successMsg'>
            {successMsg}
            </div></>}
            {errorMsg && <>
            <div className='errorMsg'>
            {errorMsg}
            </div></>}
             
              <label>E-Mail</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder= 'Enter email'/>

              <label>Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder= 'Enter password'/>
              
              <button onClick= {handlelogin} >Log In</button>

              <div className='red'>
           <span>Don't have an account?</span>
                <h2><Link to='/Signup'>Register</Link></h2>
                </div>
           </form>
           

      </div>
      <HomeFooter/>
      </div>
  )
}

export default Login