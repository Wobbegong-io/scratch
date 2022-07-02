//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar1() {

  //add clickHandlers to render either log in or sign up 
  const LogIn = () => {

  }


  return (
    <nav className='nav'>
      <Link to="/Landing" className='site-name'>Pick For Me</Link>
      <ul className='navbar'>
        <li>
          <button onClick={logIn}><p>Log In</p></button>
        </li>
        <li>
          <button onClick={signUp}><p>Sign Up</p></button>
        </li>
      </ul>
    </nav>
  )    
}
