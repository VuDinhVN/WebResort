import React, { useRef, useState, useEffect } from 'react';
import './VietNam.css';
import Intro from '../../../Icon/VN.jpg';
import Intro2 from '../../../Icon/VN1.jpg';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const VietNam = () => {
	return (
		<div style={{}}>
			<img src={Intro} alt="" width={'100%'} />
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: 1,
						width: 300,
						height: 350
					}
				}}
			>
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
					<img src={Intro2} alt="" style={{width: 300, height: 300, overflow: 'hidden',}} />
                    <button>OK</button>
				</Paper>
			</Box>
           
		</div>
	);
};
export default VietNam;
