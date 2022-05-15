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
import Header from './Home/Header'
import HeaderContainer from './Home/HeaderContainer'
import Introduce from './Home/Component/Introduce/index'
import VietNam from './Home/Component/VietNam/index'


const App =()=>{
  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
</Router>
  )
}
export default App;