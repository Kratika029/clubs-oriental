import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 

const Navbar = () => {
  return (
    <nav>
    <Link to='/'><button>home</button></Link>
    <Link to='/signup'><button>register</button></Link>
    <Link to='/login'><button>Login</button></Link>
    


    </nav>
  )
}

export default Navbar