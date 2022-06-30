//this component will be the parent component for passing state
import React from 'react';
import Banner from './Banner';
import NavBar1 from './NavBar1';
import NavBar2 from './NavBar2';
import Intro from './Intro';
import Home from './Home';

export default function Landing() {
//logic to determine whether user is signed in or not
  let signedIn = true; 
  
  if (!signedIn) {
    return (
      <div>
         <Banner />
         <NavBar1 />
         <Intro />
      </div>
    )
  }
  if (signedIn) {
    return (
      <div>
        <Banner />
        <NavBar2 />
        <Home />
      </div>
    )
  }
}
