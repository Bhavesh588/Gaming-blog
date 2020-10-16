import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import './Contact.scss'

function Contact() {

    return (
        <div className="contact">
            <div className="contact__title">
                <h1>Contact</h1>
            </div>
            <div className="contact__hero">
                <img className="contact__img" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-fox-3829227.jpg')} alt="First slide" />
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-7">
                        <div className="contact__form">
                            <input type="text" className="contact__input" placeholder="Your Name" />
                            <input type="text" className="contact__input" placeholder="Your Email" />
                            <input type="text" className="contact__input" placeholder="Subject" />
                            <textarea type="text" className="contact__message" rows="5" placeholder="Message" />
                            <button className="contact__sub">SEND MESSAGE <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact__content">
                            <h3>Howdy! Say Hello</h3>
                            <p className="contact__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-2">
                                        <LocationOnIcon className="icons" />
                                    </div>
                                    <div className="col-10">
                                        no 133, dum Apt., Navi Mumbai
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <PhoneIcon className="icons" />
                                    </div>
                                    <div className="col-10">
                                        +91 9624853671
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <MailIcon className="icons" />
                                    </div>
                                    <div className="col-10">
                                        dummyrecords@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
