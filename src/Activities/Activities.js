import React, { useEffect, useState } from 'react';
import '../App.css';
import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter';
import Header from '../Home/Header';
import res from '../Icon/res.jpg';
import Order from '../Home/Order/Order'
import Activity from '../Home/Activities/Activities';

const Activities = (props) => {

    return (
        <AppContainer>
            <Header />
            <div style={{ position: 'relative', textAlign: 'center', color: 'red', height: 450, marginTop: 59 }}>
                <img src={res} style={{ height: 300, width: '100%' }}></img>
                <div style={{ position: 'absolute', bottom: 0, right: 50, width: 500, height: 300, }}>
                    <Order type={1} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 50, width: 500, height: 350, }}>
                    <Order type={2} />
                </div>
            </div>
            
            <Activity/>
            <AppFooter />
        </AppContainer>
    )
}

export default Activities;