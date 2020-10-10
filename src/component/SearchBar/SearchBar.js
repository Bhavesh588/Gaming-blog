import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBar.scss';

function SearchBar() {
    return (
        <div className="searchbar">
            <div className="container">
                <div className="searchbar__box">
                    <input type="text" placeholder="Search" />
                    <div className="searchbar__icon">
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
