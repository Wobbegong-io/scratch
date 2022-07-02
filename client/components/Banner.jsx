//this component will be the parent component for passing state
import React from 'react';
import bannerImage from '../../images/banner.jpg';

export default function Banner() {
  return (
    <div>
      <img id='bannerImage' src={bannerImage} alt='banner image'/>
    </div>
  )
}
