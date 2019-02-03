import styled from "styled-components";
import img from "../../assets/img/neighborhoods-logo.png";

const HeaderStyles = styled.header`
    max-height: 68px;
    padding: .625rem 1.875rem;
    position: relative;
    z-index: 500;
    border-bottom: 1px solid #dfdfdf;

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: inline-block;
        
    }

    .logo {
        display: inline-block;
        width: 235px;
        height: 47px;
        background: url(${img}) no-repeat;
        background-size: cover;
        background-position: center;
    }

    .main-nav {
        float: right;
        position: relative;
        top: 4px;
    }

    .clear-right {
        clear: right;
        display: block;
    }

    .input-wrapper {
        display: inline-block;
        max-width: 420px;
        width: 420px;
        padding-left: 35px;
        border: 1px solid ${props => props.theme.text};
        height: 40px;

        .header-search {
            width: 100%;
            border: none;
            font-size: 14px;
            font-weight: 600;
            line-height: 21px;
            height: calc(100% - 2px);
            position: relative;
            bottom: 0px;
            right: 2px;
        }

        .header-search::placeholder{ 
            color: ${props => props.theme.text};
        }

        .header-search:active,
        .header-search:focus {
            outline: none;
        }

    }

    .right-links {
        margin-left: 32px;
        color: ${props => props.theme.text};
        font-size: 14px;
        line-height: 19px;
        font-weight: 600;
    }

    .search-results-wrapper {
        display: none;
    }

`;

export default HeaderStyles;