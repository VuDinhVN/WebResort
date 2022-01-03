import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import { HiMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
const HeaderContainer = () => {
	return (
		<div
			style={{
				backgroundColor: '#006622',
				width: '100%',
				flexDirection: 'row',
				display: 'flex',
				justifyContent: 'space-between',
				// paddingBottom: 5,
				// paddingTop: 5,
				flex: 1
			}}
		>
			<div style={{ flexDirection: 'row', display: 'flex', flex: 2, justifyContent: 'space-around' }}>
				<div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
					<HiOutlinePhone style={{ width: 25, height: 17, color: 'white' }} />
					<div style={{}}>(+84) 968284223</div>
				</div>
				<div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
					<HiMail style={{ width: 30, height: 20, color: 'white' }} />
					<div style={{}}>vudinh.job@gmail.com</div>
				</div>
			</div>
			<div
				style={{
					flex: 3,
					justifyContent: 'flex-end',
					display: 'flex',
					color: 'white',
					marginRight: 10,
					alignItems: 'center',
                  
				}}
			>
				<MdLanguage style={{ width: 25, height: 20, color: 'white' }} />
				<div style={{ fontSize: 15 }}>VN</div>
			</div>
		</div>
	);
};
export default HeaderContainer;
