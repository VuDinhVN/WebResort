import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import Logo from '../Icon/logo.png'
import tab from '../Icon/bg-menu.png'
const Header = () => {
  return (
    <div style={{ display: 'flex', flex: 1, position: 'fixed', width: '100%', backgroundColor: 'white', }} className="header">
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <img src={Logo} alt="" className="LogoImg" />
      </div>
      <div style={{ flex: 8, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <button style={{backgroundColor: 'white', fontSize: 16, color: 'green', fontWeight: 'bold'}} type="button" className="button">Trang Chủ</button>
        <button style={{ backgroundColor: 'white', fontSize: 16, color: 'green', fontWeight: 'bold' }} type="button" className="button" >Phòng</button>
        <button style={{ backgroundColor: 'white', fontSize: 16, color: 'green', fontWeight: 'bold' }} type="button" className="button">Nhà Hàng</button>
        <button style={{ backgroundColor: 'white', fontSize: 16, color: 'green', fontWeight: 'bold' }} type="button" className="button">Massage</button>
        <button style={{ backgroundColor: 'white', fontSize: 16, color: 'green', fontWeight: 'bold' }} type="button" className="button">Hoạt Động</button>
        <button style={{ backgroundColor: 'white', fontSize: 16, color: 'green', fontWeight: 'bold' }} type="button" className="button">Về Chúng Tôi</button>
      </div>
    </div>
  );
};
export default Header;
