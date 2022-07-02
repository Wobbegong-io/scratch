//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
 
  const [ user, setUser ] = useState({});

  const handleChange = e => {
    e.preventDefault();
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    //send user info to the backend
    console.log(user);
    window.location = '/#/Home';
  }

  return (
      <>
        <br/>
        <h4>Please Sign Up:</h4>
        <br/>
        <input name="username" value={user.username} onChange={handleChange} />
        <input type="password" name="password" value={user.password} onChange={handleChange} />
        <input name="location" value={user.location} onChange={handleChange} />
        <button id="signIn" type='submit' onClick={() => handleSubmit()}>Sign Up</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <h4>Already a User?</h4>
        <Link to="/LogIn">Sign In</Link>
      </>
  )
}
