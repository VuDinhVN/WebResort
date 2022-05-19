import React, { useRef, useState, useEffect } from 'react';
import './VietNam.css';
import '../../App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import res2 from '../../Icon/res2.jpg'
import bak from '../../Icon/bak.jpeg'
import cls from '../../Icon/cls.jpeg'
const Restaurant = () => {
    return (
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }}>
            <div style={{ }}>
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
                        style={{ 
                            alignItems: 'center',
                            display: 'inline-block',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            overflow: 'hidden',

                        }}
                    >
                        <img src={res2} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Nhà hàng</span>
                            <span className = "font"  style={{  textAlign: 'center' }}>
                                Nhà hàng Mekong Medley trong khuôn viên của chúng tôi có sức chứa hơn 120 khách và phục vụ bữa sáng, bữa trưa và bữa tối tự chọn hàng ngày cũng như nhiều lựa chọn A La Carte khác nhau, từ Các món ăn truyền thống của Đồng bằng sông Cửu Long như Cá tai voi chiên cho đến Các món ăn phương Tây phong tục như Spaghetti Bolognese.
Chúng tôi có hai quán bar tại khu nghỉ mát. Một nằm trong Nhà hàng Medley Mekong và một nằm cạnh hồ bơi.</span>  
                          <button style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Thêm Thông Tin</button>
                        </div>

                    </Paper>
                    <Paper
                        elevation={3}
                        style={{ 
                            alignItems: 'center',
                            display: 'inline-block',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            marginLeft: 30,
                            marginRight: 30,
                        }}
                    >
                        <img src={bak} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Cửa hàng bánh mì</span>
                            <span className = "font"  style={{  textAlign: 'center' }}> Với danh mục đầu tư bao gồm hàng trăm loại bánh nướng khác nhau, nếu bạn đang tìm kiếm thứ gì đó cụ thể, vui lòng gửi email cho chúng tôi và chúng tôi rất tích cực rằng anh ấy có thể học hỏi hoặc đã biết cách làm món đó cho bạn.</span>
                            <button style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Thêm Thông Tin</button>
                        </div>
                    </Paper>
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
                        <img src={cls} alt="" style={{  width: 300, height: 300, overflow: 'hidden', }} />
                        <div style={{  display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <span className = "font"  style={{  fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, marginTop: 10 }}>Lớp học nấu ăn</span>
                            <span className = "font"  style={{  textAlign: 'center' }}>Lớp học nấu ăn của chúng tôi là cơ hội tuyệt vời để học một số món ăn truyền thống của Việt Nam. Chúng tôi sử dụng tất cả các nguyên liệu tươi từ khu vườn của chúng tôi. Bạn có tùy chọn để tự mình đi và chọn chúng!

                                Thực đơn lớp học nấu ăn
                                - Chả giò chả tôm
                                - Gà nấu lá húng dừa với rượu gạo
                                - Cơm kiểu Mê Kông</span>
                            <button style={{  marginTop: 10, marginBottom: 10, border: 'none', backgroundColor: '#2d6331', borderRadius: 20, padding: 10, color: 'white' }}>Thêm Thông Tin</button>
                        </div>
                    </Paper>

                </Box>
            </div>

        </div>
    );
};
export default Restaurant;
