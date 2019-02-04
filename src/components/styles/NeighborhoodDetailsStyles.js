import styled from 'styled-components';
import img from '../../assets/img/light-post.png';

const NeighborhoodDetailsStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 5fr 5fr;
    padding-top: 25px;

    .overview-title {
        h5 {
            .light-icon {
                background: url(${img}) no-repeat;
                background-size: cover;
                width: 60px;
                height: 60px;
                display: inline-block;
                margin-right: 20px;
            }
        }

        span {
            font-weight: 600;
            font-size: 20px;
            display: inline-block;
            vertical-align: top;
            position: relative;
            top: 18px;
        }
    }

    .stars {
        display: inline-block;
        color: ${props => props.theme.primary};
        margin-right: 10px;
    }

    .overview-description {
        font-size: 16px;
        font-weight: 400;

        .overview-header {
            .neighborhood-review {
                font-weight: 600;
                margin-right: 5px;
            }

            .review-count {
                color: ${props => props.theme.primary};
            }
        }
    }
`;

export default NeighborhoodDetailsStyles;