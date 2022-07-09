import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Map from './Map.jsx';
import IntroImage from '../../images/intro.jpg';

export default function Home({ signedIn }) {
  const navigate = useNavigate();

  // Added useeffect to conditionally render component if signedIn was passed in as true
  useEffect(() => {
    if (!signedIn) {
      //console.log("not signed in:", signedIn)
      navigate('/SignUp');
    }
  }, [signedIn, navigate]);

  const [input, setInput] = useState({ term: '', location: '' });

  const [picked, setPicked] = useState(false);

  const [userPick, setUserPick] = useState({});

  const [restaurantLocation, setRestaurantLocation] = useState({
    longitude: '',
    latitude: '',
  });

  //possible fix with state

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (input) => {
    console.log('input', input.term, 'location', input.location);
    axios
      .post('/api/yelp', { term: input.term, location: input.location })
      .then((response) => {
        //  console.log('response', response);
        // let index = Math.floor(Math.random() * (response.data.length));
        let pickedName = response.data.name;
        let pickedImage = response.data.image_url;
        let longitude = response.data.coordinates.longitude;
        let latitude = response.data.coordinates.latitude;
        setRestaurantLocation({
          ...restaurantLocation,
          longitude: longitude,
          latitude: latitude,
        });
        console.log('pickedName', pickedName, 'pickedImage', pickedImage);
        console.log('userPick', userPick);
        console.log('restaurantLocation', restaurantLocation);
        setUserPick({ ...userPick, name: pickedName, imageURL: pickedImage });
        console.log(response.data.name);
      })
      .then(setPicked(true));
  };

  if (!picked) {
    return (
      <>
        <div className="home">
          {/* <img src={IntroImage} alt="food" /> */}

          <div id="formHeading">What are you in the mood for?</div>
          <div id="customForm">
            <input
              className="input"
              name="term"
              value={input.term}
              autoComplete="off"
              onChange={handleChange}
            />

            <label className="input" htmlFor="location">
              Location:
            </label>

            <input
              className="input"
              name="location"
              value={input.location}
              autoComplete="off"
              onChange={handleChange}
            />

            <button onClick={() => handleClick(input)}>Pick for Me</button>
          </div>
        </div>
        {/* <Map /> */}
      </>
    );
  }
  if (picked) {
    return (
      <>
        <div id="returnedRestaurant">
          <div id="displayedRestaurantResponse">
            <h2>Your pick is:</h2>
            <h2> {userPick.name}</h2>
            <img id="restaurantImage" src={`${userPick.imageURL}`} alt="food" />
          </div>
          <div id="restaurantMap">
            <Map
              longitude={restaurantLocation.longitude}
              latitude={restaurantLocation.latitude}
            />
          </div>
        </div>
      </>
    );
  }
}
