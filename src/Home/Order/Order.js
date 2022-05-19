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
        <div style={{
            display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center',  height: 550, marginLeft: '12%'
        }}>
            <div style={{ flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 24, fontWeight: 'bold', color: '#2d6331' }}>
                    Mekong Riverside Resort & Spa - Booking
                </span>

                <div style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
                    <span style={{ color: '#2d6331'}}>
                        Phone:
                    </span>
                    <span style={{ marginLeft: 5, color: '#2d6331', fontStyle: 'italic', }}>
                        0968284223
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}>
                    <span style={{ color: '#2d6331' }}>
                        Email:
                    </span >
                    <span style={{ marginLeft: 5, color: '#2d6331', fontStyle: 'italic', }}>
                        vudinh.job@gmail.com
                    </span>
                </div>

        </div>
        </div>
    )
    return (
        <div style={{
            display: 'flex',
            flex: 2,
            backgroundColor: 'rgba(53,51,49,0.5)',
            borderRadius: 5,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
        }} className="shadow">
            <div style={{ display: 'flex', paddingTop: 10, paddingBottom: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Book your stay</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Check in</span>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: 10, border: '2px solid white', borderRadius: 5 }}>
                        <input onChange={(e)=> onChange1(e)} value={date} min={moment(Date.now()).format('YYYY-MM-DD')} type="date" style={{fontSize: 17, width: 200, backgroundColor: 'rgba(53,51,49,0.0)', border: 'none', underline: 'none', color: 'white', outline: 'none' }}></input>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Check out</span>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: 10, border: '2px solid white', borderRadius: 5 }}>
                        <input onChange={(e)=> onChange2(e)} value={date2} min={date}  type="date" style={{fontSize: 17, width: 200, backgroundColor: 'rgba(53,51,49,0.0)', border: 'none', underline: 'none', color: 'white', outline: 'none' }}></input>
                    </div>
                </div>

            </div>
            <div style={{ paddingBottom: 5, display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <div style={{}}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Adults</span>
                    <div style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button onClick={_setAu} style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{au}</span>
                        <button onClick={_setAu2} style={{ color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
                <div style={{}}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Children</span>
                    <div style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button  onClick={_setCh} style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{ch}</span>
                        <button onClick={_setCh2} style={{ color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
                <div style={{}}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Infant</span>
                    <div style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        border: '2px solid white',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                        borderRadius: 5
                    }}>
                        <button onClick={_setIfa} style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer', paddingRight: 30 }}>-</button>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{ifa}</span>
                        <button onClick={_setIfa2} style={{ color: 'white', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', paddingLeft: 30 }}>+</button>
                    </div>
                </div>
            </div>
            <div style={{marginTop: 15, borderRadius: 5, display: 'flex', backgroundColor: '#2d6331', width: '90%', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                <button onClick={goToBooking} style={{ fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', color: 'white', width: '100%', height: '100%', paddingBottom: 12, paddingTop: 12 }}>Book Now</button>
            </div>
        </div>
    )
}
export default Order