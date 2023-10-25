import React, { useState, useEffect } from "react";
// import Navbar from './Navbar'
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import Homecontent from "./Homecontent";
import { auth, db } from "../FirebaseConfigs/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
const Home = () => {
  
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
  // if (loggedUser){ console.log(loggedUser[0].Email) }

  return (
    <div>
      {/* <Navbar />
       */}
      <HomeHeader />
      <Homecontent />
      <HomeFooter />
    </div>
  );
};

export default Home;
