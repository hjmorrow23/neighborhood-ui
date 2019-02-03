import React from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = () => {
    return (
        <div className="search-results-wrapper">
            <h3>Recently Viewed</h3>
            <ul>
                <SearchResult></SearchResult>
            </ul>
        </div>
    );
};

export default SearchResultsList;