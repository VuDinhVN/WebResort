import React, { useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import '../App.css';
import phoneCall from '../Icon/phone.png'

const images = [
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-1.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-2.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-3.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-4.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-5.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-6.jpg?width=1920&height=1080&mode=crop' },
    { url: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/_room_riverview-7.jpg?width=1920&height=1080&mode=crop' }

];

const RoomThree = () => {
    return (
        <div style={{fontFamily: 'AssistantRegular', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <span style={{fontFamily: 'AssistantRegular', marginTop: 10, marginBottom: 10, fontSize: 20, fontWeight: 'bold', width: '92%' }}>Double Riverview Bungalow</span>
            <div style={{fontFamily: 'AssistantRegular', display: 'flex', width: '92%', marginBottom: 20, marginTop: 10, }}>

                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', flex: 3.5 }}>

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
                <div style={{fontFamily: 'AssistantRegular', position: 'sticky', borderRadius: 5, border: '1px solid rgba(53,51,49,0.1)', display: 'flex', flexDirection: 'column', flex: 1.5, paddingTop: 10, paddingLeft: 20, justifyContent: 'space-around', }}
                    className="shadow"
                >
                    <div style={{fontFamily: 'AssistantRegular', flexDirection: 'column', width: '100%' }}>
                        <span style={{fontSize: 20, fontFamily: 'AssistantRegular', fontWeight: 'bold', color: '#2d6331'}}>Contact</span>
                        <div style={{fontFamily: 'AssistantRegular', width: '100%', height: 1, backgroundColor: 'rgba(53,51,49,0.3)', }}></div>
                    </div>

                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span style={{fontSize: 18, fontFamily: 'AssistantRegular', fontWeight: '500', color: '#2d6331'}}>Address</span>
                        <span style={{fontFamily: 'AssistantRegular'}}>Mekong Riverside Boutique Resort & Spa,
                        </span>
                        <span style={{fontFamily: 'AssistantRegular'}}>
                            Hoa Qui Ward,
                        </span >
                        <span style={{fontFamily: 'AssistantRegular'}}>
                            Hoa Khanh Subdistrict,
                        </span>
                        <span style={{fontFamily: 'AssistantRegular'}}>
                            Cai Be District,
                        </span>
                        <span style={{fontFamily: 'AssistantRegular'}}>
                            Tien Giang Province,
                        </span>
                        <span style={{fontFamily: 'AssistantRegular'}}>



                            Vietnam</span>
                    </div>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span style={{fontFamily: 'AssistantRegular'}}>Phone</span>
                        <a style={{fontFamily: 'AssistantRegular', color: '#2d6331', fontStyle: 'italic',  }} href="tel:+84336132135">Phone: +84 336 132 135</a>
                    </div>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <span style={{fontFamily: 'AssistantRegular'}}>E-mail:</span>
                        <a style={{fontFamily: 'AssistantRegular', color: '#2d6331', fontStyle: 'italic' }} href="lichvutravel@yahoo.com">lichvutravel@yahoo.com</a>
                    </div>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <span style={{fontFamily: 'AssistantRegular'}}>Sales:</span>
                        <a style={{fontFamily: 'AssistantRegular', color: '#2d6331', fontStyle: 'italic' }} href="info@dulichdongduong.com">info@dulichdongduong.com</a>
                    </div>
                </div>
            </div>
            <div style={{fontFamily: 'AssistantRegular', width: '92%', flexDirection: 'column', alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{fontFamily: 'AssistantRegular', width: '65%', height: 1, backgroundColor: 'rgba(53,51,49,0.3)', marginTop: 20, marginBottom: 20, }}></div>
                <div style={{fontFamily: 'AssistantRegular', width: '100%', display: 'flex', flexDirection: 'row', marginRight: '10%' }}>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', flex: 3 }}>
                        <span style={{fontFamily: 'AssistantRegular', flex: 1, fontSize: 17, fontWeight: '500' }}>Description</span>
                        <div style={{fontFamily: 'AssistantRegular', flex: 4, display: 'flex', flexDirection: 'column' }}>
                            <span styles={{fontFamily: 'AssistantRegular'}}>-We are a boutique resort that consists of 50 DeluxeDoubleRiverviewBungalow/25 bungalows ( Each room 30m2) . Our bungalow style DeluxeDoubleRiverviewBungalow combined with the aesthetic beauty of our resort puts you into a Mekong Delta relaxing state of mind. -Maximum 2 adults and 01 child under the age of 12 years sharing bedding with parent in room (with Extra charge) -Note: Children: Under 3 Year Old free, from 03 to under 06 year old 5$, from 06 to under 12 year old 10$ Extra Bed: 20$ for room (max 01 extra bed )</span>
                            <span style={{fontFamily: 'AssistantRegular', marginTop: 10, fontSize: 17, fontWeight: '500' }}>Facilities</span>
                            <span styles={{fontFamily: 'AssistantRegular'}}>Our Deluxe Double Riverview Bungalow comes with the following features and facilities:</span>
                            <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'row', }}>
                                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Ensuite Bathroom</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Tea/Coffee Facilities</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Safe</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- 24 Hour Reception</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Free Mineral Water</span>
                                </div>
                                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 20 }}>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- TV</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Fridges</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Hairdryer</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Free toiletriess</span>
                                    <span styles={{fontFamily: 'AssistantRegular'}}>- Free Wifi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{fontFamily: 'AssistantRegular', flex: 1.5, width: '100%', height: '100%', paddingTop: 10, paddingLeft: 20, justifyContent: 'space-around', marginLeft: '9%', marginBottom: 10, }}>
                        <div style={{fontFamily: 'AssistantRegular', position: 'sticky', borderRadius: 5, border: '1px solid rgba(53,51,49,0.1)', display: 'flex', flexDirection: 'column', height: '60%', }}
                            className="shadow"
                        >
                            <div style={{fontFamily: 'AssistantRegular', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={phoneCall} style={{fontFamily: 'AssistantRegular', width: 100, height: 100, marginTop: 10 }}></img>
                                <span style={{fontFamily: 'AssistantRegular', fontSize: 30, fontWeight: 'bold', }}>Call Us</span>
                                <a style={{fontFamily: 'AssistantRegular', color: '#2d6331', fontStyle: 'italic', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }} href="tel:+84336132135">Phone: +84 336 132 135</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{fontFamily: 'AssistantRegular', width: '100%', height: 0.5, backgroundColor: 'rgba(53,51,49,0.3)', marginTop: 20 }}>

            </div>
        </div>
    )
}

export default RoomThree;