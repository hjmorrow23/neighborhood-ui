import React from 'react';
import BannerStyles from './styles/BannerStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <BannerStyles>
            <div className="banner-text-wrapper">
                
                <h1>Beverly</h1>
                <h2>Chicago, Illinois</h2>
            </div>
            <div className="banner-buttons">
                <a href=""><FontAwesomeIcon icon="heart" /> <span>Save</span></a>
                <a href=""><FontAwesomeIcon icon="share-square" /> <span>Share</span></a>
            </div>
        </BannerStyles>
    );
};

export default Banner;