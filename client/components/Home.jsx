import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import IntroImage from '../../images/intro.jpg';

export default function Home() {
  const [input, setInput] = useState({ term: '', location: '' });

  const [picked, setPicked] = useState(false);

  const [userPick, setUserPick] = useState({});

  //possible fix with state

  const handleChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (input) => {
    console.log('input', input.term, 'location', input.location);
    axios.post('/api/yelp', { term: input.term, location: input.location })
      .then(response => {
      //  console.log('response', response);
        let index = Math.floor(Math.random() * (response.data.length));
        let pickedName = response.data[index].name;
        let pickedImage = response.data[index].image_url;
        console.log('pickedName', pickedName, 'pickedImage', pickedImage)
        console.log('userPick', userPick);
        setUserPick({...userPick,  name: pickedName, imageURL: pickedImage });
        console.log(response.data[index].name);
      }).then(setPicked(true));
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
        <h2>Your pick is: {userPick.name}</h2>
        <img src={`${userPick.imageURL}`} alt="food" />
      </div>
    );
  }
}
