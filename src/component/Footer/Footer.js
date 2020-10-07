import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';

import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__box container-fluid">
                <h3>Logo</h3>
                <div>
                    <div className="footer__menu">
                        <div className="footer__menuitem active">Home</div>
                        <div className="footer__menuitem">Games</div>
                        <div className="footer__menuitem">News</div>
                        <div className="footer__menuitem">Reviews</div>
                        <div className="footer__menuitem">Contact</div>
                    </div>
                </div>
                <div>
                    <FacebookIcon className="footer__followicon" />
                    <TwitterIcon className="footer__followicon" />
                    <InstagramIcon className="footer__followicon" />
                </div>
            </div>
            <div className="footer__copyright">
                Copyright <CopyrightIcon className="copyrighticon" /> All Rights Reserved by Bhavesh Solanki
            </div>
        </div>
    )
}

export default Footer
