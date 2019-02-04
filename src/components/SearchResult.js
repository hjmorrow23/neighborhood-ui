import React from 'react';
import TopFind from './TopFind';
import $ from 'jquery';

const SearchResult = props => {
    function toggleTopFind(e) {
        e.preventDefault();
        const topFindContainer = document.getElementById("js-top-find");
        $(topFindContainer).toggleClass("result-top-finds-active");
    }
 
    return (
        <li className="result-item">
            <a href="" className="result-link">
                <span className="neighborhood-location">{props.neighborhood.name}, {props.neighborhood.city}, IL</span>
                <span className="result-type">Neighborhood</span>
                <span className="clear-right"></span>
            </a>
            <a href="" id="js-top-find-toggle" className="top-finds-link" onClick={toggleTopFind}>Top Finds</a>
            <div id="js-top-find" className="result-top-finds">
                {
                    props.neighborhood.topListings.map((listing, index) => 
                       <TopFind listing={listing} key={index}></TopFind> 
                    )
                }
            </div>
        </li>
    );
};



export default SearchResult;