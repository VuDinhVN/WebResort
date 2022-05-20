import React, { useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import '../App.css';
import phoneCall from '../Icon/phone.png'
import { useLocation } from 'react-router-dom'

const images = [
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-1.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-2.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-3.jpg?width=1920&height=1080&mode=crop' },
    { url:'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-4.jpg?width=1920&height=1080&mode=crop'},
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-5.jpg?width=1920&height=1080&mode=crop'},
    { url:'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-6.jpg?width=1920&height=1080&mode=crop'},
    { url:'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-7.jpg?width=1920&height=1080&mode=crop'}

];

const RoomOne = () => {
    

    return (
        <div style={{  display: 'flex', flexDirection: 'row', alignItems: 'center', flexDirection: 'column' }}>
            <span className = "font"  style={{  marginTop: 10, marginBottom: 10, fontSize: 20, fontWeight: 'bold', width: '92%' }}>Deluxe Double Riverview Bungalow</span>
            <div style={{  display: 'flex', width: '92%', marginBottom: 20, marginTop: 10, }}>

                <div style={{  display: 'flex', flexDirection: 'column', flex: 3.5 }}>

                    <SimpleImageSlider
                        width={'60%'}
                        height={400}
                        images={images}
                        // showBullets={true}
                        showNavs={true}
                        navSize={30}
                        slideDuration={1}
                        autoPlay={true}
                    />

                </div>
                <div style={{  position: 'sticky', borderRadius: 5, border: '1px solid rgba(53,51,49,0.1)', display: 'flex', flexDirection: 'column', flex: 1.5, paddingTop: 10, paddingLeft: 20, justifyContent: 'space-around', }}
                    className="shadow"
                >
                    <div style={{  flexDirection: 'column', width: '100%' }}>
                        <span className = "font"  styles={{  }}>Contact</span>
                        <div style={{  width: '100%', height: 1, backgroundColor: 'rgba(53,51,49,0.3)', }}></div>
                    </div>

                    <div style={{  display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span className = "font"  styles={{  }}>Address</span>
                        <span className = "font"  style={{  }}>Mekong Resort & Spa,
                        </span>
                        <span className = "font"  style={{  }}>
                        Phu Khanh Area,
                        </span >
                        <span className = "font"  style={{  }}>
                        Phu Thu Ward,
                        </span>
                        <span className = "font"  style={{  }}>
                        Cai Rang District,
                        </span>
                        <span className = "font"  style={{  }}>
                        Can Tho City,
                        </span>
                        <span className = "font"  style={{  }}>



                            Vietnam</span>
                    </div>
                    <div style={{  display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span className = "font"  styles={{  }}>Phone</span>
                       <a className = "font"  style={{  color: '#2d6331', fontStyle: 'italic',  }} href="tel:+84336132135">Phone: +84 336 132 135</a>
                    </div>
                    <div style={{  display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <span className = "font"  style={{  }}>E-mail:</span>
                       <a className = "font"  style={{  color: '#2d6331', fontStyle: 'italic' }} href="lichvutravel@yahoo.com">lichvutravel@yahoo.com</a>
                    </div>
                    <div style={{  display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <span className = "font"  style={{  }}>Sales:</span>
                       <a className = "font"  style={{  color: '#2d6331', fontStyle: 'italic' }} href="info@dulichdongduong.com">info@dulichdongduong.com</a>
                    </div>
                </div>
            </div>
            <div style={{  width: '92%', flexDirection: 'column', alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{  width: '65%', height: 1, backgroundColor: 'rgba(53,51,49,0.3)', marginTop: 20, marginBottom: 20, }}></div>
                <div style={{  width: '100%', display: 'flex', flexDirection: 'row', marginRight: '10%' }}>
                    <div style={{  display: 'flex', flexDirection: 'row', flex: 3 }}>
                        <span className = "font"  style={{  flex: 1, fontSize: 17, fontWeight: '500' }}>Description</span>
                        <div style={{  flex: 4, display: 'flex', flexDirection: 'column' }}>
                            <span className = "font"  styles={{  }}>-We are a boutique resort that consists of 50 DeluxeDoubleRiverviewBungalow/25 bungalows ( Each room 30m2) . Our bungalow style DeluxeDoubleRiverviewBungalow combined with the aesthetic beauty of our resort puts you into a Mekong Delta relaxing state of mind. -Maximum 2 adults and 01 child under the age of 12 years sharing bedding with parent in room (with Extra charge) -Note: Children: Under 3 Year Old free, from 03 to under 06 year old 5$, from 06 to under 12 year old 10$ Extra Bed: 20$ for room (max 01 extra bed )</span>
                            <span className = "font"  style={{  marginTop: 10, fontSize: 17, fontWeight: '500' }}>Facilities</span>
                            <span className = "font"  styles={{  }}>Our Deluxe Double Riverview Bungalow comes with the following features and facilities:</span>
                            <div style={{  display: 'flex', flex: 1, flexDirection: 'row', }}>
                                <div style={{  display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                                    <span className = "font"  styles={{  }}>- Ensuite Bathroom</span>
                                    <span className = "font"  styles={{  }}>- Tea/Coffee Facilities</span>
                                    <span className = "font"  styles={{  }}>- Safe</span>
                                    <span className = "font"  styles={{  }}>- 24 Hour Reception</span>
                                    <span className = "font"  styles={{  }}>- Free Mineral Water</span>
                                </div>
                                <div style={{  display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 20 }}>
                                    <span className = "font"  styles={{  }}>- TV</span>
                                    <span className = "font"  styles={{  }}>- Fridges</span>
                                    <span className = "font"  styles={{  }}>- Hairdryer</span>
                                    <span className = "font"  styles={{  }}>- Free toiletriess</span>
                                    <span className = "font"  styles={{  }}>- Free Wifi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{  flex: 1.5,width: '100%', height: '100%', paddingTop: 10, paddingLeft: 20, justifyContent: 'space-around', marginLeft: '9%', marginBottom: 10,}}>
                        <div style={{  position: 'sticky', borderRadius: 5, border: '1px solid rgba(53,51,49,0.1)', display: 'flex', flexDirection: 'column', height: '60%', }}
                            className="shadow"
                        >
                            <div style={{  width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={phoneCall} style={{  width: 100, height: 100 , marginTop: 10}}></img>
                                <span className = "font"  style={{  fontSize: 30, fontWeight: 'bold', }}>Call Us</span>
                               <a className = "font"  style={{  color: '#2d6331', fontStyle: 'italic', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }} href="tel:+84336132135">Phone: +84 336 132 135</a>

                            </div>
                        </div>
                   </div>
                </div>

            </div>
            <div style={{  width: '100%', height: 0.5, backgroundColor: 'rgba(53,51,49,0.3)', marginTop: 20 }}>

            </div>
        </div>
    )
}

export default RoomOne;