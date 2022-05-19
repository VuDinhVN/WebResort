import React, { useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import '../App.css';
import call from '../Icon/call.png'

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
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <span style={{ marginTop: 10, marginBottom: 10, fontSize: 20, fontWeight: 'bold', width: '92%' }}>Double Riverview Bungalow</span>
            <div style={{ display: 'flex', width: '92%', marginBottom: 20, marginTop: 10, }}>

                <div style={{ display: 'flex', flexDirection: 'column', flex: 3.5 }}>

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
                <div style={{ position: 'sticky', borderRadius: 5, border: '1px solid rgba(53,51,49,0.1)', display: 'flex', flexDirection: 'column', flex: 1.5, paddingTop: 10, paddingLeft: 20, justifyContent: 'space-around', }}
                    className="shadow"
                >
                    <div style={{ flexDirection: 'column', width: '100%' }}>
                        <span>Contact</span>
                        <div style={{ width: '100%', height: 1, backgroundColor: 'rgba(53,51,49,0.3)', }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span>Address</span>
                        <span>Mekong Riverside Boutique Resort & Spa,
                        </span>
                        <span>
                            Hoa Qui Ward,
                        </span>
                        <span>
                            Hoa Khanh Subdistrict,
                        </span>
                        <span>
                            Cai Be District,
                        </span>
                        <span>
                            Tien Giang Province,
                        </span>
                        <span>



                            Vietnam</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span>Phone</span>
                        <span>+84 273 392 4466</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span>Email</span>
                        <span>sales@mekongriversideresort.com</span>
                    </div>
                </div>
            </div>
            <div style={{ width: '92%', flexDirection: 'column', alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '65%', height: 1, backgroundColor: 'rgba(53,51,49,0.3)', marginTop: 20, marginBottom: 20, }}></div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginRight: '10%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flex: 3 }}>
                        <span style={{ flex: 1, fontSize: 17, fontWeight: '500' }}>Description</span>
                        <div style={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
                            <span>-We are a boutique resort that consists of 50 DeluxeDoubleRiverviewBungalow/25 bungalows ( Each room 30m2) . Our bungalow style DeluxeDoubleRiverviewBungalow combined with the aesthetic beauty of our resort puts you into a Mekong Delta relaxing state of mind. -Maximum 2 adults and 01 child under the age of 12 years sharing bedding with parent in room (with Extra charge) -Note: Children: Under 3 Year Old free, from 03 to under 06 year old 5$, from 06 to under 12 year old 10$ Extra Bed: 20$ for room (max 01 extra bed )</span>
                            <span style={{ marginTop: 10, fontSize: 17, fontWeight: '500' }}>Facilities</span>
                            <span>Our Deluxe Double Riverview Bungalow comes with the following features and facilities:</span>
                            <div style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                                    <span>- Ensuite Bathroom</span>
                                    <span>- Tea/Coffee Facilities</span>
                                    <span>- Safe</span>
                                    <span>- 24 Hour Reception</span>
                                    <span>- Free Mineral Water</span>
                                </div>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 20 }}>
                                    <span>- TV</span>
                                    <span>- Fridges</span>
                                    <span>- Hairdryer</span>
                                    <span>- Free toiletriess</span>
                                    <span>- Free Wifi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1.5, width: '100%', height: '100%', paddingTop: 10, paddingLeft: 20, justifyContent: 'space-around', marginLeft: '9%', marginBottom: 10, }}>
                        <div style={{ position: 'sticky', borderRadius: 5, border: '1px solid rgba(53,51,49,0.1)', display: 'flex', flexDirection: 'column', height: '60%', }}
                            className="shadow"
                        >
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={call} style={{ width: 100, height: 100, marginTop: 10 }}></img>
                                <span style={{ fontSize: 30, fontWeight: 'bold', }}>Call Us</span>
                                <span style={{ fontSize: 30, fontWeight: 'bold', color: '#2d6331' }}>0968284223</span>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ width: '100%', height: 0.5, backgroundColor: 'rgba(53,51,49,0.3)', marginTop: 20 }}>

            </div>
        </div>
    )
}

export default RoomThree;