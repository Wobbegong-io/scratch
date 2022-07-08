//this component is the container for our app (important for styling)
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Saved from './components/Saved';
import Landing from './components/Landing';
import Banner from './components/Banner';
import NavBar1 from './components/NavBar1';
import NavBar2 from './components/NavBar2';

import './style.css';

/**
 *
 * Took state out of Landing to place in it's parent, App.
 * Passed in state to other components where needed except in the case for /Saved since that's still wip
 */
export default function App() {
  //signedIn is the state object name, loggedIn is the boolean keeping track of whether we're logged in or not.
  const [signedIn, setSignedIn] = useState({ id: '', loggedIn: false });

  const routes = (
    <Routes>
      <Route
        path="/"
        element={<Landing signedIn={signedIn} setSignedIn={setSignedIn} />}
      />
      <Route
        path="/LogIn"
        element={<LogIn signedIn={signedIn} setSignedIn={setSignedIn} />}
      />
      <Route path="/SignUp" element={<SignUp setSignedIn={setSignedIn} />} />
      <Route path="/Home" element={<Home signedIn={signedIn} />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/Saved" element={<Saved />} />
    </Routes>
  );

  if (signedIn.loggedIn) {
    return (
      <HashRouter>
        <Banner />
        <NavBar2 signedIn={signedIn} setSignedIn={setSignedIn} />
        {routes}
      </HashRouter>
    );
  } else {
    return (
      <HashRouter>
        <Banner />
        <NavBar1 />
        {routes}
      </HashRouter>
    );
  }
}
