import React from 'react';
import ('./header.css');

export default function Welcome({ username }) {
  if (username) {
    return (
      <div id="welcomeMsg">
        Hello {username} ! What are you in the mood for?{' '}
      </div>
    );
  } else {
    return <div id="welcomeMsg">Hello, you hungry beast.</div>;
  }
}
