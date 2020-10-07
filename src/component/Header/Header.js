import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <div className="header__main container-fluid p-3">
                <h3>Logo</h3>
                <div>
                    <div className="header__menu">
                        <div className="header__menuitem active">Home</div>
                        <div className="header__menuitem">Games</div>
                        <div className="header__menuitem">News</div>
                        <div className="header__menuitem">Reviews</div>
                        <div className="header__menuitem">Contact</div>
                    </div>
                </div>
                <div>Login/Register</div>
            </div>
        </div>
    )
}

export default Header
