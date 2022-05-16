import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import SimpleImageSlider from 'react-simple-image-slider';
import VietNam from './Component/VietNam/index';
import Introduce from './Component/Introduce/index'

import tab from '../Icon/bg-menu.png'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter'
import InfoResort from './InfoResort/InfoResort'
import Spa from './Spa/Spa'
import Restaurant from './Restaurant/Restaurant'
import Activities from './Activities/Activities'

import Header from './Header';
import Header2 from './Component/Header';

import SlidesHome from './SilesHome/SilesHome'

import a1 from '../Icon/a1.png'
import a2 from '../Icon/a2.png'
import a3 from '../Icon/a3.png'
import a4 from '../Icon/a4.png'
import a5 from '../Icon/a5.png'

const collection = [
	{ src: a1, caption: "Caption one" },
	{ src: a2, caption: "Caption two" },
	{ src: a3, caption: "Caption three" },
	{ src: a4, caption: "Caption four" },
	{ src: a5, caption: "Caption five" },
  ];

const phone = 'Điện thoại: '

const Home = (props) => {
	return (
		<AppContainer>
			<Header></Header>
			<Header2></Header2>
			<SlidesHome
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />
			<div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
				<span style={{ fontSize: 20, fontWeight: 'bold' }}>
					Mekong Riverside Resort & Spa
				</span>
			
					<div style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
						<span>
							{phone}
						</span>
					<span style={{ marginLeft: 5, color: 'green', fontStyle: 'italic',}}>
							0968284223
						</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}>
						<span>
							Email:
						</span>
					<span style={{ marginLeft: 5, color: 'green', fontStyle: 'italic', }}>
							vudinh.job@gmail.com
						</span>
					</div>
			
			</div>
			<InfoResort />

			<VietNam />
			<Spa />
			<Restaurant/>
			<Activities/>
			<AppFooter/>
		</AppContainer>
	)
};
export default Home;
