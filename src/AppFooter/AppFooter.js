import React, { useRef, useState, useEffect } from 'react';

const AppFooter = () => {
    return (
        <div style={{ width: '100%', backgroundColor: '#2d6331', }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginLeft: '15%', marginRight: '10%', paddingBottom: 50, paddingTop:50 }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginRight: 20 }}>
                    <span style={{fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16}}>Liên hệ chúng tôi</span>
                    <span style={{color: 'white'}}>Mekong Riverside Boutique Resort & Spa,
                    </span>
                    <span style={{ color: 'white' }}>Hoa Qui Ward,
                        Hoa Khanh Subdistrict,
                        Cai Be District,
                        Tien Giang Province,
                        Vietnam</span>
                    <span style={{ color: 'white' }}>Điện thoại:+84 273 392 4466</span>
                    <span style={{ color: 'white' }}>E-mail:sales@mekongriversideresort.com</span>
                </div>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginRight: 20 }} >
                    <span style={{ fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Sự kiện sắp tới</span>
                    <span style={{ color: 'white' }}>Chúng tôi không có sự kiện sắp tới.</span>
                </div>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginRight: 20 }}>
                    <span style={{ fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Tin mới nhất</span>
                    <span style={{ color: 'white' }}>Chúng tôi không có bài báo nào được xuất bản cho đến nay.</span>
                </div>
                <div style={{ flex: 1, flexDirection: 'column', }}>
                    <span style={{ fontSize: 17, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Các trang</span>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 20}}>
                <span style={{ color: 'white'}}>Copyright © Dinh Vu 2022</span>
            </div>
        </div>
    )
}

export default AppFooter;