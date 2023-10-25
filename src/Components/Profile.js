import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import "./profile.css";
import { auth, db } from "../FirebaseConfigs/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
// import profile './profile-icon';
const Profile = () => {
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
  const loggedUser = GetCurrentUser();

  return (
    <div>
      <HomeHeader />

      
      {loggedUser ? <div className="user-profile">
      <div>
        <div class="sidenav">
          <div class="profile">
            <img
              src="https://w7.pngwing.com/pngs/1/964/png-transparent-user-profile-computer-icons-login-profile-icon-police-officer-black-avatar-thumbnail.png"
              alt=""
              width="100"
              height="100"
            />

            <div class="name">
                {loggedUser[0].Name}
            </div>
            <div class="job">Description</div>
          </div>
        </div>
      </div>
      {/* <!-- End --> */}

      <div class="main">
        <h2>IDENTITY</h2>

        <div class="card">
          <div class="card-body">
            <i class="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                <tr>
                  <td>Roll No.</td>
                  <td>:</td>
                  <td>{loggedUser[0].Eno}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{loggedUser[0].Email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>{loggedUser[0].Mob}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Bhopal, Madhya Pradesh</td>
                </tr>
                
                
              </tbody>
            </table>
          </div>
        </div>
        <h2>CLUBS</h2>
        <div class="card">
          <div class="card-body">
            <div class="clubs">Photography, Coding, Machine Learning</div>
          </div>
        </div>
        <h2>SOCIAL MEDIA</h2>
        <div class="card">
          <div class="card-body">
            <div class="social-media">
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div> : 
      <div className="else">
        You are not logged In
    </div>}
      
      <HomeFooter />
    </div>
  );
};

export default Profile;
