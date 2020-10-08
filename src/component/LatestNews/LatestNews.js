import React from 'react';

import Post from './Post';
import Trending from './Trending';

import './LatestNews.scss'

function LatestNews() {
    return (
        <div className="latestnews">
            <div className="latestnews__box container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="latestnews__content">
                            <h2>LATEST NEWS</h2>
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="trending">
                            <h3>Trending</h3>
                            <Trending />
                            <Trending />
                            <Trending />
                            <Trending />
                        </div>
                        <div className="latestnews__ads">
                            <img src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\add.jpg')} className="adsimg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews
