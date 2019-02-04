import React from 'react';
import NeighborhoodDetailsStyles from './styles/NeighborhoodDetailsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NeighborhoodDetails = () => {
    return (
        <NeighborhoodDetailsStyles>
            <div></div>
            <div className="overview-title">
                <h5>
                    <div className="light-icon"></div>
                    <span>Overview</span>
                </h5>
            </div>
            <div className="overview-description">
                <div className="overview-header">
                    <div className="stars">
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                    </div>
                    <span className="neighborhood-review">5.0</span>
                    <span className="review-count">(6 Neighborhood Reviews)</span>
                </div>
                <p>Beverly is famous for its architecture, extensive green spaces, and historic charm. This South Side neighborhood is also known for its Irish-style pubs along Western Avenue, as well as its unique shopping district that stretches down 103rd Street. Beverly offers an eclectic environment like a big city, yet provides a distinct small-town vibe. The neighborhood has a variety of homes with plenty of backyard space for outdoor recreation.</p>
            </div>
            <div></div>
        </NeighborhoodDetailsStyles>
    );
};

export default NeighborhoodDetails;