import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
const AppContainer = (props) =>{
    return(
        <div  style={{ 
       
        overflow: "hidden",
        width: "100%",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        float: "left",
        position: "absolute",
        left: "0",
        top: "0",
        height: "auto",
      }}>
            {props.children}
        </div>
    )
}

export default AppContainer;