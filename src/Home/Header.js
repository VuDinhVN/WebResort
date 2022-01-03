import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import Logo from '../Icon/logo.png'
import tab from '../Icon/bg-menu.png'
const Header = () => {
	return (
		<div className="header">
            <div className="imageTabDiv">
             <div style={{flex: 1, alignItems:'center', display: 'flex', justifyContent: 'center'}}>
             <img src={Logo}  alt="" className="LogoImg"/>
             </div>
              <div style={{flex: 6, alignItems:'center', display: 'flex', justifyContent:'space-between'}}>
              <button type="button" className="button">HOME</button>
              <button type="button" className="button" >ROOMS</button>
              <button type="button" className="button">TOUR</button>
              <button type="button" className="button">EXPERIENCE</button>
              <button type="button" className="button">ABOUT</button>
              <button type="button" className="button">TRAVEL UPDATES</button>
              <button type="button" className="button">TOUR</button>
              <button type="button" className="button">SUPERYACHT</button>
              </div>
            </div>
             <div style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', display: 'flex'}}>
            
             </div>
		</div>
        
	);
};
export default Header;
