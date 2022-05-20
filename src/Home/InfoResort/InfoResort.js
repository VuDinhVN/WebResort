import React, { useRef, useState, useEffect } from 'react';
import '../../App.css';
import bed from '../../Icon/bed.png'

import spa from '../../Icon/spa.png'
import restaurant from '../../Icon/restaurant.png'
import { useNavigate } from 'react-router-dom';

const InfoResort = () => {
    const navigate = useNavigate();
    const goToRestaurants = () => {
        navigate('/restaurants');
    }

    const goToRooms = ()=>{
        navigate('/DeluxeDoubleRiverviewBungalow');
    }

    const goToActivities = () => {
        navigate('/activities');
    }
    return (
        <div style={{  width: '100%', paddingTop: 30, paddingBottom: 30, backgroundColor: '#F9F9F9' }}>
            <div style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%' }}>
                <div style={{  display: 'flex', width: '30%', height: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={bed} style={{  width: '20%', height: '20%' }}></img>
                        <span className = "font"  style={{  fontSize: '20', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Mekong Accommodation</span>
                        <span className = "font"  style={{  textAlign: 'center' }}>We are a boutique resort that consists of 25 bungalows. Our bungalow style rooms combined with the aesthetic beauty of our resort puts you into a Mekong Delta relaxing state of mind.
                        </span>
                    </div>
                    <button onClick={goToRooms} style={{  marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Read More</button>
                </div>
                <div style={{  display: 'flex', width: '30%', minHeight: '30%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={spa} style={{  width: '20%', height: '30%' }}></img>
                        <span className = "font"  style={{  fontSize: '20', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Mekong Spa</span>
                        <span className = "font"  style={{  textAlign: 'center' }}>Mekong Spa is a lotus pond surrounded by a natural garden fruit inviting you to spend some quality time relaxing while combining the professional massage with nature.
                        </span> </div>
                    <button onClick={goToActivities} style={{  marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Read More</button>
                </div>
                <div style={{  display: 'flex', width: '30%', height: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={restaurant} style={{  width: '20%', height: '20%' }}></img>
                        <span className = "font"  style={{  fontSize: '20', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Mekong Restaurant</span>
                        <span className = "font"  style={{  textAlign: 'center' }}>Our Restaurant offers a daily breakfast, lunch and dinner buffet as well a variety of A La Carte options varying from Traditional Mekong Delta Dishes to Customary Western Dishes.
                        </span>
                    </div>
                    <button onClick={goToRestaurants} style={{  marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Read More</button>
                </div>
            </div>
        </div>

    )
}
export default InfoResort;