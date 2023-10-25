import React from 'react';
import './Adminclub.css';
import { Link } from 'react-router-dom';
// import HomeHeader from './HomeHeader';
import AllEvents from './AllEvents';
const Events = () => {
    // let type = "coding";
  return (
    <div>
        {/* <HomeHeader/> */}
        <div className = "differ-clubs">
        <Link to="/coding"><button>Coding</button></Link>
            <a href="/photography"><button>Photography</button></a>
            <a href="/literary"><button>Literary</button></a>
            <a href="/Hacking"><button>Hacking</button></a>
            <a href="/web_development"><button>Web Development</button></a>
            <a href="/theatre_and_arts"><button>Theatre and Arts</button></a>
            <a href="/media_and_publications"><button>Media and Publications</button></a>
            <a href="/ai"><button>Artificial Intelligence</button></a>


        </div>
        <div>
        <AllEvents type={'coding'}/>
        <AllEvents type={'photography'}/>
        <AllEvents type={'Literary'}/>
        <AllEvents type={'Hacking'}/>
        <AllEvents type={'web_development'}/>
        <AllEvents type={'theatre_and_arts'}/>
        <AllEvents type={'media_and_publications'}/>
        <AllEvents type={'ai'}/>
        </div>
        {/* <AllEvents type={type}/> */}
    </div>

  )
}

export default Events