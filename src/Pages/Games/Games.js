import React from 'react'

import './Games.scss'
import Videos from '../../component/Videos/Videos';
import SearchBar from '../../component/SearchBar/SearchBar';
import Paging from '../../component/Paging/Paging';

function Games() {

    const videos = [<Videos />, <Videos />, <Videos />, <Videos />, <Videos />]

    return (
        <div className="games">
            <div className="games__title">
                <h1>Games Videos</h1>
            </div>
            <div className="games__hero">
                <img className="games__img" src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\pexels-fox-3829227.jpg')} alt="First slide" />
            </div>
            <div className="games__videos">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <SearchBar />
                            <Paging todos={videos} totalnumber={3} itemDisplay={2} />
                        </div>
                        <div className="col-md-2">
                            <div className="games__ads">
                                <img src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\add.jpg')} className="game__adsimg" alt="" />
                            </div>
                            <div className="games__ads">
                                <img src={require('F:\\Websites\\Gaming Blog\\gaming-blog\\src\\assets\\add.jpg')} className="game__adsimg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games
