//this component will be the parent component for passing state
import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
 
  // const [ user, setUser ] = useState({});

  return (
      <>
        <h4>Please Sign Up:</h4>
        <input name="username" value='' />
        <input type="password" name="password" value='' />
        {/* <button id="signIn" type='submit' onClick={handleSubmit}>Sign Up</button> */}
        <Link to='/Landing'><button>Sign Up</button></Link>
        <br/>
        <h4>Already a User?</h4>
        <Link to="/LogIn">Sign In</Link>
      </>
  )
}
