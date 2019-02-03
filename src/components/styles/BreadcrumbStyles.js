import styled from 'styled-components';

const BreadcrumbStyles = styled.div`
    padding: .625rem 1.875rem .75rem;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    .breadcrumb {
        display: inline-block;
        position: relative;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;

        a {
           color: ${props => props.theme.agentBorder}; 
        }

        .current-link {
            color: #dfdfdf; 
        }
        
    }

    .breadcrumb:first-of-type {
        padding: 0 5px 0 0;
    }

    .bullet {
        padding: 0 5px;
    }

    .bullet:before {
        content: "\\2022";
        font-size: 1em;
        position: absolute;
        left: -2px;
        top: 0;
        display: inline-block;
    }

    

`;

export default BreadcrumbStyles;