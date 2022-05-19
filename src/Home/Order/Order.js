import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Order = ({type}) => {
    const navigate = useNavigate();
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const [date, setDate] = useState(moment(Date.now()).format('YYYY-MM-DD'))
    const [date2, setDate2] = useState(moment(tomorrow).format('YYYY-MM-DD'))
    const [au, setAu] = useState(0)
    const [ch, setCh] = useState(0)
    const [ifa, setIfa] = useState(0)

    const _setAu =()=>{
        if(au > 0) setAu(au -1)
        
    }

    const _setAu2 = () =>{
        if(au < 10) setAu(au+ 1)
    }

    const _setCh =()=>{
        if(ch > 0) setCh(ch -1)
        
    }

    const _setCh2 = () =>{
        if(ch < 10) setCh(ch+ 1)
    }

    const _setIfa =()=>{
        if(ifa > 0) setIfa(ifa -1)
        
    }

    const _setIfa2 = () =>{
        if(ifa < 10) setIfa(ifa+ 1)
    }


    const goToBooking = () => {
        navigate('/booking', {
            state: {
                date,
                date2,
                au,
                ch,
                ifa
            }
        });
    }

    const onChange1 =(e)=>{
        const eDay = new Date(e.target.value)
        eDay.setDate(eDay.getDate() + 1)
        setDate(moment(new Date(e.target.value)).format('YYYY-MM-DD'))
        setDate2(moment(eDay).format('YYYY-MM-DD'))
    }

    const onChange2 =(e)=>{
        setDate2(moment(new Date(e.target.value)).format('YYYY-MM-DD'))
    }



    if(type == 2) return(
        <div style={{fontFamily: 'AssistantRegular',
            display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center',  height: 550, marginLeft: '12%'
        }}>
            <div style={{fontFamily: 'AssistantRegular', flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{fontFamily: 'AssistantRegular', fontSize: 24, fontWeight: 'bold', color: '#2d6331' ,}}>
                    Mekong Riverside Resort & Spa - Booking
                </span>
                <span style={{fontFamily: 'AssistantRegular', color: '#2d6331', fontSize: 17, fontWeight: 'bold' }}>A member of IndochinaTravel</span>

                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', marginRight: 10,fontStyle: 'italic', }}>
                    <span style={{fontFamily: 'AssistantRegular', color: '#2d6331'}}>
                        Phone:&ensp;    
                    </span>
                    <a href="tel:+84336132135" style={{fontFamily: 'AssistantRegular',color: '#2d6331', fontStyle: 'italic',}}>+84 336 132 135</a>
                </div>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', marginLeft: 10,fontStyle: 'italic', }}>
                    <span style={{fontFamily: 'AssistantRegular', color: '#2d6331' }}>
                        Email:&ensp;
                    </span >
                    <a href="mailto:lichvutravel@yahoo.com" style={{fontFamily: 'AssistantRegular',color: '#2d6331', fontStyle: 'italic',}}>lichvutravel@yahoo.com</a>
                </div>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', marginLeft: 10,fontStyle: 'italic', }}>
                    <span style={{fontFamily: 'AssistantRegular', color: '#2d6331' }}>
                        Sales:&ensp;
                    </span >
                    <a href="mailto:info@dulichdongduong.com" style={{fontFamily: 'AssistantRegular',color: '#2d6331', fontStyle: 'italic',}}>info@dulichdongduong.com</a>
                </div>

        </div>
        </div>
    )
    return (
        <div style={{fontFamily: 'AssistantRegular',
            display: 'flex',
            flex: 2,
            backgroundColor: 'rgba(53,51,49,0.5)',
            borderRadius: 5,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
        }} className="shadow">
            <div style={{fontFamily: 'AssistantRegular', display: 'flex', paddingTop: 10, paddingBottom: 10 }}>
                <span style={{fontFamily: 'AssistantRegular', fontSize: 20, fontWeight: 'bold', color: 'white' }}>Book your stay</span>
            </div>
            <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', paddingBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>Check in</span>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', padding: 10, border: '2px solid white', borderRadius: 5 }}>
                        <input onChange={(e)=> onChange1(e)} value={date} min={moment(Date.now()).format('YYYY-MM-DD')} type="date" style={{fontFamily: 'AssistantRegular',fontSize: 17, width: 200, backgroundColor: 'rgba(53,51,49,0.0)', border: 'none', underline: 'none', color: 'white', outline: 'none' }}></input>
                    </div>
                </div>
                <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'column', paddingBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>Check out</span>
                    <div style={{fontFamily: 'AssistantRegular', display: 'flex', flexDirection: 'row', padding: 10, border: '2px solid white', borderRadius: 5 }}>
                        <input onChange={(e)=> onChange2(e)} value={date2} min={date}  type="date" style={{fontFamily: 'AssistantRegular',fontSize: 17, width: 200, backgroundColor: 'rgba(53,51,49,0.0)', border: 'none', underline: 'none', color: 'white', outline: 'none' }}></input>
                    </div>
                </div>

            </div>
            <div style={{fontFamily: 'AssistantRegular', paddingBottom: 5, display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <div style={{fontFamily: 'AssistantRegular',}}>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>Adults</span>
                    <div style={{fontFamily: 'AssistantRegular',
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button onClick={_setAu} style={{fontFamily: 'AssistantRegular', color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>{au}</span>
                        <button onClick={_setAu2} style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
                <div style={{fontFamily: 'AssistantRegular',}}>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>Children</span>
                    <div style={{fontFamily: 'AssistantRegular',
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button  onClick={_setCh} style={{fontFamily: 'AssistantRegular', color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>{ch}</span>
                        <button onClick={_setCh2} style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
                <div style={{fontFamily: 'AssistantRegular',}}>
                    <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>Infant</span>
                    <div style={{fontFamily: 'AssistantRegular',
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button onClick={_setIfa} style={{fontFamily: 'AssistantRegular', color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', fontSize: 17 }}>{ifa}</span>
                        <button onClick={_setIfa2} style={{fontFamily: 'AssistantRegular', color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
            </div>
            <div style={{fontFamily: 'AssistantRegular',marginTop: 15, borderRadius: 5, display: 'flex', backgroundColor: '#2d6331', width: '90%', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                <button onClick={goToBooking} style={{fontFamily: 'AssistantRegular', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', color: 'white', width: '100%', height: '100%', paddingBottom: 12, paddingTop: 12 }}>Book Now</button>
            </div>
        </div>
    )
}
export default Order