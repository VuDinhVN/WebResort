import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import Logo from '../Icon/logo.png'
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import { useNavigate } from 'react-router-dom';
import  incondowngreen from '../Icon/incondowngreen.png'




const Header = ({mess}) => {
  const navigate = useNavigate();

  const menu = (
    <Menu onSelect={onSelect}>
      <MenuItem key="1">Deluxe Double Riverview Bungalow</MenuItem>
      <Divider />
      <MenuItem key="2">Double or Twin Riverview Bungalow</MenuItem>
      <Divider />
      <MenuItem key="3">Double Riverview Bungalow</MenuItem>
    </Menu>
  );

  function onSelect({ key }) {
    if (key == 1) navigate('/DeluxeDoubleRiverviewBungalow')
    if (key == 2) navigate('/DoubleorTwinRiverviewBungalow')
    if (key == 3) navigate('/DoubleRiverviewBungalow')
   }

  const goToHome =()=>{
    navigate('/');
  }

  const goToRestaurants= ()=>{
    navigate('/restaurants');
  }

  const goToActivities = () => {
    navigate('/activities');
  }
  const goToAboutUs = () => {
    navigate('/aboutus');
  }

  return (
    <div style={{  display: 'flex', flex: 1, position: 'fixed', width: '100%', height: mess ? 90: 80, backgroundColor: 'white', top: 0, zIndex: 99 , flexDirection: 'column'}} className="header">
      <div style={{width: '100%', display: 'flex', flexDirection: 'row',}}>
      <div style={{  flex: 2, display: 'flex', justifyContent: 'center' }}>
        <button onClick={goToHome} style={{ border: 'none', backgroundColor: 'white', cursor: 'pointer'}}> <img src={Logo} alt="" className="LogoImg" /></button>
      </div>
      <div style={{  flex: 3, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}></div>
      <div style={{  flex: 4, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={goToHome} style={{ backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold'}} type="button" className="button">Home</button>
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Dropdown
            trigger={['click']}
            overlay={menu}
            animation="slide-up"
          >
            <button style={{  backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold', flexDirection: 'row', justifyContent: 'center' }} className="button">Rooms</button>

          </Dropdown>
          <img src={incondowngreen} style ={{width: 12, height: 15, marginLeft: -10, tintColor: 'green', marginTop:1.5}}></img>
        </div>
        <button onClick={goToRestaurants} style={{  backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold' }} type="button" className="button">Restaurant</button>
        <button onClick={goToActivities} style={{  backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold' }} type="button" className="button">Activities</button>
        <button onClick={goToAboutUs} style={{  backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold' }} type="button" className="button">About Us</button>
      </div>
      <div style={{  flex: 1, alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        
      </div>
      </div>
      {mess && <div style={{width: '100%', display: 'flex', flexDirection: 'row', height: 20, alignItems: 'center', justifyContent: 'center'}} >
        <div style={{width: '100%', backgroundColor: '#2d6331', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
        <span style={{color: 'white'}}>{mess}</span>
        </div>
      </div>}
    </div>
  );
};
export default Header;
