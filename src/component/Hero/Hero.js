import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Hero.scss';

function Hero() {
    return (
        <div className="Hero">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
                <ol className="carousel-indicators carousel-indicators-numbers">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">1</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">2</li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="hero__content">
                            <h1>Gamers World!</h1>
                            <p className="hero__des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="hero__read">Read More <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        </div>
                        <div className="homepage__imgbox">
                            <img className="d-block homepage__image" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-fox-3829227.jpg')} alt="First slide" />
                        </div>
                    </div>
                    <div className="carousel-item homepage__imgbox">
                        <div className="hero__content">
                            <h1>Gamers News!</h1>
                            <p className="hero__des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="hero__read">Read More <ArrowForwardIosIcon className="arrowbtn__1" /><ArrowForwardIosIcon className="arrowbtn__2" /></button>
                        </div>
                        <div className="homepage__imgbox">
                            <img className="d-block homepage__image" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-lalesh-aldarwish-194511.jpg')} alt="Second slide" />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div className="circle">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <div className="circle">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Hero
