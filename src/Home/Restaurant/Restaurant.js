import React, { useRef, useState, useEffect } from 'react';
import './VietNam.css';
import '../../App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import res2 from '../../Icon/res2.jpg'
import bak from '../../Icon/bak.jpeg'
import cls from '../../Icon/cls.jpeg'
import { useNavigate } from 'react-router-dom';
const Restaurant = () => {
    const navigate = useNavigate();

    const goToRestaurants = ()=>{
        navigate('/restaurants');
    }
    return (
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }}>
            <div style={{ }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 300,
                            // height: 350
                        },
                        justifyContent: 'space-between',

                    }}
                >
                    <Paper
                        elevation={3}
                        style={{ 
                            alignItems: 'center',
                            display: 'inline-block',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            overflow: 'hidden',

                        }}
                    >
                        <img src={res2} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Restaurant</span>
                            <span className = "font"  style={{  textAlign: 'center' }}>
                            Our onsite Mekong Medley Restaurant seats over 120 guests and offers a daily breakfast, lunch and dinner buffet as well a variety of A La Carte options varying from Traditional Mekong Delta Dishes such as Fried Elephant Ear Fish to Customary Western Dishes like Spaghetti Bolognese. We have two bars at the resort. One is located in the Mekong Medley Restaurant and the other is by the poolside.</span>  
                          <button onClick={goToRestaurants} style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Read More</button>
                        </div>

                    </Paper>
                    <Paper
                        elevation={3}
                        style={{ 
                            alignItems: 'center',
                            display: 'inline-block',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            marginLeft: 30,
                            marginRight: 30,
                        }}
                    >
                        <img src={bak} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Bakery</span>
                            <span className = "font"  style={{  textAlign: 'center' }}> Our Pastry Chef, Vu Dinh, studied at the French Bakery School in Hue Vietnam. His talent and practiced skill is only exceeded by his passion for learning something new. Previously, he’s worked as the Demi Chef for The Sofitel Plaza in Hanoi and at La Residence Resort in Hue. With a portfolio containing hundreds of different baked goods, if you’re looking for something specific feel free to send us an email and we’re positive he can learn, or already knows how, to make it for your arrival.</span>
                            <button onClick={goToRestaurants} style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Read More</button>
                        </div>
                    </Paper>
                    <Paper
                        elevation={3}
                        style={{ 
                            alignItems: 'center',
                            display: 'inline-block',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        <img src={cls} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Cooking Class</span>
                            <span className = "font"  style={{  textAlign: 'center' }}>Our Cooking Class is a great opportunity to learn some traditional Vietnamese dishes. We utilize all the fresh ingredients from our garden. You have the option to go and pick them yourself!

                            Cooking Class Menu
                            - Pork and Prawn Spring Rolls
                            - Coconut Basil Chicken cooked with Rice Wine
                            - Mekong Style Rice</span>
                            <button onClick={goToRestaurants} style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Read Moren</button>
                        </div>
                    </Paper>

                </Box>
            </div>

        </div>
    );
};
export default Restaurant;
