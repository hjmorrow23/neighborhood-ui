import React, { Component } from 'react';
import SearchResultsList from "./SearchResultsList";
import HeaderStyles from './styles/HeaderStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';



class Header extends Component {
    showResults() {
        const results = document.querySelector(".search-results-wrapper");
        $(results).show();
        $(".right-item").hide();
        $(".input-wrapper").addClass("input-wrapper-long");
    }

    hideResults() {
        const results = document.querySelector(".search-results-wrapper");
        $(results).hide();
        $(".right-item").show();
        $(".input-wrapper").removeClass("input-wrapper-long");
    }

    render() {
        return (
            <HeaderStyles>
                <a href="" className="logo"></a>
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li className="input-wrapper">
                            <input id="js-header-search" className="header-search" onFocus={this.showResults} type="text" placeholder="Search neighborhood, address, city, school, zip, MLS #" />
                            <span className="search-icon"><FontAwesomeIcon icon="search" /></span>
                            <SearchResultsList neighborhoods={this.props.neighborhoods} hideResults={() => this.hideResults()}></SearchResultsList>
                        </li>
                        <li className="right-item">
                            <a href="" className="right-links">Blog</a>
                        </li>
                        <li className="right-item">
                            <a href="" className="right-links">Sign Up</a>
                        </li>
                        <li className="right-item">
                            <a href="" className="right-links">Log In</a>
                        </li>
                    </ul>
                </nav>
                <span className="clear-right"></span>
            </HeaderStyles>
        );
    }
}

export default Header;