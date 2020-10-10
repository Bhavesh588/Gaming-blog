import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './BlogPost.scss'

function BlogPost() {
    var [read, setRead] = useState(false)

    function changeRead() {
        if(read) {
            setRead(false)
        } else {
            setRead(true)
        }
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="blogpost">
            <div className="blogpost__imgbox">
                <img src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-lalesh-aldarwish-194511.jpg')} className="blogpost__img" alt="" />
            </div>
            <h5>11.05.2019 in <p className="blogpost__games">Games</p></h5>
            <h3>The best online game is out now!</h3>
            <p className="blogpost__text">
                {read ? truncate(Lorem) : truncate(Lorem, 250)}
            </p>
            <button className="blogpost__button" onClick={() => changeRead()}>{read ? 'Read less' : 'Read more'} <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
        </div>
    )
}

export default BlogPost
