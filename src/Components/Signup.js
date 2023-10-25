import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../FirebaseConfigs/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Signup.css'
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';

const Signup = () => {

   const [name, setName] = useState("");
   const [roll, setRoll] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [mobileNo, setMobileNo] = useState("");

   const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) =>{
         
          const user = userCredential.user;
          console.log(user);

          addDoc(collection(db,"users"),{
            Name: name, Eno: roll, Email: email, password: password, uid: user.uid, Mob: mobileNo
          }).then(()=> {
            setSuccessMsg('New user added successfully, YOU will now be redirected to login page')
            setEmail('')
            setName('')
            setRoll('')
            setMobileNo('')
            setPassword('')
            setTimeout(() =>{
              setSuccessMsg('');
              
              navigate('/login');

            },3000);
          }).catch((error) => {setErrorMsg(error.message)});
      }).catch((error) => {
      console.log(error.message);

        if(error.message == 'Firebase: Error (auth/invalid-email).')
        {
          setErrorMsg('plz fill all the required fields')
        }
        if(error.message == 'Firebase: Error (auth/email-already-in-use).')
        {
          setErrorMsg('User already exists')
        }
        if(error.message == 'Firebase: Error (auth/missing-password).')
        {
          setErrorMsg('please create a password')
        }
        
        setTimeout(() =>{
          setErrorMsg('');
          },3000);

      });
    } 

  return (
    <div>
      {/* <Navbar/> */}
      <HomeHeader/>
      <div className='signup-container'>
           <form className = 'signup-form' onSubmit={handleSubmit}>
            <h1>Create Account</h1> 

           {successMsg && <>
           <div className='successMsg'>
            {successMsg}
            </div></>}
            {errorMsg && <>
            <div className='errorMsg'>
            {errorMsg}
            </div></>}
             
            <label>Name</label>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder='enter your name'></input>

              <label>Enroll</label>
              <input type="text" onChange={(e) => setRoll(e.target.value)} placeholder= 'Enter enrolment number' required />

              <label>E-Mail</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder= 'Enter email'/>

              <label>Mobile No.</label>
              <input type="tel" onChange={(e) => setMobileNo(e.target.value)} placeholder= 'Enter Mobile No.'/>


              <label>Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder= 'Enter password'/>
              

              <button>Sign Up</button>
              <div>
                <span>Already have an account?</span>
                <h2><Link to='/Login'>Login</Link></h2>
              </div>
           </form>

      </div>
             <HomeFooter/>

    </div>


  )
}

export default Signup