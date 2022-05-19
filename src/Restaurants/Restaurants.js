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

const cake = [
    {
        src: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/__page__bakery_mrr_002.jpg?width=0&height=0',
        width: 4,
        height: 3
    },
    {
        src: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/__page__bakery_mrr_003.jpg?width=0&height=0',
        width: 1,
        height: 1
    },
    {
        src: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/__page__bakery_mrr_004.jpg?width=0&height=0',
        width: 1,
        height: 1
    },
    {
        src: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/__page__bakery_mrr_005.jpg?width=0&height=0',
        width: 1,
        height: 1
    }
];

const cook =  [
    {
        src: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/__page__cookeryclass200.jpg?width=0&height=0&mode=crop',
        width: 4,
        height: 3
    },
    {
        src: 'https://myguestdiary-cdn-uploads.azureedge.net/uploads/1079/__page__cookeryclass200.2.jpg?width=0&height=0&mode=crop',
        width: 1,
        height: 1
    }
]

const Restaurants = (props) => {

    return (
        <AppContainer>
            <Header />
            <div style={{fontFamily: 'AssistantRegular', position: 'relative', textAlign: 'center', color: 'red', height: 450, marginTop: 59 }}>
                <img src={res} style={{fontFamily: 'AssistantRegular', height: 300, width: '100%' }}></img>
                <div style={{fontFamily: 'AssistantRegular', position: 'absolute', bottom: 0, right: 50, width: 500, height: 300, }}>
                    <Order type={1} />
                </div>
                <div style={{fontFamily: 'AssistantRegular', position: 'absolute', bottom: 0, left: 50, width: 500, height: 350, }}>
                    <Order type={2} />
                </div>
            </div>
           <div style={{fontFamily: 'AssistantRegular',backgroundColor: '#F9F9F9', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{fontFamily: 'AssistantRegular', width: '93%', flexDirection: 'row', display: 'flex', marginBottom: 20, marginTop: 10}}>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '6%' }}>
                        <span style={{fontFamily: 'AssistantRegular', fontSize: 24, fontWeight: 'bold', color: '#2d6331', marginBottom: 20 }}>The Restaurant</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>Overlooking Tien River, Mekong Lodge Riverside Restaurant offers you the very best view of waterfront life. Our restaurant and bar are open until midnight. Here you can find a wide selection of international delicacies and Mekong Delta signature food such as bloating fried elephant ear fish.</span>
                        <span style={{fontFamily: 'AssistantRegular', marginBottom: 10, marginTop: 10}}>You may request to be served at garden outside your bungalows. We can also arrange a romantic candle-lit dinner for you and your loved one only. Great food, excellent wine and cocktail, superb views and pristine natural settings, we have everything you need for fabulous dining experience.</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Ala Carte Menu</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Set Lunch/Dinner Menu</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Vegetarian Menu</span>

                    </div>
                    <div style={{fontFamily: 'AssistantRegular', flex: 1 }}>
                        <Gallery photos={photos} />
                    </div>
                </div>
           </div>
           <div style={{fontFamily: 'AssistantRegular', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{fontFamily: 'AssistantRegular', width: '93%', flexDirection: 'row', display: 'flex', marginBottom: 20, marginTop: 10}}>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '6%' }}>
                        <span style={{fontFamily: 'AssistantRegular', fontSize: 24, fontWeight: 'bold', color: '#2d6331', marginBottom: 20 }}>Bakery</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>Our Pastry Chef, Vu Dinh, studied at the French Bakery School in Hue Vietnam. His talent and practiced skill is only exceeded by his passion for learning something new. Previously, he’s worked as the Demi Chef for The Sofitel Plaza in Hanoi and at La Residence Resort in Hue. With a portfolio containing hundreds of different baked goods, if you’re looking for something specific feel free to send us an email and we’re positive he can learn, or already knows how, to make it for your arrival.</span>
                        <span style={{fontFamily: 'AssistantRegular', marginBottom: 10, marginTop: 10}}>You may request to be served at garden outside your bungalows. We can also arrange a romantic candle-lit dinner for you and your loved one only. Great food, excellent wine and cocktail, superb views and pristine natural settings, we have everything you need for fabulous dining experience.</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Tiramisu Cheesecake</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Prosecco Sabayon</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Mango Mousse Cake
(we grow the mangos in the garden)</span>
<span styles={{fontFamily: 'AssistantRegular'}}>Banana Cake
(we grow the bananas in the garden)</span>

                    </div>
                    <div style={{fontFamily: 'AssistantRegular', flex: 1 }}>
                        <Gallery photos={cake} />
                    </div>
                </div>
           </div>

           <div style={{fontFamily: 'AssistantRegular',backgroundColor: '#F9F9F9', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{fontFamily: 'AssistantRegular', width: '93%', flexDirection: 'row', display: 'flex', marginBottom: 20, marginTop: 10}}>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '6%' }}>
                        <span style={{fontFamily: 'AssistantRegular', fontSize: 24, fontWeight: 'bold', color: '#2d6331', marginBottom: 20 }}>Cooking Class</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>Our Cooking Class is a great opportunity to learn some traditional Vietnamese dishes. We utilize all the fresh ingredients from our garden. You have the option to go and pick them yourself!</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>Pork and Prawn Spring Rolls – dice the ingredients, mix them together, and roll your own!</span>
                        <span style={{fontFamily: 'AssistantRegular', fontSize: 20, fontWeight: 'bold', color: '#2d6331', marginTop: 20 }}> Cooking Class Menu</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Pork and Prawn Spring Rolls – dice the ingredients, mix them together, and roll your own!</span>
                        <span styles={{fontFamily: 'AssistantRegular'}}>- Coconut Basil Chicken cooked with Rice Wine – It starts with roasting garlic on a pan, and finishes by simmering in a clay pot.</span>
<span styles={{fontFamily: 'AssistantRegular'}}>- Mekong Style Rice – Throw in the ingredients, mix together and wrap it in a Lotus Leaf so it stays sticky sweet.</span>

                    </div>
                    <div style={{fontFamily: 'AssistantRegular', flex: 1 }}>
                        <Gallery photos={cook} />
                    </div>
                </div>
           </div>

            <AppFooter />
        </AppContainer>
    )
}

export default Restaurants;