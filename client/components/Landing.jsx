import React from 'react';
import Intro from './Intro';
import Home from './Home';

export default function Landing({ signedIn, setSignedIn }) {

  if (!signedIn) {
    return <Intro />
  }
  else {
    return <Home />
  }
}
