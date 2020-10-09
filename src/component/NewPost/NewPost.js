import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './NewPost.scss';

function NewPost() {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="newpost">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>11.05.2019 in <p className="newpost__games">Games</p></h5>
                        <h3>The best online game is out now!</h3>
                        <p className="newpost__text">
                            {truncate(Lorem, 150)}
                        </p>
                        <button className="newpost__button">Read More <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        <hr className="newpost__hr" />
                    </div>
                    <div className="col-md-4">
                        <h5>11.05.2019 in <p className="newpost__games">Playstation</p></h5>
                        <h3>Top 5 best games in november</h3>
                        <p className="newpost__text">
                            {truncate(Lorem, 150)}
                        </p>
                        <button className="newpost__button">Read More <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        <hr className="newpost__hr" />
                    </div>
                    <div className="col-md-4">
                        <h5>11.05.2019 in <p className="newpost__games">Reviews</p></h5>
                        <h3>Get this game at a promo price</h3>
                        <p className="newpost__text">
                            {truncate(Lorem, 150)}
                        </p>
                        <button className="newpost__button">Read More <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        <hr className="newpost__hr" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost
