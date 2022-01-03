import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import SimpleImageSlider from 'react-simple-image-slider';
import VietNam from './Component/VietNam/index';
import Introduce from './Component/Introduce/index';
const Home = (props) => {
	const images = [
		{ url: 'https://indochinatravel.ca/wp-content/uploads/2021/07/banner.jpg' },
		{ url: 'https://indochinatravel.ca/wp-content/uploads/2021/07/banner.jpg' },
		{ url: 'https://indochinatravel.ca/wp-content/uploads/2021/07/banner.jpg' }
	];
	return (
		<div style={{ width: '100%' }}>
			<SimpleImageSlider
				width={ '100%'}
				height={300}
				images={images}
				showBullets={true}
				showNavs={true}
				navSize={30}
				slideDuration={1}
				autoPlay={true}
			/>
		</div>
	);
};
export default Home;
