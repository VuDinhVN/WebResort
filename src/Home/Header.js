import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import Logo from '../Icon/logo.png'
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import { useNavigate } from 'react-router-dom';
import  incondowngreen from '../Icon/incondowngreen.png'




const Header = () => {
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
  // navigate('/DeluxeDoubleRiverviewBungalow', {
  //   state: {
  //     key
  //   }
  // })

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


  function onVisibleChange(visible) {
    navigate('/DeluxeDoubleRiverviewBungalow');
  }

  return (
    <div style={{ display: 'flex', flex: 1, position: 'fixed', width: '100%', height: 80, backgroundColor: 'white', top: 0, zIndex: 99 }} className="header">
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <button onClick={goToHome} style={{border: 'none', backgroundColor: 'white', cursor: 'pointer'}}> <img src={Logo} alt="" className="LogoImg" /></button>
      </div>
      <div style={{ flex: 3, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}></div>
      <div style={{ flex: 5, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        
        <button onClick={goToHome} style={{backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold'}} type="button" className="button">Trang Chủ</button>
        <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Dropdown
            trigger={['click']}
            overlay={menu}
            animation="slide-up"
          >
            <button style={{ backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold', flexDirection: 'row', justifyContent: 'center' }} className="button">Rooms</button>

          </Dropdown>
          <img src={incondowngreen} style ={{width: 12, height: 15, marginLeft: -15, tintColor: 'green', marginTop:1.5}}></img>
        </div>
        <button onClick={goToRestaurants} style={{ backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold' }} type="button" className="button">Nhà Hàng</button>
        <button onClick={goToActivities} style={{ backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold' }} type="button" className="button">Hoạt Động</button>
        <button onClick={goToAboutUs} style={{ backgroundColor: 'white', fontSize: 16, color: '#2d6331', fontWeight: 'bold' }} type="button" className="button">Về Chúng Tôi</button>
      </div>
    </div>
  );
};
export default Header;
