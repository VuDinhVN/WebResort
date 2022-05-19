import React, { useEffect, useState } from 'react';

import r4 from '../../Icon/r4.jpg';
import { useNavigate } from 'react-router-dom';


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },]


const Order = ({type}) => {
    const navigate = useNavigate();

    const goToBooking = () => {
        navigate('/booking');
    }

    if(type == 2) return(
        <div style={{
            display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center',  height: 550, marginLeft: '12%'
        }}>
            <div style={{ flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 24, fontWeight: 'bold', color: '#2d6331' }}>
                    Mekong Riverside Resort & Spa - Booking
                </span>

                <div style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
                    <span style={{ color: '#2d6331'}}>
                        Phone:
                    </span>
                    <span style={{ marginLeft: 5, color: '#2d6331', fontStyle: 'italic', }}>
                        0968284223
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}>
                    <span style={{ color: '#2d6331' }}>
                        Email:
                    </span >
                    <span style={{ marginLeft: 5, color: '#2d6331', fontStyle: 'italic', }}>
                        vudinh.job@gmail.com
                    </span>
                </div>

        </div>
        </div>
    )
    return (
        <div style={{
            display: 'flex',
            flex: 2,
            backgroundColor: 'rgba(53,51,49,0.5)',
            borderRadius: 5,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{ display: 'flex', paddingTop: 10, paddingBottom: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Book your stay</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Check in</span>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: 10, border: '2px solid white', borderRadius: 5 }}>
                        <input type="date" style={{fontSize: 17, width: 200, backgroundColor: 'rgba(53,51,49,0.0)', border: 'none', underline: 'none', color: 'white', outline: 'none' }}></input>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Check out</span>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: 10, border: '2px solid white', borderRadius: 5 }}>
                        <input type="date" style={{fontSize: 17, width: 200, backgroundColor: 'rgba(53,51,49,0.0)', border: 'none', underline: 'none', color: 'white', outline: 'none' }}></input>
                    </div>
                </div>

            </div>
            <div style={{ paddingBottom: 5, display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <div style={{}}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Adults</span>
                    <div style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>2</span>
                        <button style={{ color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
                <div style={{}}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Children</span>
                    <div style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>2</span>
                        <button style={{ color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
                <div style={{}}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Infant</span>
                    <div style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>2</span>
                        <button style={{ color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
            </div>
            {/* <div style={{display:'flex', flex: 1, flexDirection: 'row', marginBottom: 5 , marginTop: 5 }}>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'white', fontWeight: 'bold', fontSize: 17  }}>Rooms:</span>
                <div style={{display:'flex', flex: 4, flexDirection: 'column', alignItems: 'flex-start'}}>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{color:'white'}}>Deluxe Double Riverview Bungalow</span>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{ color: 'white' }}>Double or Twin Riverview Bungalow</span>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{ color: 'white' }}>Double Riverview Bungalow</span>
                    </div>
                </div>
                
            </div> */}
            <div style={{marginTop: 15, borderRadius: 5, display: 'flex', backgroundColor: '#2d6331', width: '90%', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                <button onClick={goToBooking} style={{ fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', padding: 15, color: 'white' }}>Book Now</button>
            </div>
        </div>
    )
}
export default Order