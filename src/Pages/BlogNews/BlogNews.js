import React from 'react';

import './BlogNews.scss'

import Trending from '../../component/Trending/Trending';
import BlogPost from '../../component/BlogPost/BlogPost';
import Paging   from '../../component/Paging/Paging';

function BlogNews() {

    const blogpost = [<BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />, <BlogPost />]

    return (
        <div className="blognews">
            <div className="blognews__title">
                <h1>Blog News</h1>
            </div>
            <div className="blognews__hero">
                <img className="blognews__img" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-fox-3829227.jpg')} alt="First slide" />
            </div>
            <div className="container blognews__content">
                <div className="row">
                    <div className="col-md-9">
                        <Paging todos={blogpost} totalnumber={3} itemDisplay={3} />
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

export default BlogNews
