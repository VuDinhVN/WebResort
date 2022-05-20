import React, { useRef, useState, useEffect } from 'react';
import './VietNam.css';
import '../../../App.css';
import r2 from '../../../Icon/r2.jpg';
import Intro2 from '../../../Icon/VN1.jpg';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import room1 from '../../../Icon/room1.jpg'
import room2 from '../../../Icon/room2.jpg'
import room3 from '../../../Icon/room3.jpg'
import { useNavigate } from 'react-router-dom';
const VietNam = () => {
	const navigate = useNavigate();

	const goToRoom1 = ()=>{
		navigate('/DeluxeDoubleRiverviewBungalow')
	}
	const goToRoom2 = () => {
		navigate('/DoubleorTwinRiverviewBungalow')
	}
	const goToRoom3 = () => {
		navigate('/DoubleRiverviewBungalow')
	}
	return (
		<div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
			{/* <img src={resort1} alt=""  style={{ width: '100%', height: 400,}} /> */}
			<div style={{ 
				backgroundImage: `url(${r2})`, width: '100%', height: 300, backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundOpacity: 0.2,
				display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,
				}}>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, marginRight: '20%', marginLeft: '20%', backgroundColor: 'rgba(53,51,49,0.5)', }}>
					<span className = "font"  style={{ paddingBottom: 10, color: 'white', fontSize: 20, fontWeight: 'bold' }}>Accommodation at Mekong Resort</span>
					<span className = "font"  style={{ color: 'white', textAlign: 'center', paddingBottom: 10, marginLeft: 20, marginRight: 20}}>Our bungalow style rooms combined with the aesthetic beauty of our resort puts you into a Mekong Delta relaxing state of mind</span>
					<span className = "font"  style={{  color: 'white', textAlign: 'center', paddingBottom: 10}}>We are a boutique resort that consists of 50 rooms/25 bungalows. Each bungalow contains two separate rooms and we have ten bungalows located directly on the Mekong River. Sit on your balcony porch and watch the local river life while enjoying room service from our Mekong Medley Restaurant.</span>
					<button onClick={goToRoom1} style={{  marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Our Rooms</button>
				</div>
			</div>
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
						<img src={room1} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
						<div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
							<span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10}}>Bungalow Deluxe Double Riverview</span>
							<span className = "font"  style={{ textAlign: 'center'}}>
							Ensuite Bathroom, TV, Tea/Coffee Facilities, Fridge, Safe, Hairdryer, 24 Hour Reception, Free toiletries, Free Mineral Water, Free Wifi</span>
							<button onClick={goToRoom1} style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>More Infomation</button>
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
						<img src={room2} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
						<div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
							<span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 , marginTop:10}}>Bungalow Double or Twin Riverview</span>
							<span className = "font"  style={{  textAlign: 'center' }}>
							Ensuite Bathroom, TV, Tea/Coffee Facilities, Fridge, Safe, Hairdryer, 24 Hour Reception, Free toiletries, Free Mineral Water, Free Wifi</span>
							<button onClick={goToRoom2} style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>More Infomation</button>
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
						<img src={room3} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
						<div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
							<span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Bungalow Double Riverview</span>
							<span className = "font"  style={{  textAlign: 'center' }}>
							Ensuite Bathroom, TV, Tea/Coffee Facilities, Fridge, Safe, Hairdryer, 24 Hour Reception, Free toiletries, Free Mineral Water, Free Wifi</span>
							<button onClick={goToRoom3} style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>More Infomation</button>
						</div>
					</Paper>

				</Box>
			</div>

		</div>
	);
};
export default VietNam;
