import React, { useRef, useState, useEffect } from 'react';
import './VietNam.css';
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
		<div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
			{/* <img src={resort1} alt=""  style={{fontFamily: 'AssistantRegular',width: '100%', height: 400,}} /> */}
			<div style={{fontFamily: 'AssistantRegular',
				backgroundImage: `url(${r2})`, width: '100%', height: 300, backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundOpacity: 0.2,
				display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,
				}}>
				<div style={{fontFamily: 'AssistantRegular',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, marginRight: '20%', marginLeft: '20%', backgroundColor: 'rgba(53,51,49,0.5)', }}>
					<span style={{fontFamily: 'AssistantRegular',paddingBottom: 10, color: 'white', fontSize: 20, fontWeight: 'bold' }}>Chỗ ở tại Mekong Riverside Boutique Resort</span>
					<span style={{fontFamily: 'AssistantRegular',color: 'white', textAlign: 'center', paddingBottom: 10, marginLeft: 20, marginRight: 20}}>Các phòng theo phong cách bungalow của chúng tôi kết hợp với vẻ đẹp thẩm mỹ của khu nghỉ dưỡng của chúng tôi đưa bạn vào trạng thái thư giãn của đồng bằng sông Cửu Long</span>
					<span style={{fontFamily: 'AssistantRegular', color: 'white', textAlign: 'center', paddingBottom: 10}}>Chúng tôi là một khu nghỉ mát boutique bao gồm 50 phòng / 25 bungalow. Mỗi bungalow có hai phòng riêng biệt và chúng tôi có mười bungalow nằm ngay trên sông Mekong. Ngồi trên hiên ban công của bạn và ngắm nhìn cuộc sống sông nước địa phương trong khi tận hưởng dịch vụ ăn uống tại phòng từ Nhà hàng Mekong Medley của chúng tôi.</span>
					<button onClick={goToRoom1} style={{fontFamily: 'AssistantRegular', marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Những căn phòng của chúng ta</button>
				</div>
			</div>
			<div style={{fontFamily: 'AssistantRegular',}}>
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
						style={{fontFamily: 'AssistantRegular',
							alignItems: 'center',
							display: 'inline-block',
							justifyContent: 'flex-start',
							flexDirection: 'column',
							overflow: 'hidden',
							
						}}
					>
						<img src={room1} alt="" style={{fontFamily: 'AssistantRegular', width: 300, height: 300, overflow: 'hidden', }} />
						<div style={{fontFamily: 'AssistantRegular',display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
							<span style={{fontFamily: 'AssistantRegular', fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10}}>Bungalow Deluxe Double Riverview</span>
							<span style={{fontFamily: 'AssistantRegular',textAlign: 'center'}}>
								Phòng với phòng tắm riêng,TV,Dụng cụ pha trà/cà phê, Tủ lạnh,Két sắt,Máy xấy tóc, Lễ tân 24 giờ, Đồ vệ sinh cá nhân miễn phí, Nước khoáng miễn phí, Wifi miễn phí</span>
							<button onClick={goToRoom1} style={{fontFamily: 'AssistantRegular', marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Thêm Thông Tin</button>
						</div>
						
					</Paper>
					<Paper
						elevation={3}
						style={{fontFamily: 'AssistantRegular',
							alignItems: 'center',
							display: 'inline-block',
							justifyContent: 'flex-start',
							flexDirection: 'column',
							overflow: 'hidden',
							marginLeft: 30,
							marginRight: 30,
						}}
					>
						<img src={room2} alt="" style={{fontFamily: 'AssistantRegular', width: 300, height: 300, overflow: 'hidden', }} />
						<div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
							<span style={{fontFamily: 'AssistantRegular', fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 , marginTop:10}}>Bungalow Double or Twin Riverview</span>
							<span style={{fontFamily: 'AssistantRegular', textAlign: 'center' }}>
								Phòng với phòng tắm riêng,TV,Dụng cụ pha trà/cà phê, Tủ lạnh,Két sắt,Máy xấy tóc, Lễ tân 24 giờ, Đồ vệ sinh cá nhân miễn phí, Nước khoáng miễn phí, Wifi miễn phí</span>
							<button onClick={goToRoom2} style={{fontFamily: 'AssistantRegular', marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Thêm Thông Tin</button>
						</div>
					</Paper>
					<Paper
						elevation={3}
						style={{fontFamily: 'AssistantRegular',
							alignItems: 'center',
							display: 'inline-block',
							justifyContent: 'flex-start',
							flexDirection: 'column',
							overflow: 'hidden'
						}}
					>
						<img src={room3} alt="" style={{fontFamily: 'AssistantRegular', width: 300, height: 300, overflow: 'hidden', }} />
						<div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
							<span style={{fontFamily: 'AssistantRegular', fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Bungalow Double Riverview</span>
							<span style={{fontFamily: 'AssistantRegular', textAlign: 'center' }}>
								Phòng với phòng tắm riêng,TV,Dụng cụ pha trà/cà phê, Tủ lạnh,Két sắt,Máy xấy tóc, Lễ tân 24 giờ, Đồ vệ sinh cá nhân miễn phí, Nước khoáng miễn phí, Wifi miễn phí</span>
							<button onClick={goToRoom3} style={{fontFamily: 'AssistantRegular', marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Thêm Thông Tin</button>
						</div>
					</Paper>

				</Box>
			</div>

		</div>
	);
};
export default VietNam;
