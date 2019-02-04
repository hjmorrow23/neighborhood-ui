import styled from 'styled-components';

const LowerNavStyles = styled.div`
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    box-shadow: 0 1px 2px rgba(0,0,0,.2);

    ul {
        list-style: none;
        margin: 0 auto;
        width: 80%;
        padding: 0;
    }
    

    li {
        display: inline-block;
    }

    a {
        text-decoration: none;
        padding: 18px 12px 22px !important;
        display: inline-block;
        color: ${props => props.theme.text};
        border-bottom: 2px solid transparent;
        transition: color .35s, border-bottom .35s;
    }

    a:hover {
        color: ${props => props.theme.primary};
        border-bottom: 2px solid ${props => props.theme.primary};
    }
`;

export default LowerNavStyles;