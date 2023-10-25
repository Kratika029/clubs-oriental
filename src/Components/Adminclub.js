import React, { useState, useEffect } from "react";
import { storage, auth, db } from "../FirebaseConfigs/FirebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import HomeHeader from './HomeHeader';
import Events from './Events';
import './homeheader&footer.css';
import './Adminclub.css';
import AllEvents from './AllEvents';
// import { getDownloadURL } from "firebase/storage";
const Adminclub=()=> {
    const[eventName, setEventName] = useState("");
    const[clubName, setClubName] = useState("");
    const[description, setDescription] = useState("");
    const[startDate, setStartDate] = useState("");
    const[timing, setTiming] = useState("");
    const[venue, setVenue] = useState("");
    const[image, setImage] = useState("");

    const[imageError, setImageError] = useState("");
    const[successMsg, setSuccessMsg] = useState("");
    const[uploadError, setUploaderror] = useState("");

    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']
    const handleImage = (e) => {
        e.preventDefault();
        let selectedfile = e.target.files[0];
        if(selectedfile){
            if (selectedfile && types.includes(selectedfile.type)){
                setImage(selectedfile);
                setImageError('');
            }
        }else{
            setImage(null);
            setImageError('pleade select a valid image file type');
        }
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        const storageRef = ref(storage, `clubss-images${clubName.toUpperCase()}/${Date.now()}`)

        uploadBytes(storageRef, image)
        .then(()=>{
            getDownloadURL(storageRef).then((url) => {
                addDoc(collection(db, `clubs-${clubName.toUpperCase()}`),{
                    eventName,
                    clubName,
                    description,
                    startDate,
                    timing,
                    venue,
                    image : url,
                })
            })
        })
    }

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
  return (
    <div>
        <HomeHeader/>
        
        {loggeduser && loggeduser[0].Email == "kratikadubey40@gmail.com" ? 
        <div className="admincontent">
          <div className="admin-events">
            <Events/>
          </div>
        <div className="admin-form">
            <form onSubmit={handleSubmit}>
                <h3>Create Announcements</h3>
                {successMsg && <div className ="success-msg">{successMsg}</div>}
                {uploadError && <div className ="upload-error">{uploadError}</div>}

                <label>Event Name</label>
                <input type = "text" onChange = {(e)=>{setEventName(e.target.value)}}/>

                <label>Club Name</label>
                <input type = "text" onChange = {(e)=>{setClubName(e.target.value)}}/>

                <label>Event Description</label>
                <input type = "text" onChange = {(e)=>{setDescription(e.target.value)}}/>

                <label>Date</label>
                <input type = "text" onChange = {(e)=>{setStartDate(e.target.value)}}/>

                <label>Timing</label>
                <input type = "text" onChange = {(e)=>{setTiming(e.target.value)}}/>

                <label>Venue</label>
                <input type = "text" onChange = {(e)=>{setVenue(e.target.value)}}/>

                <label>Image</label>
                <input type = "file" onChange = {handleImage}/>
                {imageError && <div className ="img-error">{imageError}</div>}
                  <br/>
                <button type = 'submit'> Submit</button>
            </form>
        </div> 
        </div>
        : <div>
          <Events/>
            {/* <AllEvents type={'coding'}/>
        <AllEvents type={'photography'}/>
        <AllEvents type={'Literary'}/>
        <AllEvents type={'Hacking'}/>
        <AllEvents type={'web_development'}/>
        <AllEvents type={'theatre_and_arts'}/>
        <AllEvents type={'media_and_publications'}/> */}
          </div>}
    </div>
  )
}

export default Adminclub