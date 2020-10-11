import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Post.scss'

function Post() {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="post" data-aos="fade-right">
            <div className="post__box container">
                <div className="row">
                    <div className="col-md-5 p-0">
                        <div className="post__imgbox">
                            <img src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-garrett-morrow-1337247 (1).jpg')} className="post__img" alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="post__content">
                            <h5>11.05.2019 in <p className="post__games">Games</p></h5>
                            <h3>The best online game is out now!</h3>
                            <p className="post__text">
                                {truncate(Lorem, 200)}
                            </p>
                            <button className="post__button">Read More <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
