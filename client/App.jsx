//this component is the container for our app (important for styling)
import React, { useState } from "react";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Saved from './components/Saved';
import Landing from './components/Landing';
import Banner from './components/Header/Banner';
import Welcome from "./components/Header/Welcome";
import { HashRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import './app.css';

/**
 *
 * Took state out of Landing to place in it's parent, App.
 * Passed in state to other components where needed except in the case for /Saved since that's still wip
 */
export default function App() {

  const [signedIn, setSignedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("")

  return (
    <div id="app">
      <HashRouter>
        <Banner />
        <Welcome username={loggedInUsername} />

        <Routes>
          <Route
            path="/"
            element={<Landing signedIn={signedIn} setSignedIn={setSignedIn} />}
          />
          <Route path="/LogIn" element={<LogIn setSignedIn={setSignedIn} />} />
          <Route
            path="/SignUp"
            element={<SignUp setSignedIn={setSignedIn} />}
          />

          <Route path="/Home" element={<Home signedIn={signedIn} />} />
          <Route path="/Saved" element={<Saved />} />
        </Routes>
      </HashRouter>
    </div>
  );
}