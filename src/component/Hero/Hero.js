import React from 'react'

import './Hero.scss';

function Hero() {
    return (
        <div className="Hero">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators carousel-indicators-numbers">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">1</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">2</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2">3</li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item homepage__imgbox active">
                        <img class="d-block homepage__image" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-fox-3829227.jpg')} alt="First slide" />
                    </div>
                    <div class="carousel-item homepage__imgbox">
                        <img class="d-block homepage__image" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-lalesh-aldarwish-194511.jpg')} alt="Second slide" />
                    </div>
                    <div class="carousel-item homepage__imgbox">
                        <img class="d-block homepage__image" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-fox-3829227.jpg')} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div className="circle">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </div>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <div className="circle">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Hero
