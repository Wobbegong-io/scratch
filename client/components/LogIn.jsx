import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LogIn({ signedIn, setSignedIn }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //send user info to the backend

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    axios.post('/users/login', { user }, config).then((response) => {
      if (response.status === 201) {
        console.log('successful logging in');
        console.log(response);
        setSignedIn({ ...signedIn, id: response.data._id, loggedIn: true });
        /**
         * in order for the state setting above to work, react router's navigate was used,
         *  instead of //window.location = '/#/Home'
         */
        navigate('/Home');
      } else {
      }
    });
  };

  return (
    <>
      <div id="formHeading">Already have an account? Log in below:</div>
      <div id="customForm">
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          value={user.username}
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          autoComplete="off"
        />

        <button id="signIn" type="submit" onClick={() => handleSubmit()}>
          Login
        </button>
      </div>
      <div id="formFooter">
        <h4>Need an account?</h4>
        <Link to="/SignUp">Register Here</Link>
      </div>
    </>
  );
}
