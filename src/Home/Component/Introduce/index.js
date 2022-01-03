import React, { useRef, useState, useEffect } from 'react';
import Intro from '../../../Icon/bg2.jpg'
import Exclusive from './Exclusive'
import Experiences from './Experiences';
const Introduce = () => {
	return (
		<div>
            <Exclusive/>
            <Experiences/>
        </div>
	);
};
export default Introduce;
