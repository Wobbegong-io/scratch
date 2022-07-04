//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

  const [user, setUser] = useState({ username: '', password: '', address: '' });

  const handleChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //send user info to the backend
    ;

      const config = {
        headers: {
          "Content-type":"application/json"
        }
      }

    axios.post("/users/signup", { user },config)
      .then(response => {
        console.log(response)
        if (response.status === 201) {
         // window.location = '/#/Landing'
        } else {

        }
      })
  //  window.location = '/#/Home';

  }

  return (
    <>
      <br />
      <h4>Please Sign Up:</h4>
      <br />
      <input name="username" value={user.username} onChange={handleChange} />
      <input type="password" name="password" value={user.password} onChange={handleChange} />
      <input name="address" value={user.address} onChange={handleChange} />
      <button id="signIn" type='submit' onClick={() => handleSubmit()}>Sign Up</button>
      <br />
      <br />
      <br />
      <br />
      <h4>Already a User?</h4>
      <Link to="/LogIn">Sign In</Link>
    </>
  )
}
