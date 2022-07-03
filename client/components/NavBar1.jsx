//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';

export default function NavBar1({signedIn, setSignedIn}) {

  //add clickHandlers to render either log in or sign up 
  const LogIn = e => {
    e.preventDefault();
    return (
      <LogIn signedIn={signedIn} setSignedIn={setSignedIn} />
    )
  }

  const signUp = e => {
    e.preventDefault();
    return(
      <SignUp signedIn={signedIn} setSignedIn={setSignedIn}/> 
     )
  }

  return (
    <nav className='nav'>
      <Link to="/Landing" className='site-name'>Pick For Me</Link>
      <ul className='navbar'>
        <li>
          <button onClick={()=>logIn(e)}><p>Log In</p></button>
        </li>
        <li>
          <button onClick={()=>signUp(e)}><p>Sign Up</p></button>
        </li>
      </ul>
    </nav>
  )    
}
