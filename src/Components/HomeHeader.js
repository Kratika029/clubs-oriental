import React, {useState, useEffect} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { auth } from '../FirebaseConfigs/FirebaseConfig';
import './homeheader&footer.css';
import { storage, auth, db } from "../FirebaseConfigs/FirebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import Profile from './Profile';
// import Page1 from './Page1';
const HomeHeader = () => {
  const navigate = useNavigate();
  function GetCurrentUser() {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
const loggeduser = GetCurrentUser();
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/Login')
    })
  }
  const abc = () =>{
    navigate('/Profile');
    // if(localStorage.getItem('token') === null){
    //   navigate('/Profile');
    // }
    // else{
    //   navigate('/');
    // }
  }
    return (

      <header>
        <div className="header" id="myHeader">
          <nav className="navbar">
            {/* LOGO */}
            <div className="logo"><a href="/">clubs@oriental</a></div>
            {/* NAVIGATION MENU */}
            <ul className="nav-links">
              {/* NAVIGATION MENUS */}
              <div className="menu">
                <li><Link to='/Adminclub'>Home</Link></li>
                <li className="clubs">
                <Link to='/Home'>Clubs</Link>
                  {/* DROPDOWN MENU */}
                  {/* <ul className="dropdown">
                    <li><a href="Coding.html">Coding </a></li>
                    <li><a href="/">Photography</a></li>
                    <li><a href="/">Hacking</a></li>
                    <li><a href="/">Literary</a></li>
                    <li><a href="/">Artificial Intelligence</a></li>
                    <li><a href="/">Machine Learning</a></li>
                    <li><a href="/">Theatre And Arts</a></li>
                    <li><a href="/">Media And Publicaitons</a></li>
                  </ul> */}
                </li>
                <li><a href="http://localhost:3000/posts">Community</a></li>
                {/* <li>Club Announcement</Link></li> */}
                <li><a onClick = {abc}>My Account</a></li>
                {loggeduser?
                  <button className='logout' onClick={handleLogout}>Logout</button>:
                  <Link to="/login"><button className='login' >Login</button></Link>
                }
                {/* <li><a href= {Page1}>My Account</a></li> */}
              </div>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
export default HomeHeader;
// const HomeHeader =()=> {
    
//     return(
//         <header>
  
//         <div class="header" id="myHeader">
//           <nav class="navbar">
//             {/* <!-- LOGO --> */}
//             <div class="logo">clubs@oriental</div>
//             {/* <!-- NAVIGATION MENU --> */}
//             <ul class="nav-links">
              
             
//               {/* <!-- NAVIGATION MENUS --> */}
//               <div class="menu">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li class="clubs">
//                   <a href="#">clubs</a>
//                   {/* <!-- DROPDOWN MENU --> */}
//                   <ul class="dropdown">
//                     <li><a href="index.html">Dropdown 1 </a></li>
//                     <li><a href="index.html">Dropdown 2</a></li>
//                     <li><a href="index.html">Dropdown 2</a></li>
//                     <li><a href="index.html">Dropdown 3</a></li>
//                     <li><a href="index.html">Dropdown 4</a></li>
//                   </ul>
//                 </li>
//                 <li><a href="#">Pricing</a></li>
//                 <li><a href="#">Contact</a></li>
//               </div>
//             </ul>
//           </nav>
       
            
//         </div>
//       </header>
//     )
// }
// export default HomeHeader;