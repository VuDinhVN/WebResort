import React, { useEffect, useState } from 'react';
import '../App.css';
import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter';
import Header from '../Home/Header';
import r2 from '../Icon/r2.jpg';
import Order from '../Home/Order/Order'
import RoomOne from './RoonOne';
import RoomTwo from './RoomTwo'
import RoomThree from './RoomThree'
import { useLocation } from "react-router-dom";

const Rooms = (props)=>{
    
    return (
        <AppContainer>
            <Header/>
            <div style={{fontFamily: 'AssistantRegular', position: 'relative', textAlign: 'center', color: 'red', height: 450, marginTop: 59 }}>
                <img src={r2} style={{fontFamily: 'AssistantRegular', height:300, width: '100%'}}></img>
                <div style={{fontFamily: 'AssistantRegular', position: 'absolute', bottom: 0, right: 50, width: 500, height: 300, }}>
                    <Order type={1} />
                </div>
                <div style={{fontFamily: 'AssistantRegular', position: 'absolute', bottom: 0, left: 50, width: 500, height: 350, }}>
                    <Order type={2} />
                </div>
            </div>
           <RoomOne/>
            
            <AppFooter/>
        </AppContainer>
    )
}

export default Rooms;