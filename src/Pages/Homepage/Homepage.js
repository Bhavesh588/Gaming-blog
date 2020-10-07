import React from 'react'
import Hero from '../../component/Hero/Hero';
import NewPost from '../../component/NewPost/NewPost';

import './Homepage.scss';

function Homepage() {
    return (
        <div className="homepage">
            <Hero />
            <NewPost />
        </div>
    )
}

export default Homepage
