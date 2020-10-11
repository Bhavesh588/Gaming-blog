import React from 'react';

import './Trending.scss';

function Trending() {
    return (
        <div className="trending" data-aos="fade-left">
            <div className="trending__box container p-0">
                <div className="row">
                    <div className="col-md-5 py-0">
                        <div className="trending__imgbox">
                            <img src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-garrett-morrow-1337247 (1).jpg')} className="trending__img" alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h5>11.05.2019 in <p className="trending__games">Games</p></h5>
                        <h6>The best online game is out now!</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending
