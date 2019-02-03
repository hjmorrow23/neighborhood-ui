import React from 'react';
import SearchResultsList from "./SearchResultsList";
import HeaderStyles from './styles/HeaderStyles';

const Header = () => {
    return (
        <HeaderStyles>
            <a href="" className="logo"></a>
            <nav className="main-nav">
                <ul>
                    <li className="input-wrapper">
                        <input id="js-header-search" className="header-search" type="text" placeholder="Search neighborhood, address, city, school, zip, MLS #" />
                        <SearchResultsList></SearchResultsList>
                    </li>
                    <li>
                        <a href="" className="right-links">Blog</a>
                    </li>
                    <li>
                        <a href="" className="right-links">Sign Up</a>
                    </li>
                    <li>
                        <a href="" className="right-links">Log In</a>
                    </li>
                </ul>
            </nav>
            <span className="clear-right"></span>
        </HeaderStyles>
    );
};

export default Header;