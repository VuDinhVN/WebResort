import React, { useRef, useState, useEffect } from 'react';
import '../../App.css';
import a1 from '../../Icon/a1.png'
import a2 from '../../Icon/a2.png'
import a3 from '../../Icon/a3.png'
import a4 from '../../Icon/a4.png'
import a5 from '../../Icon/a5.png'


const Activities = ()=>{
    return (
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', backgroundColor: '#F9F9F9', paddingTop: 20, paddingBottom: 20}}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: 30}}>
                <span className = "font"  style={{ fontSize: 24, fontWeight: 'bold', color: '#2d6331', marginTop: 10}}>ACTIVITIES</span>
            </div>
            <div style={{  display: 'flex', paddingLeft: '10%', paddingRight: '10%'}}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' , marginBottom: 30, marginTop: 10}}>
                    <img src={a1} alt="" style={{  width: 100, height: 100 }} />
                    <div style={{  display: 'flex', flexDirection: 'column', flex: 1}}>
                        <span className = "font"  style={{ fontSize:18, fontWeight: '500'}}>Biking</span>
                        <span className = "font"  styles={{  }}>Discovery of Mekong Delta with cycling on its tranquil winding lanes and crossing canals.</span>
                    </div>
                </div>
                <div style={{  flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={a2} alt="" style={{  width: 100, height: 100, }} />
                    <div style={{  display: 'flex', flexDirection: 'column' }}>
                        <span className = "font"  style={{  fontSize: 18, fontWeight: '500' }}>
                            
Boating</span>
                        <span className = "font"  styles={{  }}>Let felling buoyancy in the Mekong river and observe the floating life style of local people.  </span>
                    </div>
                </div>

            </div>
            <div style={{  display: 'flex', paddingLeft: '10%', paddingRight: '10%' }}>
                <div style={{  flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <img src={a3} alt="" style={{  width: 100, height: 100, }} />
                    <div style={{  display: 'flex', flexDirection: 'column' }}>
                        <span className = "font"  style={{  fontSize: 18, fontWeight: '500' }}>
                        Cooking class</span>
                        <span className = "font"  styles={{  }}>Instructing you how to make some of these local delicacies so you can experience the flavours and tastes of Vietnamese cuisine.</span>
                    </div>
                </div>
                <div style={{  flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={a4} alt="" style={{  width: 100, height: 100, }} />
                    <div style={{  display: 'flex', flexDirection: 'column' }}>
                        <span className = "font"  style={{  fontSize: 18, fontWeight: '500' }}>
                        Local Market</span>
                        <span className = "font"  styles={{  }}>Do you want to enjoy the hectic feeling when entering a local market? For a long time, Cai Rang Local Market has been known as the trading center located next to Tien River so don’t overlook an essential part- markets. </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Activities
