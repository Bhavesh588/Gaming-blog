import React from 'react'
import Hero from '../../component/Hero/Hero';
import NewPost from '../../component/NewPost/NewPost';
import LatestNews from '../../component/LatestNews/LatestNews';

import './Homepage.scss';

function Homepage() {

    return (
        <div className="homepage">
            <Hero />
            <NewPost />
            <LatestNews />
        </div>
    )
}

export default Homepage
