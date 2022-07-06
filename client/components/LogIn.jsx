
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LogIn({ setSignedIn, setLoggedInUsername }) {

  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });

  };

  const handleSubmit = () => {
    //send user info to the backend

    const config = {
      headers: {
        "Content-type": "application/json"
      }
    }

    axios.post("/users/login", { user }, config)
      .then(response => {
        if (response.status === 201) {
          console.log("successful logging in");
          console.log(response.status)
          setSignedIn(true); 
          setLoggedInUsername(response.user)
          /**
          * in order for the state setting above to work, react router's navigate was used,
          *  instead of //window.location = '/#/Home'
          */
          navigate("/Home");
        } else {

        }
      })


  }

  return (
    <>
      <br />
      <h4>Log in below:</h4>
      <br />
      <input name="username" value={user.username} onChange={handleChange} />
      <input type="password" name="password" value={user.password} onChange={handleChange} />

      <button id="signIn" type='submit' onClick={() => handleSubmit()}>Login</button>
      <br />
      <br />
      <br />
      <br />
      <h4>Need an account?</h4>
      <Link to="/SignUp">Register Here</Link>
    </>
  );
}
