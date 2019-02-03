import React from 'react';
import TopFind from './TopFind';

const SearchResult = () => {
    return (
        <li>
            <a href="">
                <span></span>
                <span>Top Finds</span>
                <span></span>
            </a>
            <div>
                <h4></h4>
                <ul>
                    <TopFind></TopFind>
                </ul>
            </div>
        </li>
    );
};



export default SearchResult;