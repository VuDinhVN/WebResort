import React, { useRef, useState, useEffect } from 'react';
import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter';
import Header from '../Home/Header';
import r4 from '../Icon/r4.jpg';
const Booking = () => {
    return (
        <AppContainer>
            <Header/>
            <div style={{ width: '100%', height: 300, marginTop: 80,}}>
                <img src={r4} style={{width: '100%', height:300}}></img>
            </div>
        <div style={{marginTop: 20, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '30 %', }}>
                    <span style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color:'#2d6331'}}>RESERVATION</span>
                <div style={{ width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10, }}></div>

                <span style={{ fontSize: 17, fontWeight: '500', color:'#2d6331' }}>Check In</span>
                    <input type="date" style={{ height: 35, marginBottom: 10, backgroundColor: 'rgba(53,51,49,0.3)', outline: 'none', border: 'none' }}></input>

                    <span style={{ fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Check Out</span>
                    <input type="date" style={{ height: 35, marginBottom: 10, backgroundColor: 'rgba(53,51,49,0.3)', outline: 'none', border: 'none' }}></input>

                    <span style={{ fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Adult</span>
                <select name="Adult" id="Adult" style={{ height: 35, marginBottom: 5 }}>
                    <option value="volvo">Choose</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>

                    <span style={{ fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Children</span>
                <select name="Children" id="Children" style={{ height: 35, marginBottom: 5 }}>
                    <option value="volvo">Choose</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>

                    <span style={{ fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Infant</span>
                <select name="Infant" id="Infant" style={{ height: 35, marginBottom: 10 }}>
                    <option value="volvo">Choose</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>

                <span style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: 10 }}>(Infant: 1-4 years and children: 5-11 years.)</span>


                    <span style={{ fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>How many DeluxeDoubleRiverviewBungalow do you need?</span>
                    <span style={{ fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Superior</span>
                <select name="Superior" id="Superior" style={{ height: 35, marginBottom: 5 }}>
                    <option value="volvo">0</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>


                    <span style={{ fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Deluxe</span>
                <select name="Deluxe" id="Deluxe" style={{ height: 35, marginBottom: 5 }}>
                    <option value="volvo">0</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>

                    <span style={{ fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Suite</span>
                <select name="Suite" id="Suite" style={{ height: 35, marginBottom: 10 }}>
                    <option value="volvo">0</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>
                <div style={{ width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10 }}></div>

                    <span style={{ fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Do you need the transfer?</span>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <span>I will arrange by myself or ask for advice</span>
                    </div>
                        <div> <input type="radio" id="html" name="fav_language" value="HTML" />
                        <span>Private Car</span></div>
                        <div> <input type="radio" id="html" name="fav_language" value="HTML" />
                        <span>Shuttle Bus</span></div>
                    <div style={{ width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>
                </div>

                    <span style={{ fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Activities</span>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <input type="checkbox"></input>
                        <span>Boating to the vibrant Cai Be floating market</span>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <span>Visiting local hosts and traditional handicraft families</span>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <span>Preparing a typical Vietnamese meal with cooking demonstrations</span>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <span>Cycling around quaint peaceful villages</span>
                    </div>
                    <div><input type="checkbox"></input>
                            <span>Picking and tasting plenty of tropical fruit</span></div>
                </div>
                <div style={{ width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>

                    <span style={{ fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Restaurant</span>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <input type="checkbox"></input>
                        <span>Breakfast</span>
                    </div>
                    <div><input type="checkbox"></input>
                        <span>Lunch</span></div>
                    <div> <input type="checkbox"></input>
                        <span>Dinner</span></div>
                </div>
                <div style={{ width: '100%', height: 0.5, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>

                    <span style={{ fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Massage</span>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <input type="checkbox"></input>
                        <span>Massage Service</span>
                    </div>
                </div> 
                 <div style={{ width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>

                    <span style={{ fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Guest Information *</span>
                <select name="cars" id="cars" style={{ height: 35, marginBottom: 5, marginTop: 10 }}>
                    <option value="volvo">Mr</option>
                    <option value="volvo">Ms</option>
                    <option value="saab">Mrs</option>
                </select>
                <input type="text" placeholder="Full Name" style={{ height: 30, marginBottom: 5 }}></input>
                <select name="location" id="location" style={{ height: 35, marginBottom: 5 }}>
                  
                    <option value="opel">Vietnamese</option>
                    <option value="audi">American</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>
                <input type="email" placeholder="Email" style={{ height: 30, marginBottom: 5 }}></input>
                <input type="tel" placeholder="Phone" style={{ height: 30, marginBottom: 5 }}></input>
                <textarea cols="40" rows="5" placeholder="Other"></textarea>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10}}>

                        <div style={{ borderRadius: 5, display: 'flex', backgroundColor: '#2d6331', width: '70%', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                            <button style={{ fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', padding: 10, color: 'white' }}>Send</button>
                        </div>
            </div>
            </div>


        </div>
        <AppFooter/>
        </AppContainer>    )
}
export default Booking;