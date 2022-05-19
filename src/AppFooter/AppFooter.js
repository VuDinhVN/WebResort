import React, { useRef, useState, useEffect } from 'react';

const AppFooter = () => {
    return (
        <div style={{fontFamily: 'AssistantRegular', width: '100%', backgroundColor: '#2d6331', }}>
            <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginLeft: '15%', marginRight: '10%', paddingBottom: 50, paddingTop:50 }}>
                <div style={{fontFamily: 'AssistantRegular', flex: 1, display: 'flex', flexDirection: 'column', marginRight: 20 }}>
                    <span style={{fontFamily: 'AssistantRegular',fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16}}>Contact Us</span>
                    <span style={{fontFamily: 'AssistantRegular',color: 'white', fontSize: 20, fontWeight: '500'}}>Mekong Resort & Spa,
                    </span>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontStyle: 'italic' }}>Hoa Qui Ward,
                       </span>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontStyle: 'italic' }}> Hoa Khanh Subdistrict,
                       </span>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontStyle: 'italic' }}> Cai Be District,
                        </span>
                        <span style={{fontFamily: 'AssistantRegular', color: 'white', fontStyle: 'italic' }}>Tien Giang Province,
                      </span >
                        <span style={{fontFamily: 'AssistantRegular', color: 'white', fontStyle: 'italic' ,marginBottom: 10 }}>  Vietnam</span>
                    <a style={{fontFamily: 'AssistantRegular', color: 'white', fontStyle: 'italic' }} href="tel:+84336132135">Điện thoại: +84 336 132 135</a>
                    <a href="mailto:lichvutravel@yahoo.com" style={{fontFamily: 'AssistantRegular',color: 'white', fontStyle: 'italic',}}>E-mail: lichvutravel@yahoo.com</a>
                    <a style={{fontFamily: 'AssistantRegular', color: 'white', fontStyle: 'italic' }} href="info@dulichdongduong.com">Sales: info@dulichdongduong.com</a>
                    
                </div>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column', marginRight: 20 }} >
                    <span style={{fontFamily: 'AssistantRegular', fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Upcoming Events</span>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white' }}>We have no upcoming events.</span>
                </div>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column', marginRight: 20 }}>
                    <span style={{fontFamily: 'AssistantRegular', fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Latest News</span>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white' }}>We have no news articles published to date.</span>
                </div>
                <div style={{fontFamily: 'AssistantRegular', flex: 1, flexDirection: 'column', display: 'flex', color: 'white',}}>
                    <span style={{fontFamily: 'AssistantRegular', fontSize: 17, fontWeight: 'bold',  marginBottom: 16 }}>Pages</span>
                    <a style={{fontFamily: 'AssistantRegular',marginBottom: 10, color: 'white'}} href="https://mekongresort.site/">Home</a>
                    <a style={{fontFamily: 'AssistantRegular',marginBottom: 10, color: 'white'}} href="https://mekongresort.site/DeluxeDoubleRiverviewBungalow">Rooms</a>
                    <a style={{fontFamily: 'AssistantRegular',marginBottom: 10, color: 'white'}} href="https://mekongresort.site/restaurants">Restaurant</a>
                    <a style={{fontFamily: 'AssistantRegular',marginBottom: 10, color: 'white'}} href="https://mekongresort.site/activities">Activities</a>
                    <a style={{fontFamily: 'AssistantRegular',marginBottom: 10, color: 'white'}} href="https://mekongresort.site/aboutus">About Us</a>
                </div>
            </div>
            <div style={{fontFamily: 'AssistantRegular',display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 10}}>
                
                <span style={{fontFamily: 'AssistantRegular', color: 'white'}}>Copyright © Mekong Resort 2022</span>
                <span style={{fontFamily: 'AssistantRegular', color: 'white'}}> Mekong Resort - A member of IndochinaTravel</span>
            </div>
        </div>
    )
}

export default AppFooter;