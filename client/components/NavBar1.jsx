//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar1() {
  return (
    <nav className='nav'>
      <Link to="/Landing" className='site-name'>Pick For Me</Link>
      <ul className='navbar'>
        <li>
          <Link to="/LogIn"><p>Log In</p></Link>
        </li>
        <li>
          <Link to="/SignUp"><p>Sign Up</p></Link>
        </li>
      </ul>
    </nav>
  )    
}
