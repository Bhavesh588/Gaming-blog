import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from 'axios';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './Newsletter.scss'

function Newsletter() {

    const [email, setEmail] = useState('')

    var data = {
        email: email
    }

    function onSubmit(e) {
        axios.post('http://localhost:5000/email', data)
            .then(res => {
                if(res.data === "Record Inserted") {
                    document.getElementById("success").classList.add("d-inline")
                    document.getElementById("hide").classList.add("d-none")
                }
                setEmail('')
            })
    }

    return (
        <div className="newsletter">
            <div className="newsletter__box container-fluid">
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <div className="newsletter__form">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row d-none" id="success">
                                <div className="col text-center"><h5 className="bg-success p-5 newsletter__inplace"><CheckCircleOutlineIcon /> Email Registered Successfully</h5></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row" id="hide">
                                <div className="col-md-9 text-right">
                                    <input type="text" className="newsletter__input" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="newsletter__sub" onClick={onSubmit}>SUBSCRIBE <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
