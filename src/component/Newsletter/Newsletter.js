import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Newsletter.scss'

function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newsletter__box container-fluid">
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <div className="newsletter__form">
                    <input type="text" className="newsletter__input" placeholder="Enter your Email" />
                    <button className="newsletter__sub">SUBSCRIBE <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
