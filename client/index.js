import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {   HashRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Saved from './components/Saved';
import Landing from './components/Landing';
import Banner from './components/Banner';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(

    <HashRouter>
    <Banner/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Saved" element={<Saved />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </HashRouter>

      );