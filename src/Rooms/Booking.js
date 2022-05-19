import React, { useRef, useState, useEffect } from 'react';
import AppContainer from '../AppContainer/AppContainer';
import AppFooter from '../AppFooter/AppFooter';
import Header from '../Home/Header';
import r4 from '../Icon/r4.jpg';
import '../App.css';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const country = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ]


const Booking = () => {
    const {state} = useLocation();
    const {au,
        ch,
        date,
        date2,
        ifa,} = state

        const [dateB, setDate] = useState(date)
        const [dateB2, setDate2] = useState(date2)
        const [adult, setAdult] = useState(au)
        const [children, setCh] = useState(ch)
        const [Infant, setInfant]= useState(ifa)
   
        const onChange1 =(e)=>{
            const eDay = new Date(e.target.value)
            eDay.setDate(eDay.getDate() + 1)
            setDate(moment(new Date(e.target.value)).format('YYYY-MM-DD'))
            setDate2(moment(eDay).format('YYYY-MM-DD'))
        }
    
        const onChange2 =(e)=>{
            setDate2(moment(new Date(e.target.value)).format('YYYY-MM-DD'))
        }
    return (
        <AppContainer>
            <Header/>
            <div style={{  width: '100%', height: 300, marginTop: 80,}}>
                <img src={r4} style={{ width: '100%', height:300}}></img>
            </div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{  display: 'flex', flexDirection: 'column', width: '30 %', }}>
                    <span className = "font"  style={{  fontSize: 30, fontWeight: 'bold', textAlign: 'center', color:'#2d6331'}}>RESERVATION</span>
                <div style={{  width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10, }}></div>

                <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color:'#2d6331' }}>Check In</span>
                    <input  onChange={(e)=> onChange1(e)} value={dateB} min={moment(Date.now()).format('YYYY-MM-DD')} type="date" style={{  height: 35, marginBottom: 10, backgroundColor: 'rgba(53,51,49,0.3)', outline: 'none', border: 'none' }}></input>

                    <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Check Out</span>
                    <input  onChange={(e)=> onChange2(e)} value={dateB2} min={dateB2} type="date" style={{  height: 35, marginBottom: 10, backgroundColor: 'rgba(53,51,49,0.3)', outline: 'none', border: 'none' }}></input>

                    <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Adult</span>
                <select name="Adult" id="Adult" style={{  height: 35, marginBottom: 5 }} value={adult} onChange={e => setAdult(e.target.value)}>
                    <option value="0">Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                    <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Children</span>
                <select name="Children" id="Children" style={{  height: 35, marginBottom: 5}} value = {children} onChange={e => setCh(e.target.value)}>
                    <option value="0">Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                    <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Infant</span>
                <select name="Infant" id="Infant" style={{  height: 35, marginBottom: 10 }} value={Infant}  onChange={e => setInfant(e.target.value)}>
                    <option value="0">Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <span className = "font"  style={{  textAlign: 'center', fontStyle: 'italic', marginBottom: 10 }}>(Infant: 1-4 years and children: 5-11 years.)</span>


                    <span className = "font"  style={{  fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>How many DeluxeDoubleRiverviewBungalow do you need?</span>
                    <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Superior</span>
                <select name="Superior" id="Superior" style={{  height: 35, marginBottom: 5 }}>
                    <option value="volvo">0</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>


                    <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Deluxe</span>
                <select name="Deluxe" id="Deluxe" style={{  height: 35, marginBottom: 5 }}>
                    <option value="volvo">0</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>

                    <span className = "font"  style={{  fontSize: 17, fontWeight: '500', color: '#2d6331' }}>Suite</span>
                <select name="Suite" id="Suite" style={{  height: 35, marginBottom: 10 }}>
                    <option value="volvo">0</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="opel">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="opel">10</option>
                </select>
                <div style={{  width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10 }}></div>

                    <span className = "font"  style={{  fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Do you need the transfer?</span>
                <div style={{  marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <span className = "font"  styles={{  }}>I will arrange by myself or ask for advice</span>
                    </div>
                        <div> <input type="radio" id="html" name="fav_language" value="HTML" />
                        <span className = "font"  styles={{  }}>Private Car</span></div>
                        <div> <input type="radio" id="html" name="fav_language" value="HTML" />
                        <span className = "font"  styles={{  }}>Shuttle Bus</span></div>
                    <div style={{  width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>
                </div>

                    <span className = "font"  style={{  fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Activities</span>
                <div style={{  marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Boating to the vibrant Cai Be floating market</span>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Visiting local hosts and traditional handicraft families</span>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Preparing a typical Vietnamese meal with cooking demonstrations</span>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Cycling around quaint peaceful villages</span>
                    </div>
                    <div><input type="checkbox"></input>
                            <span className = "font"  styles={{  }}>Picking and tasting plenty of tropical fruit</span></div>
                </div>
                <div style={{  width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>

                    <span className = "font"  style={{  fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Restaurant</span>
                <div style={{  marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Breakfast</span>
                    </div>
                    <div><input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Lunch</span></div>
                    <div> <input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Dinner</span></div>
                </div>
                <div style={{  width: '100%', height: 0.5, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>

                    <span className = "font"  style={{  fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Massage</span>
                <div style={{  marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <input type="checkbox"></input>
                        <span className = "font"  styles={{  }}>Massage Service</span>
                    </div>
                </div> 
                 <div style={{  width: '100%', height: 1, backgroundColor: 'grey', marginBottom: 10, marginTop: 10 }}></div>

                    <span className = "font"  style={{  fontSize: 20, fontWeight: 'bold', color: '#2d6331' }}>Guest Information *</span>
                <select name="cars" id="cars" style={{  height: 35, marginBottom: 5, marginTop: 10 }}>
                    <option value="volvo">Mr</option>
                    <option value="volvo">Ms</option>
                    <option value="saab">Mrs</option>
                </select>
                <input type="text" placeholder="Full Name" style={{  height: 30, marginBottom: 5 }}></input>
                <select name="location" id="location" style={{  height: 35, marginBottom: 5 }}>
                  {country.map(e =>{ return (<option value={e.code}>{e.name}</option>)})}
                   
                </select>
                <input type="email" placeholder="Email" style={{  height: 30, marginBottom: 5 }}></input>
                <input type="tel" placeholder="Phone" style={{  height: 30, marginBottom: 5 }}></input>
                <textarea cols="40" rows="5" placeholder="Other requests for room & food ? What will you do after Mekong Lodge stay?"></textarea>

            <div style={{  width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10}}>

                        <div style={{  borderRadius: 5, display: 'flex', backgroundColor: '#2d6331', width: '70%', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                            <button style={{  fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', padding: 10, color: 'white' }}>Send</button>
                        </div>
            </div>
            </div>


        </div>
        <AppFooter/>
        </AppContainer>    )
}
export default Booking;