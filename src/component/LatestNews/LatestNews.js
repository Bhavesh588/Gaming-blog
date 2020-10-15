import React from 'react';
import Trending from '../Trending/Trending';
import Paging from '../Paging/Paging';
import Post from './Post'

import './LatestNews.scss'

function LatestNews() {
    const post = [<Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />, <Post />];
    
    return (
        <div className="latestnews">
            <div className="latestnews__box container">
                <div className="row">
                    <div className="col-md-9">
                        <h2>LATEST NEWS</h2>
                        <Paging todos={post} totalnumber={5} itemDisplay={3} />
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
