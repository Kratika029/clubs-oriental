import React, {useEffect} from 'react'
import './Adminclub.css';
const EventContainer = (eventss) => {
  // const {eventss} = props;
  // useEffect(()=>{
  //     // console.log("container");
  //     // console.log(eventss);
  // },[]);
  return (
    <div>
        
        <div className="event-card">
          {/* <div className="event-card-image"> */}
            <img src={eventss.eventss.image}/>
          {/* </div> */}
          <div className = "event-card-desc">
            <h1>{eventss.eventss.eventName}</h1>
            <p><b>Club : </b>{eventss.eventss.clubName}</p>

            <p><b>Date : </b>{eventss.eventss.startDate}</p>
            <p><b>Timing : </b>{eventss.eventss.timing}</p>
            <p><b>Venue : </b>{eventss.eventss.venue}</p>
            <h3>Description : </h3>
            <p>{eventss.eventss.description}</p>
            </div>
        </div>
        
    </div>
  )
}

export default EventContainer