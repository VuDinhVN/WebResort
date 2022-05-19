import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './Home/index'
import Rooms from './Rooms/index'
import DoubleorTwinRiverviewBungalow from './Rooms/index2'
import DoubleRiverviewBungalow from './Rooms/index3'
import Booking from './Rooms/Booking'
import Restaurants from './Restaurants/Restaurants'
import Activities from './Activities/Activities'
import AboutUs from './AboutUs/AboutUs'


const App =()=>{
  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/DeluxeDoubleRiverviewBungalow" element={<Rooms />} />
        <Route exact path="/DoubleorTwinRiverviewBungalow" element={<DoubleorTwinRiverviewBungalow />} />
        <Route exact path="/DoubleRiverviewBungalow" element={<DoubleRiverviewBungalow />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/restaurants" element={<Restaurants />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
    </Routes>
</Router>
  )
}
export default App;