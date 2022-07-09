//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NavBar2({ signedIn, setSignedIn }) {

  const handleClick = () => {
    console.log('signedIn.id', signedIn.id);
    console.log("handleclick is running")
    axios.post('/logout', { id: signedIn.id })
      .then(setSignedIn(false));
  }

  /**
   * changed /Landing to / since app structure was tweaked
   */
  return (
    <nav className="nav">
      <Link to="/Landing" className="site-name">
        Don't get hangry, get <em>Served</em>
      </Link>
      <ul className="navbar">
        <li>
          <Link to="/">
            <button className="navbutton" onClick={handleClick}>
              Log Out
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}