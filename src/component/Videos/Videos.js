import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Videos.scss';

function Videos() {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="videos" data-aos="fade-right">
            <div className="container">
                <div className="row videos__row py-3">
                    <div className="col-md-4">
                        <div className="videos__imgbox">
                            <img src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\wallpaperflare.com_wallpaper1.jpg')} className="videos__img" alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="videos__content">
                            <h5>11.05.2019 in <p className="videos__games">Games</p></h5>
                            <h3>Watch Dogs Legion Walkthrough - Part 1</h3>
                            <p className="videos__text">
                                {truncate(Lorem, 150)}
                            </p>
                            <button className="videos__button">Watch Now <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos
