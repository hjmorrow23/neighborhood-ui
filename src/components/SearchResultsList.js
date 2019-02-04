import React, { Component } from 'react';
import SearchResult from './SearchResult';
import SearchResultsStyles from './styles/SearchResultsStyles';



class SearchResultsList extends Component {
    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if(this.node.contains(e.target)) {
            return;
        }

        this.props.hideResults();
    }

    render() {
        console.log(this.props.neighborhoods);
        return (
            <SearchResultsStyles className="search-results-wrapper">
                <div ref={node => this.node = node}>
                    <h5>Recently Viewed</h5>
                    <ul>
                        {this.props.neighborhoods.map((neighborhood, index) => 
                            <SearchResult neighborhood={neighborhood} key={index}></SearchResult>
                            )
                        }
                    </ul>
                </div>
            </SearchResultsStyles>
        );
    }
}

export default SearchResultsList;