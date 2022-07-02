//this component will be the parent component for passing state
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import IntroImage from '../../images/intro.jpg';

export default function Home() {
  const [input, setInput] = useState({ term: '', location: '' });

  const [picked, setPicked] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  let pickedName = '';
  let pickedImage = '';

  const handleClick = (input) => {
    console.log('input', input.term, 'location', input.location);
    axios
      .post('/api/yelp', { term: input.term, location: input.location })
      .then((response) => {
        let index = Math.floor(Math.random() * response.data.length);
        pickedName = response.data[index].name;
        pickedImage = response.data[index].image_url;
        console.log(response.data[index].name);
      });
    setPicked(true);
  };

  if (!picked) {
    return (
      <div className="home">
        <img src={IntroImage} alt="food" />

        <p>What are you in the mood for?</p>

        <input
          className="input"
          name="term"
          value={input.term}
          onChange={handleChange}
        />
        <br />
        <label className="input" htmlFor="location">
          Location:
        </label>
        <br />
        <input
          className="input"
          name="location"
          value={input.location}
          onChange={handleChange}
        />
        <br />
        <button onClick={() => handleClick(input)}>Pick for Me</button>
      </div>
    );
  }
  if (picked) {
    return (
      <div>
        <h2>Your pick is: {pickedName}</h2>
        <img src={`${pickedImage}`} alt="food" />
      </div>
    );
  }
}
