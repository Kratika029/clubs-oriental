import React, {useState, useEffect} from 'react'
import {collection, query, onSnapshot, getDocs} from "firebase/firestore";
import {db} from "../FirebaseConfigs/FirebaseConfig";
import EventContainer from './EventContainer';
import HomeHeader from './HomeHeader';
import './Adminclub.css';
const AllEvents = (props) => {
    const {type} = props;
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        const getEvents = () =>{
            const eventsArray =[];
            // const {type} = props;
            const path = `clubs-${type.toUpperCase()}`;
            
            // const path = `clubs-CODING` ;
            console.log("type", path);
            // console.log(props.name);

        getDocs(collection(db, path)).then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                eventsArray.push({...doc.data(), id:doc.id})
            })
            setEvents(eventsArray)
            
            console.log(events);
        }).catch((error)=>{
            console.log(error.message);
        })
    }
    getEvents();
    },[])
  return (
    <div>
        {/* <HomeHeader/> */}
        {/* <h3>AllEvents</h3> */}

        <div>
            {/* <EventContainer/> */}
            <br/>
            <div className="event-cards-grid">
             {events.map((eventss)=>{
                return <EventContainer key={eventss.id} eventss={eventss}></EventContainer>
            })}
            </div>
        </div>
    </div>
  )
}

export default AllEvents