
import React from 'react';
import { Link } from 'react-router-dom';
import IntroImage from '../../images/intro.jpg';


export default function Intro() {
  return (
    <div className="intro">
      <img src={IntroImage} alt="food" />
      <p>Tired of having too many choices every time you want to eat? <br/>We'll do the work for you! Just tell us what you're in the mood for, and we'll serve you back where to eat! <br/><br/>
      <Link to='/SignUp'>Sign up to get started!</Link></p>
    </div>
  )
}
