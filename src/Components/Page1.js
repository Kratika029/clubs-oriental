import React, {useState} from "react";

import Footer from './footer';
import Header from './header';
import Mains from './mains';
import LoginForm from './loginform';
// import LoginForm from './components/loginpage/loginform';
const Page1 = () => {
    const[isShowLogin, setIsShowLogin] = useState(true);
    const handleLoginClick = () => {
        setIsShowLogin((isShowLogin) => !isShowLogin);
    };
    return(
        <>
        <Header/>
        <>
      <Mains handleLoginClick={handleLoginClick}/>
      <LoginForm isShowLogin={isShowLogin} />
      </>
        <Footer/>
        </>
    );
}
export default Page1;