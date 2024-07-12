import React from 'react';
import { Detector } from "react-detect-offline";
import img from "../img/icons8-wi-fi-disconnected-100.png"
import img2 from "../img/icons8-wi-fi-connected-100.png"
import './Check.css'


const Check = props => {
    return (
        <div>
            <Detector
                render={({ online })=>(
                    online ? (
                        <div className='online'>
                            <img src={img2}/>
                            <h1>Online Now</h1>
                            {props.children}
                        </div>
                    ) : (
                        <div className='offline'>
                            <div>
                                <img src={img} alt="Offline" />
                                <h1>Offline Now</h1>    
                            </div>
                            <ul>
                                <li>Checking the Connection</li>
                                <li>Checking the proxy and the fire wall</li>
                                <li>Running Windows Network Diagnostics</li>
                            </ul>
                        </div>
                    )
                )}
            />
        </div>
    )
}

export default Check;