//this component is the container for our app (important for styling)
import React from "react";
import Home from "./components/Home";
import './app.css'

export default function App (){
  return(
    <div id='app'>This is the App component
      <Home />
    </div>
  )
}