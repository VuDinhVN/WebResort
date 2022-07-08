import React, { useRef, useState, useEffect } from 'react';
import '../App.css';

const AppFooter = () => {
    return (
        <div style={{  width: '100%', backgroundColor: '#2d6331', }}>
            <div style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginLeft: '15%', marginRight: '10%', paddingBottom: 50, paddingTop:50 }}>
                <div style={{  flex: 1, display: 'flex', flexDirection: 'column', marginRight: 20 }}>
                    <span className = "font"  style={{ fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16}}>Contact Us</span>
                    <span className = "font"  style={{ color: 'white', fontSize: 20, fontWeight: '500'}}>Mekong Resort & Spa,
                    </span>
                    <span className = "font"  style={{  color: 'white', fontStyle: 'italic' }}>Phu Khanh Area,
                       </span>
                    <span className = "font"  style={{  color: 'white', fontStyle: 'italic' }}> Phu Thu Ward,
                       </span>
                    <span className = "font"  style={{  color: 'white', fontStyle: 'italic' }}> Cai Rang District,
                        </span>
                        <span className = "font"  style={{  color: 'white', fontStyle: 'italic' }}>Can Tho City,
                      </span >
                        <span className = "font"  style={{  color: 'white', fontStyle: 'italic' ,marginBottom: 10 }}>  Vietnam</span>
                   <a className = "font"  style={{  color: 'white', fontStyle: 'italic' }} href="tel:+84336132135">Điện thoại: +84 336 132 135</a>
                   <a className = "font"  href="mailto:lichvutravel@yahoo.com" style={{ color: 'white', fontStyle: 'italic',}}>E-mail: lichvutravel@yahoo.com</a>
                   <a className = "font"  style={{  color: 'white', fontStyle: 'italic' }} href="info@dulichdongduong.com">Sales: info@dulichdongduong.com</a>
                    
                </div>
                <div style={{  display: 'flex', flex: 1, flexDirection: 'column', marginRight: 20 }} >
                    <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Upcoming Events</span>
                    <span className = "font"  style={{  color: 'white' }}>We have no upcoming events.</span>
                </div>
                <div style={{  display: 'flex', flex: 1, flexDirection: 'column', marginRight: 20 }}>
                    <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Latest News</span>
                    <span className = "font"  style={{  color: 'white' }}>We have no news articles published to date.</span>
                </div>
                <div style={{  flex: 1, flexDirection: 'column', display: 'flex', color: 'white',}}>
                    <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold',  marginBottom: 16 }}>Pages</span>
                   <a className = "font"  style={{ marginBottom: 10, color: 'white'}} href="https://mekongresort.site/">Home</a>
                   <a className = "font"  style={{ marginBottom: 10, color: 'white'}} href="https://mekongresort.site/DeluxeDoubleRiverviewBungalow">Rooms</a>
                   <a className = "font"  style={{ marginBottom: 10, color: 'white'}} href="https://mekongresort.site/restaurants">Restaurant</a>
                   <a className = "font"  style={{ marginBottom: 10, color: 'white'}} href="https://mekongresort.site/activities">Activities</a>
                   <a className = "font"  style={{ marginBottom: 10, color: 'white'}} href="https://mekongresort.site/aboutus">About Us</a>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 10}}>
                
                <span className = "font"  style={{  color: 'white'}}>Copyright © Mekong Resort 2022</span>
            </div>
        </div>
    )
}

export default AppFooter;