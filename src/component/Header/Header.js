import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {

    // console.log(window.location.href)

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
        <div className="header">
            <nav className="navbar navbar-inverse">
                <div className="header__main container-fluid">
                    <div className="navbar-header">
                        <h3>Logo</h3>
                        <div className="header__menu">
                            <Link to="/" className="links" style={{ textDecoration: 'none', color: "white" }} name="Home" onClick={() => handleActive("Home")}>
                                <div className="header__menuitem">Home</div>
                            </Link>
                            <Link to="/games" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Games")}>
                                <div className="header__menuitem">Games</div>
                            </Link>
                            <Link to="/blognews" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("BlogNews")}>
                                <div className="header__menuitem">Blog News</div>
                            </Link>
                            <Link to="/contact" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Contact")}>
                                <div className="header__menuitem">Contact</div>
                            </Link>
                        </div>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <MenuRoundedIcon style={{fontSize: "30px"}} />                       
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/" className="links" style={{ textDecoration: 'none', color: "white" }} name="Home" onClick={() => handleActive("Home")}>
                                    <div className="header__menuitemdrop">Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/games" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Games")}>
                                    <div className="header__menuitemdrop">Games</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blognews" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("BlogNews")}>
                                    <div className="header__menuitemdrop">Blog News</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="links" style={{ textDecoration: 'none', color: "white" }} onClick={() => handleActive("Contact")}>
                                    <div className="header__menuitemdrop">Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Header
