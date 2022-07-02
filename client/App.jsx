//this component is the container for our app (important for styling)
import React from "react";
import Landing from "./components/Landing";
import './style.css'

export default function App (){
  return(
    <div id='app'>
      <Landing />
    </div>
  )
}