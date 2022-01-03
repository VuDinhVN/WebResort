import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/index'
import Header from './Home/Header'
import HeaderContainer from './Home/HeaderContainer'
import Introduce from './Home/Component/Introduce/index'
import VietNam from './Home/Component/VietNam/index'
const App =()=>{
  return (
   <div style={{width: '100%'}}>
    <HeaderContainer/>
     <Home/>
     <Header/>
     <Introduce/>
     <VietNam/>
   </div>
  )
}
export default App;