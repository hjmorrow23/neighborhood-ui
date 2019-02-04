import styled from 'styled-components';
import img from '../../assets/img/profile.jpeg';
const NeighborhoodAgentStyles = styled.article`
    position: absolute;
    top: -37px;
    right: 4%;
    border: 1px solid ${props => props.theme.agentBorder};
    width: 340px;
    padding: .9375em 1.1875em 1.25em;
    background-color: ${props => props.theme.white};
    font-size: 14px;

    h1,
    p {
        margin: 0;
    }

    h1,
    .request-link {
        text-align: center;
        text-transform: uppercase;
        line-height: 15px;
        font-weight: 600;
    }

    .agent {
        padding: 20px 0;
    }

    .agent-img {
        width: 80px;
        height: 80px;
        background: url(${img}) no-repeat;
        background-size: cover;
        border-radius: 50%;
        display: inline-block;
        margin-right: 20px;
    }

    .agent-info {
        display: inline-block;
        width: calc(100% - 100px);
        vertical-align: top;
    }

    .agent-description {
        margin-bottom: 20px;
    }

    .agent-name {
        color: ${props => props.theme.primary};
    }

    .agent-comp {
        color: #dfdfdf;
    }

    .agent-number {
        font-weight: 600;
    }

    .agent-name,
    .agent-number,
    .agent-comp {
        margin-bottom: 3px;
    }

    .agent-rating {
        font-weight: 600;

        .stars {
            display: inline-block;
            color: ${props => props.theme.primary};
            margin-right: 10px;
        }

        span {
            font-weight: 400;
            color: ${props => props.theme.primary};
        }
    }

    .request-link {
        display: block;
        padding: 9px 28px;
        text-decoration: none;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.primary};
        border-bottom: 3px solid ${props => props.theme.primaryHover};
        transition: background-color .35s;
    }

    .request-link:hover {
        background-color: ${props => props.theme.primaryHover};
    }
`;

export default NeighborhoodAgentStyles;