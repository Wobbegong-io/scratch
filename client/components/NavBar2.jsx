//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar2({signedIn, setSignedIn}) {

  const handleClick = () => {
    setSignedIn(false);
  }

  return (
    <nav className='nav'>
      <Link to="/Landing" className='site-name'>Pick For Me</Link>
      <ul className='navbar'>
         <li>
          <Link to="/Landing"><button className='navbutton' onClick={handleClick}>Log Out</button></Link>
        </li>
      </ul>
    </nav>
  )
}