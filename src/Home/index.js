import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';
import AppContainer from '../AppContainer/AppContainer';
import Order from './Order/Order';
import AppFooter from '../AppFooter/AppFooter';
import Activities from './Activities/Activities';
import VietNam from './Component/VietNam/index';
import Header from './Header';
import InfoResort from './InfoResort/InfoResort';
import Restaurant from './Restaurant/Restaurant';
import Spa from './Spa/Spa';
import SimpleImageSlider from 'react-simple-image-slider';
import ab from '../Icon/ab.jpg'
import bk from '../Icon/bk.png'

import { useLocation } from 'react-router-dom';

const images = [
	{ url: ab },
	{ url: bk },
	{ url: 'https://indochinatravel.ca/wp-content/uploads/2021/07/banner.jpg' }
];

const Home = (props) => {
	const {state} = useLocation()
	const [mess, setMess] = useState()
	useEffect(() => {
		if(state?.mess){
			setMess(state?.mess)
		}
	}, [state?.mess])

	useEffect(() => {
		if(mess){
			setTimeout(() => setMess(), 2000);
		}
	}, [mess])
	
		
	useEffect(() => {
		document.title = 'Mekong Resort'
	}, [])
	return (
		<AppContainer>
			<Header mess= {mess} />
			{/* {mess && <div>
				<span>{mess}</span>
				</div>} */}
			<div style={{  position: 'relative', textAlign: 'center', color: 'red', height: 450, marginTop: 59 }}>
				<SimpleImageSlider
					width={'100%'}
					height={300}
					images={images}
					showBullets={true}
					showNavs={true}
					navSize={20}
					slideDuration={1}
					autoPlay={true}
				/>
				<div style={{  position: 'absolute', bottom: 0, right: 50, width: 500, height: 300, }}>
					<Order type={1} />
				</div>
				<div style={{  position: 'absolute', bottom: 0, left: 50, width: 500, height: 350, }}>
					<Order type={2} />
				</div>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20}}>
				<span className = "font"  style={{ display: 'flex', width: '80%', flexDirection: 'column', alignItems: 'center'}}>
					Nestled along the bank of Can Tho River, Mekong Lodge is a charming eco-resort where design, comfort and nature are blended seamlessly together. Our lodge features 26 private bungalows (12 with pools), meticulously built to embody the local style of rural “garden cottage” surrounded by flowers and fruit trees. Right at the heart of Mekong Delta, Mekong Lodge offers a chance to explore one of the most beautiful areas in the region, which is still left untouched by modernization and development. Here, you can live not as a tourist but as a local with daily life going on around: vibrant river, fantastic floating market and quaint villages. Here, pristine tropical sun and nature are waiting for you all year round. Welcome to Mekong Resort and see the real Vietnam that others miss!
				</span>
			</div>

			<InfoResort />

			<VietNam />
			<Spa />
			<Restaurant />
			<Activities />
			<AppFooter />
		</AppContainer>
	)
};
export default Home;
