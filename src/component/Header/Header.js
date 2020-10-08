import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {

    // console.log(window.location.href)

    window.onload = () => {
        var items = document.getElementsByClassName("header__menuitem")
        var names = ["http://localhost:3000/", "http://localhost:3000/games", "", "", "http://localhost:3000/contact"]
        for(var i=0; i<items.length; i++) {
            if(window.location.href === names[i]) {
                document.getElementsByClassName("header__menuitem")[i].classList.add('active')
                document.getElementsByClassName("footer__menuitem")[i].classList.add('active')
            } else {
                document.getElementsByClassName("header__menuitem")[i].classList.remove('active')
                document.getElementsByClassName("footer__menuitem")[i].classList.remove('active')
            }
        }

    }

    function handleActive(home) {

        var items = document.getElementsByClassName("header__menuitem")
        var names = ["Home", "Games", "", "", "Contact"]
        for(var i=0; i<items.length; i++) {
            if(home === names[i]) {
                document.getElementsByClassName("header__menuitem")[i].classList.add('active')
                document.getElementsByClassName("footer__menuitem")[i].classList.add('active')
            } else {
                document.getElementsByClassName("header__menuitem")[i].classList.remove('active')
                document.getElementsByClassName("footer__menuitem")[i].classList.remove('active')
            }
        }
    }

    return (
        <div className="header">
            <div className="header__main container-fluid p-3">
                <h3>Logo</h3>
                <div>
                    <div className="header__menu">
                        <Link to="/" className="links" style={{ textDecoration: 'none', color: "white" }} name="Home" onClick={() => handleActive("Home")}>
                            <div className="header__menuitem">Home</div>
                        </Link>
                        <Link to="/games" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Games")}>
                            <div className="header__menuitem">Games</div>
                        </Link>
                        <div className="header__menuitem">News</div>
                        <div className="header__menuitem">Reviews</div>
                        
                        <Link to="/contact" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Contact")}>
                            <div className="header__menuitem">Contact</div>
                        </Link>
                    </div>
                </div>
                <div>Login/Register</div>
            </div>
        </div>
    )
}

export default Header
