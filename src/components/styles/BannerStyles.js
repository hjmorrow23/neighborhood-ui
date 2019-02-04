import styled from 'styled-components';
import img from '../../assets/img/banner.jpg';

const BannerStyles = styled.div`
    padding: 7.1875em 0;
    color: ${props => props.theme.white};
    background: url(${img});
    background-position: center bottom;
    background-size: cover;
    position: relative;

    :after {
        background: rgba(0,0,0,.25);
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .banner-text-wrapper {
        position: relative;
        z-index: 200;
        text-align: center;

        h1 {
            font-size: 60px;
            line-height: 60px;
            font-family: "Montserrat", sans-serif;
            margin 0;
        }

        h2 {
            font-size: 24px;
            line-height: 24px;
            margin: 12px 0 0;
        }
    }

    .banner-buttons {
        position: absolute;
        right: 9%;
        top: 20px;
        z-index: 200;

        a {
            padding: 8px 18px;
            background-color: ${props => props.theme.white};
            border-radius: 3px;
            border: 1px solid ${props => props.theme.primary};
            color: ${props => props.theme.primary};
            text-decoration: none;
            margin: 0 8px; 
            transition: color .35s, background-color .35s;

            span {
                margin-left: 5px;
            }
        }

        a:hover {
            background-color: ${props => props.theme.primary};
            color: ${props => props.theme.white};
        }
    }

`;

export default BannerStyles;