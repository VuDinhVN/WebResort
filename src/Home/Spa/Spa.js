import React, { useRef, useState, useEffect } from 'react';
import spa1 from '../../Icon/spa1.jpg'
import r3 from '../../Icon/r3.jpg'
import '../../App.css';

const Spa = () => {
    return (
        <div style={{fontFamily: 'AssistantRegular', display: 'flex', width: '100%', flexDirection: 'column'}}>
            <div style={{fontFamily: 'AssistantRegular', display: 'flex', width: '100%', height: '100%', flexDirection: 'column', backgroundColor: '#F9F9F9', paddingTop: 30, paddingBottom: 30, }}>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', paddingLeft: '10%', paddingRight: '10%' }} >

                    <img src={spa1} style={{fontFamily: 'AssistantRegular', width: 500, height: 500, overflow: 'hidden', borderRadius: 300, }} className="shadow"></img>

                    <div style={{fontFamily: 'AssistantRegular', paddingLeft: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span style={{fontFamily: 'AssistantRegular', fontSize: 20, fontWeight: '500' }}>Oasis Spa tại Mekong Riverside Boutique Resort</span>
                            <span styles={{fontFamily: 'AssistantRegular'}}> Oasis Spa là một hồ sen được bao quanh bởi vườn cây trái tự nhiên mời gọi bạn dành thời gian thư giãn thoải mái trong khi kết hợp massage chuyên nghiệp với thiên nhiên.</span>
                        </div>
                        <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span style={{fontFamily: 'AssistantRegular', fontSize: 20, fontWeight: '400' }}>Massage chân</span>
                            <span styles={{fontFamily: 'AssistantRegular'}}> Xoa bóp và châm cứu lòng bàn chân có ảnh hưởng sâu sắc đến hệ thần kinh. Do đó, nó có thể giúp loại bỏ mệt mỏi, phục hồi dòng chảy năng lượng và tăng cường sức khỏe tổng thể.</span>
                        </div>
                        <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span style={{fontFamily: 'AssistantRegular', fontSize: 20, fontWeight: '400' }}>Kích thích tự chữa bệnh</span>
                            <span styles={{fontFamily: 'AssistantRegular'}}>Massage chân mang lại sự cân bằng, kích thích quá trình tự chữa bệnh và tự phục hồi, đồng thời giúp tăng sức bền.</span>
                        </div>
                        <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span style={{fontFamily: 'AssistantRegular', fontSize: 20, fontWeight: '400' }}>Ngâm chân thảo dược</span>
                            <span styles={{fontFamily: 'AssistantRegular'}}> Massage chân tại Oasis Spa sử dụng nghệ thuật ngâm chân thảo dược với nhau để nâng cao hiệu quả.Nước ngâm chân thảo dược từ các nguyên liệu tự nhiên được thu hái trong khu vườn riêng của resort.</span>
                        </div>
                        <div style={{fontFamily: 'AssistantRegular', display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span style={{fontFamily: 'AssistantRegular', fontSize: 20, fontWeight: '400' }}>Mát xa cơ thể</span>
                            <span styles={{fontFamily: 'AssistantRegular'}}> Dịch vụ massage toàn thân chuyên nghiệp tại Oasis Spa Mekong Riverside Resort & Spa sẽ mang đến cho bạn cảm giác thoải mái, thư giãn sau những giờ làm việc mệt mỏi, hệ thần kinh được đánh thức giúp bạn lấy lại sức sống.</span>
                        </div>
                    </div>
                </div>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', paddingLeft: '10%', paddingRight: '10%' }}>
                    <span style={{fontFamily: 'AssistantRegular', fontSize: 17, fontWeight: '400' }}>Tại Mekong Riverside Resort & Spa, chúng tôi cam kết duy trì sự thân thiện với môi trường nhất có thể, đồng thời giúp đỡ cộng đồng địa phương.</span>
                    <span styles={{fontFamily: 'AssistantRegular'}}>

                        Từ hệ thống tưới tiêu chạy bằng cối xay gió giúp phân bổ nước từ sông Mekong đến khu vườn của chúng tôi, đến đèn chiếu sáng trên lối đi chạy bằng năng lượng mặt trời, chúng tôi muốn tạo ra dấu ấn sinh thái nhỏ nhất có thể và chỉ thuê nhân viên địa phương.
                    </span>
                </div>
            </div>
            <div>
                <div style={{fontFamily: 'AssistantRegular',
                    backgroundImage: `url(${r3})`, width: '100%', height: 400, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundOpacity: 0.2,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                }}>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, marginRight: '20%', marginLeft: '20%', backgroundColor: 'rgba(53,51,49,0.5)', }}>
                        <span style={{fontFamily: 'AssistantRegular', paddingBottom: 10, color: 'white', fontSize: 20, fontWeight: 'bold' }}>Tận hưởng bữa ăn tại Mekong Riverside Boutique Resort</span>
                        <span style={{fontFamily: 'AssistantRegular', color: 'white', textAlign: 'center', paddingBottom: 10 }}>Nơi nghỉ này có khu vườn hữu cơ rộng 7 ha phục vụ nhà hàng Mekong Medley của khu nghỉ mát.
                            Thực đơn cung cấp một loạt các món ăn truyền thống của Việt Nam và Quốc tế.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Spa