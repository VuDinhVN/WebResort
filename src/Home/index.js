import React, {useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';
import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter';
import a1 from '../Icon/a1.png';
import a2 from '../Icon/a2.png';
import a3 from '../Icon/a3.png';
import a4 from '../Icon/a4.png';
import a5 from '../Icon/a5.png';
import Activities from './Activities/Activities';
import Header2 from './Component/Header';
import VietNam from './Component/VietNam/index';
import Header from './Header';
import InfoResort from './InfoResort/InfoResort';
import Restaurant from './Restaurant/Restaurant';
import SlidesHome from './SilesHome/SilesHome';
import Spa from './Spa/Spa';








const collection = [
	{ src: a1, caption: "Caption one" },
	{ src: a2, caption: "Caption two" },
	{ src: a3, caption: "Caption three" },
	{ src: a4, caption: "Caption four" },
	{ src: a5, caption: "Caption five" },
  ];

const phone = 'Điện thoại: '

const Home = (props) => {
	useEffect(()=>{
		document.title = 'Mekong Resort'
	},[])
	return (
		<AppContainer>∏
			<Header></Header>
			<Header2></Header2>
			<div style={{display: 'flex', width: '100%', height: '10%'}}>
			<SlidesHome
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />
			</div>
			
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
