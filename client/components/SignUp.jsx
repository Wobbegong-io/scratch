import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp({ setSignedIn }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '', address: '' });

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

    axios.post('/users/signup', { user }, config).then((response) => {
      console.log(response);
      if (response.status === 201) {
        //console.log("successful sign up");
        setSignedIn(true);

        /**
         * in order for the state setting above to work, react router's navigate was used,
         *  instead of //window.location = '/#/Home'
         */
        navigate('/Home');
      } else {
        console.log('failed');
        alert('Please fill all required fields');
      }
    });
    //  window.location = '/#/Home';
  };

  return (
    <>
      <br />
      <div id="customForm">
        <h4>Please Sign Up:</h4>
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
        <label htmlFor="address">Address:</label>
        <input name="address" value={user.address} onChange={handleChange} />
        <br />
        <button id="signIn" type="submit" onClick={() => handleSubmit()}>
          Sign Up
        </button>
        <br />
        <br />
        <br />
        <br />
        <h4>Already a User?</h4>
        <Link to="/LogIn">Sign In</Link>
      </div>
    </>
  );
}
