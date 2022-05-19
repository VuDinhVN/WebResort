import React, { useRef, useState, useEffect } from 'react';
import a1 from '../../Icon/a1.png'
import a2 from '../../Icon/a2.png'
import a3 from '../../Icon/a3.png'
import a4 from '../../Icon/a4.png'
import a5 from '../../Icon/a5.png'


const Activities = ()=>{
    return (
        <div style={{display: 'flex', width: '100%', flexDirection: 'column', backgroundColor: '#F9F9F9', paddingTop: 20, paddingBottom: 20}}>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: 30}}>
                <span style={{fontSize: 24, fontWeight: 'bold', color: '#2d6331'}}>Hoạt Động</span>
            </div>
            <div style={{ display: 'flex', paddingLeft: '10%', paddingRight: '10%'}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={a1} alt="" style={{ width: 100, height: 100 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1}}>
                        <span style={{fontSize:18, fontWeight: '500'}}>Đi xe đạp</span>
                        <span>Khám phá Đồng bằng sông Cửu Long với việc đạp xe trên những con đường quanh co yên tĩnh và băng qua những con kênh.</span>
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={a2} alt="" style={{ width: 100, height: 100, }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 18, fontWeight: '500' }}>
                            Chèo thuyền</span>
                        <span>Hãy thả phao trên sông Mekong và quan sát phong cách sống nổi của người dân địa phương. </span>
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', paddingLeft: '10%', paddingRight: '10%' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={a3} alt="" style={{ width: 100, height: 100, }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 18, fontWeight: '500' }}>
                            Lớp học nấu ăn</span>
                        <span>Hướng dẫn bạn cách làm một số món ngon địa phương này để bạn có thể trải nghiệm hương vị và phong vị ẩm thực Việt Nam.</span>
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={a4} alt="" style={{ width: 100, height: 100, }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 18, fontWeight: '500' }}>
                            Mát xa</span>
                        <span>Để giúp bạn thực sự thư giãn, spa thanh bình của chúng tôi cung cấp dịch vụ mát-xa truyền thống, mang đến liệu pháp hoàn hảo sau một ngày khám phá dũng cảm.</span>
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', paddingLeft: '10%', paddingRight: '50%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={a5} alt="" style={{ width: 100, height: 100, }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 18, fontWeight: '500' }}>Thị trường nội địa</span>
                        <span>Bạn có muốn tận hưởng cảm giác náo nhiệt khi bước vào một khu chợ địa phương không? Từ lâu, Chợ Cái Bè đã được biết đến là trung tâm buôn bán nằm cạnh sông Tiền nên đừng bỏ qua một chợ phụ thiết yếu.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities
