import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Pgfof from './Components/pgfof';
import Profile from './Components/Profile';
import Userpost from './Components/Userpost';
import Adminclub from './Components/Adminclub';
import AllEvents from './Components/AllEvents';
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css";
// import 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Adminclub />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/Userpost" element={<Userpost />} />
      <Route exact path="/Adminclub" element={<Adminclub />} />

      <Route exact path="/coding" element={<AllEvents type={'coding'} />} />
      <Route exact path="/ai" element={<AllEvents type={'ai'} />} />
      <Route exact path="/photography" element={<AllEvents type={'photography'} />} />
      <Route exact path="/literary" element={<AllEvents type={'literary'} />} />
      <Route exact path="/web_development" element={<AllEvents type={'webdevelopment'} />} />
      <Route exact path="/Hacking" element={<AllEvents type={'hacking'} />} />
      <Route exact path="/Theatre_and_arts" element={<AllEvents type={'theatre_and_arts'} />} />
      <Route exact path="/media_and_publications" element={<AllEvents type={'media_and_publications'} />} />

      <Route exact path="*" element={<Pgfof />} />
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
