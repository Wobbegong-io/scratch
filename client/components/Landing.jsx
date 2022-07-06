//this component will be the parent component for passing state
import React from 'react';
import { useState } from 'react';
import NavBar1 from './Header/NavBar1';
import NavBar2 from './NavBar2';
import Intro from './Intro';
import Home from './Home';



export default function Landing({ signedIn,setSignedIn }) {
  //logic to determine whether user is signed in or not


  // Moved state to parent
  // const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
    return (
      <div>
        <NavBar1 />
        <Intro />
      </div>
    )
  }
  if (signedIn) {
    return (
      <div>

        <NavBar2 signedIn={signedIn} setSignedIn={setSignedIn} />
        <Home />
      </div>
    )
  }
}
