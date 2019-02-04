import styled from "styled-components";

const SearchResultsStyles = styled.div`
    position: absolute;
    width: 100%;
    background-color: #f1f1f1;
    left: -1px;
    border: 1px solid #dfdfdf;

    h5 {
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 12px 15px;
        margin: 0;
        border-bottom: 1px solid #dfdfdf;
    }

    li {
        width: 100%;
        position: relative;
    }

    .result-link {
        padding: 14px 15px;
        display: block;
        font-size: 14px;
        color: ${props => props.theme.text};
        border-bottom: 1px solid #dfdfdf;
        z-index: 400;
    }

    .result-type {
        float: right;
    }

    .clear-right {
        clear: right;
        display: block;
    }

    .top-finds-link {
        position: absolute;
        color: ${props => props.theme.primary};
        font-size: 14px;
        top: 14px;
        right: 120px;
        z-index: 500;
        transition: color .35s;
    }

    .top-finds-link:hover {
        color: ${props => props.theme.primaryHover};
    }

    .result-item {
        height: auto;
    }

    .result-top-finds {
        padding: 12px 15px;
        background-color: #dfdfdf;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
        display: none;
        transition: transform .35s, z-index .35s;
        position: relative;
        z-index: -1;
        transform: translateY(-100%);
    }

    .result-top-finds-active {
        z-index: 300;
        display: grid;
        transform: translateY(0);
    }

    p {
        margin: 0;
        width: 100%;
    }

    .top-find-list {
        
    }

    .top-find {
        padding: 10px;
        display: inline-block;
        font-size: 14px;
        background-color: #f1f1f1;
    }

    .top-find-image {
        width: 100%;
    }

    .top-find-price {

    }

    .top-find-address {
        
    }
`;

export default SearchResultsStyles;