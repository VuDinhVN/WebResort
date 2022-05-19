import React, { useRef, useState, useEffect } from 'react';
import '../../App.css';
import bed from '../../Icon/bed.png'

import spa from '../../Icon/spa.png'
import restaurant from '../../Icon/restaurant.png'
import { useNavigate } from 'react-router-dom';

const InfoResort = () => {
    const navigate = useNavigate();
    const goToRestaurants = () => {
        navigate('/restaurants');
    }

    const goToRooms = ()=>{
        navigate('/DeluxeDoubleRiverviewBungalow');
    }

    const goToActivities = () => {
        navigate('/activities');
    }
    return (
        <div style={{  width: '100%', paddingTop: 30, paddingBottom: 30, backgroundColor: '#F9F9F9' }}>
            <div style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%' }}>
                <div style={{  display: 'flex', width: '30%', height: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={bed} style={{  width: '20%', height: '20%' }}></img>
                        <span className = "font"  style={{  fontSize: '20', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Chỗ ở Mekong</span>
                        <span className = "font"  style={{  textAlign: 'center' }}>Chúng tôi là một khu nghỉ mát boutique bao gồm 25 nhà gỗ. Các phòng kiểu bungalow của chúng tôi kết hợp với vẻ đẹp thẩm mỹ của khu nghỉ dưỡng của chúng tôi đưa bạn vào trạng thái thư giãn của vùng Đồng bằng sông Cửu Long.
                        </span>
                    </div>
                    <button onClick={goToRooms} style={{  marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Xem Thêm</button>
                </div>
                <div style={{  display: 'flex', width: '30%', minHeight: '30%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={spa} style={{  width: '20%', height: '30%' }}></img>
                        <span className = "font"  style={{  fontSize: '20', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Mekong Spa</span>
                        <span className = "font"  style={{  textAlign: 'center' }}>Oasis Spa là một hồ sen được bao quanh bởi vườn cây trái tự nhiên mời gọi bạn dành thời gian thư giãn thoải mái trong khi kết hợp massage chuyên nghiệp với thiên nhiên.
                        </span> </div>
                    <button onClick={goToActivities} style={{  marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Xem Thêm</button>
                </div>
                <div style={{  display: 'flex', width: '30%', height: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={restaurant} style={{  width: '20%', height: '20%' }}></img>
                        <span className = "font"  style={{  fontSize: '20', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Nhà hàng Mekong</span>
                        <span className = "font"  style={{  textAlign: 'center' }}>Nhà hàng của chúng tôi phục vụ bữa sáng, bữa trưa và bữa tối tự chọn hàng ngày cũng như một loạt các lựa chọn A La Carte khác nhau, từ Món ăn truyền thống của Đồng bằng sông Cửu Long đến Món ăn phong tục của phương Tây.
                        </span>
                    </div>
                    <button onClick={goToRestaurants} style={{  marginTop: 20, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Xem Thêm</button>
                </div>
            </div>
        </div>

    )
}
export default InfoResort;