import React, { useRef, useState, useEffect } from 'react';
import spa1 from '../../Icon/spa1.jpg'
import r3 from '../../Icon/r3.jpg'
import '../../App.css';

const Spa = () => {
    return (
        <div style={{  display: 'flex', width: '100%', flexDirection: 'column'}}>
            <div style={{  display: 'flex', width: '100%', height: '100%', flexDirection: 'column', backgroundColor: '#F9F9F9', paddingTop: 30, paddingBottom: 30, }}>
                <div style={{  display: 'flex', flexDirection: 'row', paddingLeft: '10%', paddingRight: '10%' }} >

                    <img src={spa1} style={{  width: 500, height: 500, overflow: 'hidden', borderRadius: 300, }} className="shadow"></img>

                    <div style={{  paddingLeft: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span className = "font"  style={{  fontSize: 20, fontWeight: '500', color: '#2d6331'}}>Mekong Spa at Mekong Resort</span>
                            <span className = "font"  styles={{  }}> Mekong Spa is a lotus pond surrounded by a natural garden fruit inviting you to spend some quality time relaxing while combining the professional massage with nature.</span>
                        </div>
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span className = "font"  style={{  fontSize: 20, fontWeight: '400' }}>Foot Massage</span>
                            <span className = "font"  styles={{  }}> Massage and acupuncture the soles of the feet has a profound effect on the nervous system. Consequently, it can help eliminate fatigue, restore energy flow, and enhance overall health.</span>
                        </div>
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span className = "font"  style={{  fontSize: 20, fontWeight: '400' }}>Stimulate Self-Healing</span>
                            <span className = "font"  styles={{  }}>Foot massage brings balance, stimulates self-healing and self-recovery, and helps to increase endurance.</span>
                        </div>
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span className = "font"  style={{  fontSize: 20, fontWeight: '400' }}>Herbal Foot Bath</span>
                            <span className = "font"  styles={{  }}> Foot massage at the Oasis Spa uses the art of herbal foot bath together to improve the effect. Herbal foot bath of natural ingredients are collected in the private garden of the resort.</span>
                        </div>
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span className = "font"  style={{  fontSize: 20, fontWeight: '400' }}>Body Massage</span>
                            <span className = "font"  styles={{  }}> Professional body massage at the Oasis Spa Mekong Riverside Resort & Spa will bring you comfort and relaxation after hours of hard work,awakened nervous system will help you regain your vitality.</span>
                        </div>
                    </div>
                </div>
                <div style={{  display: 'flex', flexDirection: 'column', paddingLeft: '10%', paddingRight: '10%' }}>
                    <span className = "font"  style={{  fontSize: 17, fontWeight: '400' }}>At the Mekong Resort & Spa we are committed to staying as environmentally friendly as possible while simultaneously helping out the local community.</span>
                    <span className = "font"  styles={{  }}>

                    From our windmill powered irrigation system that allocates water from the Mekong River to our garden, to solar powered walkway lights, we want to make the smallest ecological footprint as possible and only hire local staff.
                    </span>
                </div>
            </div>
            <div>
                <div style={{ 
                    backgroundImage: `url(${r3})`, width: '100%', height: 400, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundOpacity: 0.2,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                }}>
                    <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, marginRight: '20%', marginLeft: '20%', backgroundColor: 'rgba(53,51,49,0.5)', }}>
                        <span className = "font"  style={{  paddingBottom: 10, color: 'white', fontSize: 20, fontWeight: 'bold' }}>Enjoy Dining at the Mekong Resort</span>
                        <span className = "font"  style={{  color: 'white', textAlign: 'center', paddingBottom: 10 }}>The property has a 7-hectare organic garden that services the resort’s Mekong Medley Restaurant.
                        The menu offers an eclectic variety of customary Vietnamese and International Cuisine.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Spa