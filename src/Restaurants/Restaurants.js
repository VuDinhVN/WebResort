import React, { useEffect, useState } from 'react';
import '../App.css';
import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter';
import Header from '../Home/Header';
import res from '../Icon/res.jpg';
import Order from '../Home/Order/Order'
import Gallery from "react-photo-gallery"
import res1 from '../Icon/res1.jpg'
import res2 from '../Icon/res2.jpg'
import res3 from '../Icon/res3.jpg'
import res4 from '../Icon/res4.jpg'

import { useLocation } from "react-router-dom";



const photos = [
    {
        src: res1,
        width: 4,
        height: 3
    },
    {
        src: res2,
        width: 1,
        height: 1
    },
    {
        src: res3,
        width: 1,
        height: 1
    },
    {
        src: res4,
        width: 1,
        height: 1
    }
];

const Restaurants = (props) => {

    return (
        <AppContainer>
            <Header />
            <div style={{ position: 'relative', textAlign: 'center', color: 'red', height: 450, marginTop: 59 }}>
                <img src={res} style={{ height: 300, width: '100%' }}></img>
                <div style={{ position: 'absolute', bottom: 0, right: 50, width: 500, height: 300, }}>
                    <Order type={1} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 50, width: 500, height: 350, }}>
                    <Order type={2} />
                </div>
            </div>
           <div style={{backgroundColor: '#F9F9F9', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ width: '93%', flexDirection: 'row', display: 'flex', marginBottom: 20, marginTop: 10}}>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '6%' }}>
                        <span style={{ fontSize: 24, fontWeight: 'bold', color: '#2d6331', marginBottom: 20 }}>The Restaurant</span>
                        <span>Overlooking Tien River, Mekong Lodge Riverside Restaurant offers you the very best view of waterfront life. Our restaurant and bar are open until midnight. Here you can find a wide selection of international delicacies and Mekong Delta signature food such as bloating fried elephant ear fish.</span>
                        <span style={{ marginBottom: 10, marginTop: 10}}>You may request to be served at garden outside your bungalows. We can also arrange a romantic candle-lit dinner for you and your loved one only. Great food, excellent wine and cocktail, superb views and pristine natural settings, we have everything you need for fabulous dining experience.</span>
                        <span>- Ala Carte Menu</span>
                        <span>- Set Lunch/Dinner Menu</span>
                        <span>- Vegetarian Menu</span>

                    </div>
                    <div style={{ flex: 1 }}>
                        <Gallery photos={photos} />
                    </div>
                </div>
           </div>

            <AppFooter />
        </AppContainer>
    )
}

export default Restaurants;