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
      <br />
      <div id="customForm">
        <h4>Log in below:</h4>
        <br />
        <label htmlFor="username">Username:</label>
        <input name="username" value={user.username} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <br />

        <button id="signIn" type="submit" onClick={() => handleSubmit()}>
          Login
        </button>

        <br />
        <br />
        <br />
        <br />
        <h4>Need an account?</h4>
        <Link to="/SignUp">Register Here</Link>
      </div>
    </>
  );
}
