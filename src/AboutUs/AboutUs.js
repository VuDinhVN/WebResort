import React, { useEffect, useState } from 'react';
import '../App.css';
import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter';
import Header from '../Home/Header';
import ab from '../Icon/ab.jpg';
import ab1 from '../Icon/ab1.jpg';
import ab2 from '../Icon/ab2.png';
import ab3 from '../Icon/ab3.jpg';

import Order from '../Home/Order/Order'


const AboutUs = (props) => {

    return (
        <AppContainer>
            <Header />
            <div style={{ position: 'relative', textAlign: 'center', color: 'red', height: 450, marginTop: 59 }}>
                <img src={ab} style={{ height: 300, width: '100%' }}></img>
                <div style={{ position: 'absolute', bottom: 0, right: 50, width: 500, height: 300, }}>
                    <Order type={1} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 50, width: 500, height: 350, }}>
                    <Order type={2} />
                </div>
            </div>

            <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '70%', display: 'flex', flexDirection: 'column',}}>
                    <span style={{fontSize: 26, fontWeight: 'bold', color: '#2d6331', marginBottom: 10}}>ABOUT MEKONG RESORT</span>
                    <span>Only 120 km South-West from Ho Chi Minh, approximately 2.5 hours driving, we’ll escape totally from the bustling city to another world: a world of water and lush vegetation, a world where people have a relaxed and happy life together. Cai Be is the typical image of Mekong Delta: bustling floating market, traditional handicraft villages and fruit orchards. Mekong Lodge is hidden among these luxuriant gardens of mango, longan, rambutan, durian trees and flowers.</span>
                   <div style={{marginTop: 10, marginBottom: 10,width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={ab1} style={{ width: '80%'}} ></img>
                   </div>
                    <span>To reach Mekong Lodge, the only way is by boat as it is situated on an island deposited by the Tien River. Here, boat is the most popular means of transport for locals to move from one place to another. Mekong Lodge has 26 private charming Bungalows and a Riverside Restaurant, stretching in an area of more than 20.000 m2. Our ideas were since long time ago and our dream came true in November 2010. Mekong Lodge is now ready to welcome travelers who are looking for a real discovery in Mekong Delta. Mekong Lodge is the only Eco-resort in Mekong Delta at the moment!</span>
                    <div style={{ marginTop: 10, marginBottom: 10,width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={ab2} style={{ width: '80%' }} ></img>
                    </div>
                    <span>Mekong Lodge is the first accommodation property that is fully committed and engaged in Responsible Tourism in Mekong Delta, Vietnam. We build green bungalows and services that bring travelers delightful experience of Mekong Delta as well as contribute to sustainable development of local environment and community. </span>
                    <span style={{fontWeight: '500', marginTop: 10}}>Our social responsibilities:</span>
                    <div style={{marginLeft: 20, display: 'flex', flexDirection: 'column'}}>
                        <span>•    We employ only local people and local guides for our service team</span>
                        <span>•    We encourage travellers to purchase food, drinks, souvenirs, etc produced by locals at a fair price for both sides</span>
                        <span>•    We source local ingredients for all meals provided in our lodge</span>
                        <span>•    We support local charity organizations such as schools and training centers for the disadvantaged. </span>
                        <span>•    We involve local people in decisions that enhance their well-being</span>
                        <span>•    We provide our employees with good working conditions and equal profit-sharing scheme.</span>
                        <span>•   Our itineraries are off-beaten: we allow travelers to feel free to engage into local life, engender respect between tourists and hosts, and builds local pride and confidence.</span>
                    </div>
                    <div style={{ marginTop: 10, marginBottom: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={ab3} style={{ width: '80%' }} ></img>
                    </div>
                    <span style={{ fontWeight: '500', marginTop: 10 }}>Our environmental responsibilities:</span>
                    <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column', marginBottom: 20}}>
                    <span>•    Our bungalows are made from eco-friendly materials and purposefully designed to produce no waste as well as mitigate its carbon emission to Mekong Delta and its environment.</span>
                    <span>•    We utilize solar energy and rain water for proper use</span>
                    <span>•    We get our travelers involved in responsible tourism activities with us</span>
                    <span>•    We organize and take part in regional environmental campaigns like the yearly “Green Day”, the Earth Hour, etc</span>

                    <span>•    We planted a lot of tree and flower before the lodge construction and continue growing more and more greenery. </span>
                </div>
                </div>
            </div>


            <AppFooter />
        </AppContainer>
    )
}

export default AboutUs;