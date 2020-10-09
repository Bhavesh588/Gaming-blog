import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';

import { Link } from 'react-router-dom';

import './Footer.scss'

function Footer() {

    window.onload = () => {
        var items = document.getElementsByClassName("header__menuitem")
        var names = ["http://localhost:3000/", "http://localhost:3000/games", "http://localhost:3000/blognews", "http://localhost:3000/contact"]
        for(var i=0; i<items.length; i++) {
            if(window.location.href === names[i]) {
                document.getElementsByClassName("header__menuitem")[i].classList.add('active')
                document.getElementsByClassName("footer__menuitem")[i].classList.add('active')
            }
        }

        var items2 = document.getElementsByClassName("header__menuitemdrop")
        for(var j=0; j<items2.length; j++) {
            if(window.location.href === names[j]) {
                document.getElementsByClassName("header__menuitemdrop")[j].classList.add('active')
            }
        }

    }

    function handleActive(home) {

        var items = document.getElementsByClassName("header__menuitem")
        var names = ["Home", "Games", "BlogNews", "Contact"]
        for(var i=0; i<items.length; i++) {
            var clnam = document.getElementsByClassName("header__menuitem")[i].classList[1]
            if(home === names[i]) {
                document.getElementsByClassName("header__menuitem")[i].classList.add('active')
                document.getElementsByClassName("footer__menuitem")[i].classList.add('active')
            }
            if(clnam === 'active') {
                document.getElementsByClassName("header__menuitem")[i].classList.remove('active')
                document.getElementsByClassName("footer__menuitem")[i].classList.remove('active')
            }
        }
        var items2 = document.getElementsByClassName("header__menuitemdrop")
        for(var j=0; j<items2.length; j++) {
            var clnam2 = document.getElementsByClassName("header__menuitemdrop")[j].classList[1]
            if(home === names[j]) {
                document.getElementsByClassName("header__menuitemdrop")[j].classList.add('active')
            }
            if(clnam2 === 'active') {
                document.getElementsByClassName("header__menuitemdrop")[j].classList.remove('active')
            }
        }
    }

    return (
        <div className="footer">
            <div className="footer__box container-fluid">
                <h3>Logo</h3>
                <div>
                    <div className="footer__menu">
                        <Link to="/" className="links" style={{ textDecoration: 'none', color: "white" }} name="Home" onClick={() => handleActive("Home")}>
                            <div className="footer__menuitem">Home</div>
                        </Link>
                        <Link to="/games" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Games")}>
                            <div className="footer__menuitem">Games</div>
                        </Link>
                        <Link to="/blognews" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("BlogNews")}>
                            <div className="footer__menuitem">Blog News</div>
                        </Link>
                        <Link to="/contact" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Contact")}>
                            <div className="footer__menuitem">Contact</div>
                        </Link>
                    </div>
                </div>
                <div>
                    <FacebookIcon className="footer__followicon" />
                    <TwitterIcon className="footer__followicon" />
                    <InstagramIcon className="footer__followicon" />
                </div>
            </div>
            <div className="footer__copyright">
                Copyright <CopyrightIcon className="copyrighticon" /> All Rights Reserved by SomeGuy
            </div>
        </div>
    )
}

export default Footer
